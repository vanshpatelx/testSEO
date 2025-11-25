import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend@2.0.0'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

// CSRF Protection: Allowed origins
const ALLOWED_ORIGINS = [
  'https://newworldhoarder.com',
  'https://www.newworldhoarder.com',
  'https://highriskhomeowners.com',
  'https://www.highriskhomeowners.com',
  'http://localhost:5173',
  'http://localhost:8080',
  /https:\/\/.*\.lovableproject\.com$/, // Lovable preview URLs
  /https:\/\/.*\.lovable\.app$/, // Lovable preview URLs (new domain)
]

// CORS headers will be set dynamically based on validated origin

// Rate limiting configuration
const RATE_LIMIT_MAX_SUBMISSIONS = 5
const RATE_LIMIT_WINDOW_HOURS = 1
const WHITELISTED_IPS = ['76.205.132.17'] // IPs exempt from rate limiting

// Validation schema
const formSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number'),
  streetAddress: z.string().trim().min(1, 'Street address is required').max(200),
  city: z.string().trim().min(1, 'City is required').max(100),
  state: z.string().trim().min(2, 'State is required').max(2),
  zipCode: z.string().trim().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  propertyType: z.string().trim().min(1, 'Property type is required'),
  yearBuilt: z.string().trim().regex(/^\d{4}$/, 'Invalid year').refine(
    (year) => {
      const y = parseInt(year)
      return y >= 1800 && y <= new Date().getFullYear()
    },
    'Year must be between 1800 and current year'
  ),
  sqFootage: z.string().trim().regex(/^\d+$/, 'Square footage must be a number').optional().nullable(),
  dateOfBirth: z.string().optional().nullable(),
  currentlyInsured: z.enum(['yes', 'no']),
  previousClaims: z.enum(['none', '1-2', '3+']),
  nonRenewal: z.enum(['yes', 'no']),
  reasonForNonRenewal: z.string().trim().max(500).optional().nullable(),
  additionalInfo: z.string().trim().max(1000).optional().nullable(),
  contactPreference: z.enum(['phone', 'email', 'either']),
  bestTimeToCall: z.enum(['morning', 'afternoon', 'evening', 'anytime']),
})

const resend = new Resend(Deno.env.get('RESEND_API_KEY') ?? '')

// Normalize IPv4/IPv6 and strip ports
const normalizeIp = (ip: string): string => {
  if (!ip) return 'unknown'
  let cleaned = ip.trim()
  // Take first in list if multiple
  if (cleaned.includes(',')) cleaned = cleaned.split(',')[0].trim()
  // Remove IPv6 mapped IPv4 prefix
  if (cleaned.startsWith('::ffff:')) cleaned = cleaned.replace('::ffff:', '')
  // Remove port if present
  if (cleaned.includes(':')) cleaned = cleaned.split(':')[0]
  return cleaned
}


Deno.serve(async (req) => {
  // 1. CSRF Protection: Verify origin and set CORS headers dynamically
  const origin = req.headers.get('origin')
  const referer = req.headers.get('referer')
  const requestOrigin = origin || referer
  
  let corsHeaders = {
    'Access-Control-Allow-Origin': 'https://newworldhoarder.com',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }
  
  if (requestOrigin) {
    const isAllowed = ALLOWED_ORIGINS.some(allowed => {
      if (typeof allowed === 'string') {
        return requestOrigin.startsWith(allowed)
      }
      return allowed.test(requestOrigin)
    })
    
    if (isAllowed && origin) {
      corsHeaders['Access-Control-Allow-Origin'] = origin
    } else if (!isAllowed) {
      console.error('CSRF: Request from unauthorized origin:', requestOrigin)
      return new Response(
        JSON.stringify({ error: 'Access denied' }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 403 
        }
      )
    }
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {

    // 2. Extract request metadata
    const rawIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || ''
    const ipAddress = normalizeIp(rawIp)
    const userAgent = req.headers.get('user-agent') || 'unknown'

    console.log('Request from IP:', ipAddress, 'User-Agent:', userAgent)

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 3. Rate Limiting: Check submission count from this IP (skip if whitelisted)
    if (WHITELISTED_IPS.includes(ipAddress)) {
      console.log('IP whitelisted, skipping rate limit:', ipAddress)
    } else {
      const windowStart = new Date()
      windowStart.setHours(windowStart.getHours() - RATE_LIMIT_WINDOW_HOURS)

    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('form_submissions_rate_limit')
      .select('submission_count, window_start')
      .eq('ip_address', ipAddress)
      .gte('window_start', windowStart.toISOString())
      .single()

    if (!rateLimitError && rateLimitData) {
      if (rateLimitData.submission_count >= RATE_LIMIT_MAX_SUBMISSIONS) {
        console.warn('Rate limit exceeded for IP:', ipAddress)
        return new Response(
          JSON.stringify({ 
            error: 'Rate limit exceeded. Please try again later.',
            retryAfter: RATE_LIMIT_WINDOW_HOURS * 3600
          }), 
          { 
            headers: { 
              ...corsHeaders, 
              'Content-Type': 'application/json',
              'Retry-After': String(RATE_LIMIT_WINDOW_HOURS * 3600)
            },
            status: 429 
          }
        )
      }

      // Increment submission count
      await supabase
        .from('form_submissions_rate_limit')
        .update({ 
          submission_count: rateLimitData.submission_count + 1,
          updated_at: new Date().toISOString()
        })
        .eq('ip_address', ipAddress)
        .gte('window_start', windowStart.toISOString())
    } else {
      // Create new rate limit entry
      await supabase
        .from('form_submissions_rate_limit')
        .insert({
          ip_address: ipAddress,
          submission_count: 1,
          window_start: new Date().toISOString()
        })
    }
    } // End rate limiting check

    // 4. Input Validation
    const formData = await req.json()
    
    const validationResult = formSchema.safeParse(formData)
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
      // Log detailed errors for debugging
      console.error('Validation errors:', errors)
      // Return generic error to client
      return new Response(
        JSON.stringify({ error: 'Invalid form data' }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    const validatedData = validationResult.data
    
    // 5. Insert into database with metadata
    const { error: dbError } = await supabase
      .from('form_submissions')
      .insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        street_address: validatedData.streetAddress,
        city: validatedData.city,
        state: validatedData.state,
        zip_code: validatedData.zipCode,
        property_type: validatedData.propertyType,
        year_built: validatedData.yearBuilt,
        sq_footage: validatedData.sqFootage || null,
        date_of_birth: validatedData.dateOfBirth || null,
        currently_insured: validatedData.currentlyInsured,
        previous_claims: validatedData.previousClaims,
        non_renewal: validatedData.nonRenewal,
        reason_for_non_renewal: validatedData.reasonForNonRenewal,
        additional_info: validatedData.additionalInfo,
        contact_preference: validatedData.contactPreference,
        best_time_to_call: validatedData.bestTimeToCall,
        ip_address: ipAddress,
        user_agent: userAgent,
      })

    if (dbError) throw dbError

    console.log('Form submission saved to database successfully')

    // Try to send email notification (non-blocking - won't fail submission if email fails)
    try {
      const emailResponse = await resend.emails.send({
        from: 'High Risk Homeowners <noreply@newworldhoarder.com>',
        to: ['mike@agentproservices.com'],
        reply_to: validatedData.email,
        subject: `New Insurance Inquiry - ${validatedData.state}`,
        html: `
          <h2>New Insurance Inquiry</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          ${validatedData.dateOfBirth ? `<p><strong>Date of Birth:</strong> ${validatedData.dateOfBirth}</p>` : ''}
          <p><strong>Address:</strong> ${validatedData.streetAddress}, ${validatedData.city}, ${validatedData.state} ${validatedData.zipCode}</p>
          <p><strong>Property:</strong> ${validatedData.propertyType} (Built: ${validatedData.yearBuilt})</p>
          ${validatedData.sqFootage ? `<p><strong>Square Footage:</strong> ${validatedData.sqFootage} sq ft</p>` : ''}
          <p><strong>Preferred Contact:</strong> ${validatedData.contactPreference} (${validatedData.bestTimeToCall})</p>
          <p><strong>Request IP:</strong> ${ipAddress}</p>
        `,
      })
      console.log('Email sent via Resend:', emailResponse)
    } catch (emailError) {
      console.error('Email sending failed (non-critical):', emailError)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    })
  } catch (error) {
    // Log detailed error for debugging
    console.error('Form submission error:', error)
    // Return generic error to client
    return new Response(JSON.stringify({ error: 'An error occurred while processing your request' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    })
  }
})
-- Create form_submissions table for insurance intake form
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Personal Information
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  
  -- Property Information
  state text NOT NULL,
  city text NOT NULL,
  zip_code text NOT NULL,
  property_type text NOT NULL,
  year_built text NOT NULL,
  
  -- Insurance History
  currently_insured text NOT NULL,
  previous_claims text NOT NULL,
  non_renewal text NOT NULL,
  reason_for_non_renewal text,
  
  -- Additional Information
  additional_info text,
  contact_preference text NOT NULL DEFAULT 'phone',
  best_time_to_call text NOT NULL DEFAULT 'morning',
  
  -- Metadata
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Service role (edge functions) can insert submissions
CREATE POLICY "Service role can insert form submissions"
  ON public.form_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy: Service role can read submissions
CREATE POLICY "Service role can read form submissions"
  ON public.form_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Add index on email for lookups
CREATE INDEX IF NOT EXISTS idx_form_submissions_email 
  ON public.form_submissions(email);

-- Add index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at 
  ON public.form_submissions(created_at DESC);

-- Create rate limiting table
CREATE TABLE IF NOT EXISTS public.form_submissions_rate_limit (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  submission_count integer DEFAULT 1,
  window_start timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on rate limit table
ALTER TABLE public.form_submissions_rate_limit ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can manage rate limits
CREATE POLICY "Service role can manage rate limits"
  ON public.form_submissions_rate_limit
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Index for fast rate limit lookups
CREATE INDEX IF NOT EXISTS idx_rate_limit_ip_window 
  ON public.form_submissions_rate_limit(ip_address, window_start);

-- Function to clean up old rate limit records
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.form_submissions_rate_limit
  WHERE window_start < (now() - interval '1 hour');
END;
$$;
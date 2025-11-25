-- CRITICAL SECURITY FIX: Remove public read access to form_submissions table
-- This table contains highly sensitive PII and should only be accessible via service role

-- Drop the existing overly permissive policies
DROP POLICY IF EXISTS "Service role can read form submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "Service role can insert form submissions" ON public.form_submissions;

-- RLS remains enabled on the table
-- With no policies, public access is completely blocked
-- Only the service role (used by edge functions) can bypass RLS and access the data

-- This ensures:
-- ✅ Edge functions can insert form submissions (using service role)
-- ✅ Edge functions can read form submissions (using service role)  
-- ❌ Public/anonymous users CANNOT read any data
-- ❌ Public/anonymous users CANNOT insert data directly
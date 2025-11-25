-- CRITICAL SECURITY FIX: Protect form submissions data
-- This table contains highly sensitive PII that should NOT be publicly accessible

-- Add RLS policies to form_submissions table
CREATE POLICY "Only service role can read form submissions"
ON public.form_submissions
FOR SELECT
TO service_role
USING (true);

CREATE POLICY "Service role can insert form submissions"
ON public.form_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can update form submissions"
ON public.form_submissions
FOR UPDATE
TO service_role
USING (true);

-- Protect rate limit table as well
CREATE POLICY "Only service role can read rate limits"
ON public.form_submissions_rate_limit
FOR SELECT
TO service_role
USING (true);

CREATE POLICY "Service role can insert rate limits"
ON public.form_submissions_rate_limit
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can update rate limits"
ON public.form_submissions_rate_limit
FOR UPDATE
TO service_role
USING (true);

CREATE POLICY "Service role can delete old rate limits"
ON public.form_submissions_rate_limit
FOR DELETE
TO service_role
USING (true);
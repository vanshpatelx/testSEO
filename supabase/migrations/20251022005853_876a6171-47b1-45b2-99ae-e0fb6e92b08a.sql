-- Add RLS policies for form_submissions table
-- Only service role (used by edge function) can access submissions

CREATE POLICY "Service role can manage submissions"
ON public.form_submissions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Optionally allow authenticated users with admin role to view submissions
-- (Future-proofing in case admin dashboard is added later)
CREATE POLICY "Service role can read submissions"
ON public.form_submissions
FOR SELECT
TO authenticated
USING (false); -- Disabled by default, can be updated when admin system is added
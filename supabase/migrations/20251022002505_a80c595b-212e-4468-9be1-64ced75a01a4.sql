-- Enable Row Level Security on form_submissions table
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Remove any existing permissive policies that might allow public access
-- (This is a safety measure in case any exist)

-- The form_submissions table should have NO public SELECT access
-- The edge function uses the service role which bypasses RLS, so it can still INSERT
-- This effectively locks down all public access to this sensitive PII data

-- No SELECT policy = No one can read this data except service role
-- No INSERT policy for anon/public = Only service role can insert (via edge function)
-- No UPDATE/DELETE policies = Only service role can modify

-- If you need admin access in the future, you would add authenticated policies like:
-- CREATE POLICY "Admins can view form submissions" ON public.form_submissions
-- FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
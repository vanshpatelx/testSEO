-- Ensure Row Level Security is enabled on form_submissions_rate_limit table
ALTER TABLE public.form_submissions_rate_limit ENABLE ROW LEVEL SECURITY;

-- The existing policy "Service role can manage rate limits" already restricts access
-- to the service role only (restrictive policy with ALL command)
-- With RLS enabled and no permissive policies for anonymous/public users,
-- all public access is automatically blocked

-- No additional policies needed - default deny for all operations except service role
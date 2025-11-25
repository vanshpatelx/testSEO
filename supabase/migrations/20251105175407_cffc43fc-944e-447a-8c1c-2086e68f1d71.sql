-- Add RESTRICTIVE policies to explicitly block anon/public access
-- RESTRICTIVE policies work as AND conditions, blocking unwanted access

-- Block all anon access to form_submissions
CREATE POLICY "Block anon from form_submissions"
ON public.form_submissions
AS RESTRICTIVE
FOR ALL
TO anon
USING (false)
WITH CHECK (false);

-- Block all public access to form_submissions
CREATE POLICY "Block public from form_submissions"
ON public.form_submissions
AS RESTRICTIVE
FOR ALL
TO public
USING (false)
WITH CHECK (false);

-- Block all anon access to rate_limit table
CREATE POLICY "Block anon from rate_limit"
ON public.form_submissions_rate_limit
AS RESTRICTIVE
FOR ALL
TO anon
USING (false)
WITH CHECK (false);

-- Block all public access to rate_limit table
CREATE POLICY "Block public from rate_limit"
ON public.form_submissions_rate_limit
AS RESTRICTIVE
FOR ALL
TO public
USING (false)
WITH CHECK (false);
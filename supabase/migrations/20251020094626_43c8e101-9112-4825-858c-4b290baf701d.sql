-- Add square footage and date of birth columns to form_submissions table
ALTER TABLE public.form_submissions 
ADD COLUMN IF NOT EXISTS sq_footage text,
ADD COLUMN IF NOT EXISTS date_of_birth date;
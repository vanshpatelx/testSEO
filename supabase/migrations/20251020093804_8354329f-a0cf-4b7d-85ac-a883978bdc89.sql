-- Add street_address column to form_submissions table
ALTER TABLE public.form_submissions 
ADD COLUMN street_address text NOT NULL DEFAULT '';
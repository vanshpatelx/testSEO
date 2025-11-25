-- Fix search_path security issue for cleanup_old_rate_limits function
-- Add pg_catalog to prevent search_path manipulation attacks

ALTER FUNCTION public.cleanup_old_rate_limits()
SET search_path = 'public', 'pg_catalog';
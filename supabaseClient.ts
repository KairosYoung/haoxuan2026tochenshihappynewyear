import { createClient } from '@supabase/supabase-js';

// Using valid URL format to prevent "Invalid URL" error during initialization
// These are placeholders and will not function for data fetching until replaced with real credentials
const supabaseUrl = 'https://placeholder.supabase.co';
const supabaseKey = 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
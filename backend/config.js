import  { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
/*
Very important: Do NOT commit your .env file to source control (git)
Add the following files to backend (not visible in GitHub):
.env
.gitignore
inside .env put your Supabase keys like so:
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
 */
// Load environment variables from .env file
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Service Key must be defined in .env');
}

// Create and export the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
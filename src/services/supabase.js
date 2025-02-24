import { createClient } from "@supabase/supabase-js";

// Load environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ensure required variables are set
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase environment variables are missing.");
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

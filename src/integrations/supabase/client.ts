// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ebufewlhtykcwupsqyqa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWZld2xodHlrY3d1cHNxeXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNDQ5NDIsImV4cCI6MjA0OTcyMDk0Mn0._SPKUkaA9FY51mMDUmiMaVRNx30tNDx9hTGNdkwTH-c";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
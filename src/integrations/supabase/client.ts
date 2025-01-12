import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebufewlhtykcwupsqyqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWZld2xodHlrY3d1cHNxeXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNDQ5NDIsImV4cCI6MjA0OTcyMDk0Mn0._SPKUkaA9FY51mMDUmiMaVRNx30tNDx9hTGNdkwTH-c';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
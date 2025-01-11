import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebufewlhtykcwupsqyqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWZld2xodHlrY3d1cHNxeXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMjc2MDAsImV4cCI6MjAyMDYwMzYwMH0.mTF-vT_qHsrU4wI_qBYZqrKQOEF0t6iJwt8qwVp1YAk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey
    }
  }
});
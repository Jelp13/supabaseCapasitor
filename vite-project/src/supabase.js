// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlxiqdjkykqpdcskxbfd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhseGlxZGpreWtxcGRjc2t4YmZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzkwNTIsImV4cCI6MjA2MzAxNTA1Mn0.jS6LEug1hoCLX4pXnkxy4LcKznbooVByPioZRE2-g38';
export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://erjshykxrvbmosiuhtiw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyanNoeWt4cnZibW9zaXVodGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjY2MTMsImV4cCI6MjA1MDUwMjYxM30.r8_li9raibAWVPdpZTMpb2U7fqIcr9SDP_CDX3FBOPc";

export const supabase = createClient(supabaseUrl, supabaseKey);

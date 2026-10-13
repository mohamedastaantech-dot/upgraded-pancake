// Astaan HR Portal · Supabase connection
// Supabase → Project Settings → API. Copy the "Project URL" and the "anon public" key here.
// The anon key is meant to be public; the database rules (01_schema.sql) protect the data.
// NEVER put the "service_role" key in this file.
window.ASTAAN_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-KEY"
};

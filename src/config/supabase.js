import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://egcjftwpzbjzwsvvkpgz.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY2pmdHdwemJqendzdnZrcGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDQ5MzIsImV4cCI6MjA3NDUyMDkzMn0.CIuv6hfOgk0YceU-w4XsjcHc3ghOXGTfRjtnbr_Ovs4";

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

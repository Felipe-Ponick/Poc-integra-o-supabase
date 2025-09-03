import { createClient } from '@supabase/supabase-js'

// IMPORTANTE: Substitua estas URLs pelas suas credenciais do Supabase
// Você pode encontrar essas informações em: Settings > API no seu projeto Supabase
const supabaseUrl = 'https://zucwyhiiyhbqqgmxzjsj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Y3d5aGlpeWhicXFnbXh6anNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MjQ1MzUsImV4cCI6MjA3MjUwMDUzNX0.zNo4fwNcf30JrZPi22tZr9FfV_v7q-8aqH57fWExI5s' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string | null
          description: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string | null
          description?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          description?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          id: string
          password_hash: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          password_hash: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          password_hash?: string
          username?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          address: string
          banner_image: string | null
          created_at: string | null
          description: string
          end_date: string
          id: string
          location: string
          start_date: string
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          address: string
          banner_image?: string | null
          created_at?: string | null
          description: string
          end_date: string
          id?: string
          location: string
          start_date: string
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          banner_image?: string | null
          created_at?: string | null
          description?: string
          end_date?: string
          id?: string
          location?: string
          start_date?: string
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      speakers: {
        Row: {
          bio: string
          created_at: string | null
          event_id: string | null
          id: string
          image: string | null
          name: string
        }
        Insert: {
          bio: string
          created_at?: string | null
          event_id?: string | null
          id?: string
          image?: string | null
          name: string
        }
        Update: {
          bio?: string
          created_at?: string | null
          event_id?: string | null
          id?: string
          image?: string | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "speakers_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsors: {
        Row: {
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          name: string
          tier: string
          website: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name: string
          tier: string
          website?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          tier?: string
          website?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio: string | null
          category: string
          created_at: string
          id: string
          image: string
          name: string
          position: string
        }
        Insert: {
          bio?: string | null
          category: string
          created_at?: string
          id?: string
          image: string
          name: string
          position: string
        }
        Update: {
          bio?: string | null
          category?: string
          created_at?: string
          id?: string
          image?: string
          name?: string
          position?: string
        }
        Relationships: []
      }
      tickets: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          price: number
          quantity: number
          remaining: number
          type: string
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          price: number
          quantity: number
          remaining: number
          type: string
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          price?: number
          quantity?: number
          remaining?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_admin_credentials: {
        Args: {
          p_username: string
          p_password: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

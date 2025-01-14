import { useState, useEffect } from "react"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { TeamMemberCard } from "./TeamMemberCard"
import { AddTeamMemberForm } from "./AddTeamMemberForm"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"

export type TeamMemberCategory = "leadership" | "advisory" | "events" | "social"

export type TeamMember = {
  id: string
  name: string
  position: string
  image: string
  bio: string | null
  category: TeamMemberCategory
}

export function TeamMembersForm() {
  const [isAddingMember, setIsAddingMember] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  // Check authentication status only once on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user?.id) {
        toast.error("Please log in to access this page")
        navigate("/admin/login")
      }
    }
    checkAuth()
  }, [])

  // Subscribe to auth changes
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate("/admin/login")
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  // Fetch team members
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) {
        toast.error("Failed to fetch team members: " + error.message)
        throw error
      }
      return data as TeamMember[]
    },
  })

  // Add team member
  const addMutation = useMutation({
    mutationFn: async (values: Omit<TeamMember, "id">) => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user?.id) {
        throw new Error("Not authenticated")
      }

      const { data, error } = await supabase
        .from('team_members')
        .insert([values])
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] })
      toast.success("Team member added successfully!")
      setIsAddingMember(false)
    },
    onError: (error) => {
      if (error.message === "Not authenticated") {
        navigate("/admin/login")
      } else {
        toast.error("Failed to add team member: " + error.message)
      }
    },
  })

  // Update team member
  const updateMutation = useMutation({
    mutationFn: async ({ id, ...values }: TeamMember) => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user?.id) {
        throw new Error("Not authenticated")
      }

      const { data, error } = await supabase
        .from('team_members')
        .update(values)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] })
      toast.success("Team member updated successfully!")
      setEditingMember(null)
    },
    onError: (error) => {
      if (error.message === "Not authenticated") {
        navigate("/admin/login")
      } else {
        toast.error("Failed to update team member: " + error.message)
      }
    },
  })

  // Delete team member
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user?.id) {
        throw new Error("Not authenticated")
      }

      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id)
      
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] })
      toast.success("Team member deleted successfully!")
    },
    onError: (error) => {
      if (error.message === "Not authenticated") {
        navigate("/admin/login")
      } else {
        toast.error("Failed to delete team member: " + error.message)
      }
    },
  })

  const handleSubmit = (values: Omit<TeamMember, "id">) => {
    if (editingMember) {
      updateMutation.mutate({ ...values, id: editingMember.id })
    } else {
      addMutation.mutate(values)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Members</h2>
        {!isAddingMember && !editingMember && (
          <Button onClick={() => setIsAddingMember(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Team Member
          </Button>
        )}
      </div>

      {(isAddingMember || editingMember) && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            {editingMember ? "Edit Team Member" : "Add New Team Member"}
          </h2>
          <AddTeamMemberForm
            onSubmit={handleSubmit}
            initialData={editingMember || undefined}
          />
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setIsAddingMember(false)
              setEditingMember(null)
            }}
          >
            Cancel
          </Button>
        </div>
      )}

      {!isAddingMember && !editingMember && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers?.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onDelete={(id) => {
                if (window.confirm("Are you sure you want to delete this team member?")) {
                  deleteMutation.mutate(id)
                }
              }}
              onEdit={(member) => setEditingMember(member)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

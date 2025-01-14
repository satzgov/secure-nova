import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Pencil, Trash2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const teamMemberSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "Position is required.",
  }),
  image: z.string().min(1, {
    message: "Please upload an image.",
  }),
  bio: z.string().optional(),
  category: z.enum(["leadership", "advisory", "events", "social"], {
    required_error: "Please select a team category.",
  }),
})

type TeamMember = z.infer<typeof teamMemberSchema> & { id: string }

export function TeamMembersForm() {
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof teamMemberSchema>>({
    resolver: zodResolver(teamMemberSchema),
    defaultValues: {
      name: "",
      position: "",
      image: "",
      bio: "",
      category: "leadership",
    },
  })

  // Fetch team members
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data as TeamMember[]
    },
  })

  // Add team member
  const addMutation = useMutation({
    mutationFn: async (values: z.infer<typeof teamMemberSchema>) => {
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
      form.reset()
    },
    onError: (error) => {
      toast.error("Failed to add team member: " + error.message)
    },
  })

  // Delete team member
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
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
      toast.error("Failed to delete team member: " + error.message)
    },
  })

  function onSubmit(values: z.infer<typeof teamMemberSchema>) {
    addMutation.mutate(values)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Add New Team Member</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Upload or enter image URL" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please upload a high-resolution profile image
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Category</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="leadership">Leadership</option>
                      <option value="advisory">Advisory</option>
                      <option value="events">Events</option>
                      <option value="social">Social Media</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter team member bio"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Add Team Member</Button>
          </form>
        </Form>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Team Members List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers?.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.position}</p>
                <p className="text-sm mt-2">{member.bio}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Category: {member.category}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 p-4">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteMutation.mutate(member.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
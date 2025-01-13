import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/integrations/supabase/client"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"
import { EventsForm } from "./EventsForm"

export function EventsList() {
  const [editingEvent, setEditingEvent] = useState<any>(null)

  const { data: events, isLoading, refetch } = useQuery({
    queryKey: ['admin-events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('start_date', { ascending: false })
      
      if (error) throw error
      return data
    }
  })

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      toast.success("Event deleted successfully")
      refetch()
    } catch (error) {
      console.error('Error:', error)
      toast.error("Failed to delete event")
    }
  }

  if (editingEvent) {
    return (
      <EventsForm 
        event={editingEvent} 
        onSuccess={() => {
          setEditingEvent(null)
          refetch()
        }} 
      />
    )
  }

  if (isLoading) {
    return <div>Loading events...</div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Events List</h2>
      <div className="grid gap-4">
        {events?.map((event) => (
          <div 
            key={event.id} 
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">
                {new Date(event.start_date).toLocaleDateString()} at{' '}
                {new Date(event.start_date).toLocaleTimeString()}
              </p>
              <p className="text-sm text-gray-600">{event.location}</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => setEditingEvent(event)}
              >
                Edit
              </Button>
              <Button 
                variant="destructive"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
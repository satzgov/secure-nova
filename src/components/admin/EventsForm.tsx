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
import { useNavigate } from "react-router-dom"

const eventSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  date: z.string().min(1, {
    message: "Please select a date.",
  }),
  time: z.string().min(1, {
    message: "Please select a time.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  image: z.string().optional(),
})

export function EventsForm({ event, onSuccess }: { event?: any, onSuccess?: () => void }) {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: event?.title || "",
      date: event?.start_date ? new Date(event.start_date).toISOString().split('T')[0] : "",
      time: event?.start_date ? new Date(event.start_date).toTimeString().split(' ')[0] : "",
      location: event?.location || "",
      description: event?.description || "",
      image: event?.banner_image || "",
    },
  })

  async function onSubmit(values: z.infer<typeof eventSchema>) {
    try {
      const startDate = new Date(`${values.date}T${values.time}`)
      const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // Default 2 hours duration

      const eventData = {
        title: values.title,
        description: values.description,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        location: values.location,
        address: values.location,
        banner_image: values.image || null,
      }

      if (event?.id) {
        const { error } = await supabase
          .from('events')
          .update(eventData)
          .eq('id', event.id)

        if (error) throw error
        toast.success("Event updated successfully!")
      } else {
        const { error } = await supabase
          .from('events')
          .insert([eventData])

        if (error) throw error
        toast.success("Event added successfully!")
      }

      if (onSuccess) {
        onSuccess()
      } else {
        navigate('/admin/dashboard/events')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error("Failed to save event")
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{event ? 'Edit Event' : 'Add New Event'}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter event description"
                    className="h-24"
                    {...field}
                  />
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
                <FormLabel>Banner Image</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Upload or enter banner image URL" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Optional: Add a banner image for the event
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">{event ? 'Update Event' : 'Add Event'}</Button>
        </form>
      </Form>
    </div>
  )
}
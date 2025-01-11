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

const socialMediaSchema = z.object({
  platform: z.enum(["twitter", "linkedin", "facebook", "instagram"], {
    required_error: "Please select a platform.",
  }),
  content: z.string().min(1, {
    message: "Content is required.",
  }),
  image: z.string().optional(),
  link: z.string().url({
    message: "Please enter a valid URL.",
  }),
  scheduledDate: z.string().optional(),
})

export function SocialMediaForm() {
  const form = useForm<z.infer<typeof socialMediaSchema>>({
    resolver: zodResolver(socialMediaSchema),
    defaultValues: {
      platform: "twitter",
      content: "",
      image: "",
      link: "",
      scheduledDate: "",
    },
  })

  function onSubmit(values: z.infer<typeof socialMediaSchema>) {
    toast.success("Social media post scheduled successfully!")
    console.log(values)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Schedule Social Media Post</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your post content"
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
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Upload or enter image URL" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Optional: Add an image to your post
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://example.com" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="scheduledDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Schedule Date</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Optional: Schedule your post for later
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Schedule Post</Button>
        </form>
      </Form>
    </div>
  )
}
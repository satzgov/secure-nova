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

const sponsorSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }),
  logo: z.string().min(1, {
    message: "Please upload a logo.",
  }),
  tier: z.enum(["Platinum", "Gold", "Silver"], {
    required_error: "Please select a tier.",
  }),
  description: z.string().optional(),
})

export function SponsorsForm() {
  const form = useForm<z.infer<typeof sponsorSchema>>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      name: "",
      website: "",
      logo: "",
      tier: "Platinum",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof sponsorSchema>) {
    toast.success("Sponsor added successfully!")
    console.log(values)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Sponsor</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo URL</FormLabel>
                <FormControl>
                  <Input placeholder="Upload or enter logo URL" {...field} />
                </FormControl>
                <FormDescription>
                  Please upload a high-resolution logo image
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sponsorship Tier</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                  </select>
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
                    placeholder="Enter sponsor description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Add Sponsor</Button>
        </form>
      </Form>
    </div>
  )
}
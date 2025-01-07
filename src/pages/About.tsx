import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Our Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* President Card */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                    alt="President"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-muted-foreground font-medium mb-2">President</p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Leading our chapter with dedication and vision, bringing extensive experience
                  in cloud security and community leadership.
                </p>
              </CardContent>
            </Card>

            {/* Vice President Card */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Vice President"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-muted-foreground font-medium mb-2">Vice President</p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Supporting our chapter's growth and initiatives with expertise in
                  cybersecurity and project management.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional sections can be added here */}
      </main>
    </div>
  );
};

export default About;
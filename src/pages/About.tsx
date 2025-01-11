import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* President Card */}
            <Card className="max-w-sm mx-auto">
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
                  Leading our chapter with dedication and vision.
                </p>
              </CardContent>
            </Card>

            {/* Vice President Card */}
            <Card className="max-w-sm mx-auto">
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
                  Supporting our chapter's growth and initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Advisory Board</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="max-w-sm mx-auto">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-158109${index}226825-a6a2a5aee158`}
                      alt={`Advisor ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Advisor Name {index}</h3>
                  <p className="text-muted-foreground font-medium mb-2">Advisory Member</p>
                  <Separator className="my-4" />
                  <p className="text-sm text-muted-foreground">
                    Providing strategic guidance and industry expertise.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Events Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Events Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((index) => (
              <Card key={index} className="max-w-sm mx-auto">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-158109${index}226825-a6a2a5aee158`}
                      alt={`Events Team Member ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Team Member {index}</h3>
                  <p className="text-muted-foreground font-medium mb-2">Events Coordinator</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Media Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Social Media Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((index) => (
              <Card key={index} className="max-w-sm mx-auto">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-158109${index}226825-a6a2a5aee158`}
                      alt={`Social Media Team Member ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Team Member {index}</h3>
                  <p className="text-muted-foreground font-medium mb-2">Social Media Manager</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
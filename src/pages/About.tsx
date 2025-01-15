import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type TeamMember = {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string | null;
  category: 'leadership' | 'advisory' | 'events' | 'social';
};

const About = () => {
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
      
      if (error) throw error;
      console.log("Team members data:", data); // Debug log
      return data as TeamMember[];
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const leadershipTeam = teamMembers?.filter(member => member.category === 'leadership') || [];
  const advisoryTeam = teamMembers?.filter(member => member.category === 'advisory') || [];
  const eventsTeam = teamMembers?.filter(member => member.category === 'events') || [];
  const socialTeam = teamMembers?.filter(member => member.category === 'social') || [];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, member: TeamMember) => {
    console.error(`Image failed to load for ${member.name}:`, member.image);
    e.currentTarget.src = '/placeholder.svg'; // Fallback image
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Leadership Section */}
        {leadershipTeam.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leadershipTeam.map((member) => (
                <Card key={member.id} className="max-w-sm mx-auto">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg relative">
                      <img
                        src={`${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, member)}
                        onLoad={() => console.log(`Image loaded successfully for ${member.name}: ${member.image}`)}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{member.position}</p>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Advisory Board Section */}
        {advisoryTeam.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Advisory Board</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advisoryTeam.map((member) => (
                <Card key={member.id} className="max-w-sm mx-auto">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={`${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, member)}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{member.position}</p>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Events Team Section */}
        {eventsTeam.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Events Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {eventsTeam.map((member) => (
                <Card key={member.id} className="max-w-sm mx-auto">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={`${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, member)}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{member.position}</p>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Social Media Team Section */}
        {socialTeam.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Social Media Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {socialTeam.map((member) => (
                <Card key={member.id} className="max-w-sm mx-auto">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={`${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, member)}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{member.position}</p>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default About;
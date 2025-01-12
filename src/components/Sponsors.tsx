import { Card } from "./ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Sponsors = () => {
  const { data: sponsors, isLoading } = useQuery({
    queryKey: ['sponsors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .order('tier')
      
      if (error) throw error
      return data
    }
  });

  if (isLoading) {
    return <div>Loading sponsors...</div>;
  }

  const sponsorsByTier = sponsors?.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="space-y-12">
          {sponsorsByTier && Object.entries(sponsorsByTier).map(([tier, tierSponsors]) => (
            <div key={tier} className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-gray-700">{tier} Sponsors</h3>
              <Card className="p-8 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                  {tierSponsors.map((sponsor) => (
                    <div key={sponsor.id} className="w-32 h-32 p-4 flex items-center justify-center">
                      <a 
                        href={sponsor.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={sponsor.name}
                      >
                        <img
                          src={sponsor.logo_url}
                          alt={`${sponsor.name} logo`}
                          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
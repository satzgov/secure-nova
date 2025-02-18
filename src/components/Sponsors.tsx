import { Card } from "./ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type Sponsor = {
  id: string;
  name: string;
  website: string | null;
  logo_url: string | null;
  tier: string;
  description: string | null;
  created_at: string;
};

const Sponsors = () => {
  const { data: sponsors, isLoading } = useQuery<Sponsor[]>({
    queryKey: ['sponsors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .order('tier')
      
      if (error) throw error
      console.log('Fetched sponsors:', data);
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
  }, {} as Record<string, Sponsor[]>);

  console.log('Grouped sponsors by tier:', sponsorsByTier);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, sponsorName: string) => {
    console.error(`Error loading image for sponsor ${sponsorName}:`, e);
    e.currentTarget.src = '/placeholder.svg';
  };

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
                  {tierSponsors.map((sponsor) => {
                    console.log(`Rendering sponsor ${sponsor.name}:`, sponsor);
                    return (
                      <div key={sponsor.id} className="w-40 h-40 p-4 flex items-center justify-center">
                        <a 
                          href={sponsor.website || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title={sponsor.name}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <img
                            src={sponsor.logo_url || '/placeholder.svg'}
                            alt={`${sponsor.name} logo`}
                            className="max-w-full max-h-full object-contain transition-all duration-300"
                            onError={(e) => handleImageError(e, sponsor.name)}
                            style={{ imageRendering: 'auto' }}
                          />
                        </a>
                      </div>
                    );
                  })}
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
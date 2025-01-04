import { Card } from "./ui/card";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum",
      logos: [
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
      ]
    },
    {
      tier: "Gold",
      logos: [
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
      ]
    },
    {
      tier: "Silver",
      logos: [
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
        "/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png",
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-gray-700">{tier.tier} Sponsors</h3>
              <Card className="p-8 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                  {tier.logos.map((logo, index) => (
                    <div key={index} className="w-32 h-32 p-4 flex items-center justify-center">
                      <img
                        src={logo}
                        alt={`${tier.tier} Sponsor ${index + 1}`}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
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
import { Card } from "./ui/card";

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", tier: "Platinum" },
    { name: "Sponsor 2", tier: "Gold" },
    { name: "Sponsor 3", tier: "Gold" },
    { name: "Sponsor 4", tier: "Silver" },
    { name: "Sponsor 5", tier: "Silver" },
    { name: "Sponsor 6", tier: "Silver" },
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Our Sponsors</h2>
        
        <div className="space-y-8">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsors
                .filter(s => s.tier === "Platinum")
                .map((sponsor, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="w-32 h-32 mx-auto bg-purple-100 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{sponsor.name}</span>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {sponsors
                .filter(s => s.tier === "Gold")
                .map((sponsor, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{sponsor.name}</span>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">Silver Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors
                .filter(s => s.tier === "Silver")
                .map((sponsor, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full mb-2 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{sponsor.name}</span>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
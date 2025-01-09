import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const SponsorPage = () => {
  const sponsorshipTiers = [
    {
      name: "Platinum",
      price: "$10,000",
      benefits: [
        "Premium logo placement on website and all event materials",
        "VIP access to all CSA-SFO events",
        "Speaking opportunities at major events",
        "Direct engagement with our developer community",
        "Exclusive workshop hosting opportunities",
        "Featured in our monthly newsletter"
      ]
    },
    {
      name: "Gold",
      price: "$5,000",
      benefits: [
        "Prominent logo placement on website",
        "Access to all CSA-SFO events",
        "Workshop hosting opportunities",
        "Community engagement opportunities",
        "Recognition in our newsletter"
      ]
    },
    {
      name: "Silver",
      price: "$2,500",
      benefits: [
        "Logo placement on website",
        "Access to select CSA-SFO events",
        "Community engagement opportunities",
        "Recognition in our newsletter"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Partner with CSA San Francisco</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join us in building a stronger tech community through education, innovation, and collaboration.
            </p>
            <Button className="bg-[#005CB9]">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us About Sponsorship
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact on Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Support Learning</CardTitle>
                <CardDescription>
                  Enable workshops, training sessions, and educational resources for developers at all levels.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Foster Innovation</CardTitle>
                <CardDescription>
                  Help create spaces and opportunities for developers to collaborate and innovate together.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Build Community</CardTitle>
                <CardDescription>
                  Strengthen the local tech ecosystem by supporting networking and knowledge sharing.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier) => (
              <Card key={tier.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-[#005CB9]">
                    {tier.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#005CB9] mr-2">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#005CB9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing list of partners who are helping to shape the future of technology in San Francisco.
          </p>
          <Button variant="outline" className="bg-white text-[#005CB9] hover:bg-gray-100">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SponsorPage;
import { ArrowRight, Shield, Users, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/95c2c907-a54d-4ac3-add8-493f22567fe5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Excellence Badge - Centered and Reduced Size */}
      <div className="absolute top-16 md:top-8 left-1/2 transform -translate-x-1/2 z-20 w-12 h-12 md:w-16 md:h-16">
        <img 
          src="/lovable-uploads/227c181b-b166-4afa-9575-369847e8aaa7.png" 
          alt="CSA Chapter of Excellence"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mt-24 md:mt-16">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl max-w-4xl mx-auto leading-tight mb-4 md:mb-6 text-white">
            Cloud Security Alliance San Francisco Chapter
          </h1>
          <p className="text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto text-blue-50">
            Join our 501(c)(3) nonprofit and collaborate with global industry leaders to shape the future of cybersecurity.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12 max-w-xl mx-auto">
          {[
            { number: "10K+", label: "Page Views" },
            { number: "5K+", label: "Active Users" },
            { number: "25+", label: "Sponsors" },
            { number: "15+", label: "Industry Partners" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm p-1.5 md:p-2 text-center">
              <div className="text-base md:text-lg text-white mb-0.5">{stat.number}</div>
              <p className="text-blue-50 text-xs">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 max-w-4xl mx-auto">
          {[
            { icon: Shield, text: "Expert-Led Security Guidance" },
            { icon: Users, text: "Vibrant Community Network" },
            { icon: BookOpen, text: "Continuous Learning" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 md:mb-4">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <p className="text-sm md:text-base text-blue-50">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
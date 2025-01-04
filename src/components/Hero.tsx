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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl max-w-4xl mx-auto leading-tight mb-6 text-white whitespace-nowrap">
            Cloud Security Alliance San Francisco Chapter
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-50">
            Join industry leaders and practitioners in shaping the future of cloud security
          </p>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            { number: "10K+", label: "Page Views" },
            { number: "5K+", label: "Active Users" },
            { number: "25+", label: "Sponsors" },
            { number: "15+", label: "Industry Partners" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center">
              <div className="text-3xl text-white mb-2">{stat.number}</div>
              <p className="text-blue-50 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Shield, text: "Expert-Led Security Guidance" },
            { icon: Users, text: "Vibrant Community Network" },
            { icon: BookOpen, text: "Continuous Learning" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-blue-50">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
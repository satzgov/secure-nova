import { Button } from "./ui/button";
import { ArrowRight, Shield, Users, BookOpen } from "lucide-react";

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
        <div className="absolute inset-0 bg-blue-900/70" /> {/* Dark overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl max-w-4xl mx-auto leading-tight mb-6 text-white font-bold">
          Cloud Security Alliance San Francisco Chapter
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">
          Join industry leaders and practitioners in shaping the future of cloud security
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[#005CB9] text-white hover:bg-[#004a94] px-8 py-6 h-auto text-lg group">
            Become a Member
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="px-8 py-6 h-auto text-lg bg-white/10 text-white hover:bg-white/20 border-white/20">
            View Upcoming Events
          </Button>
        </div>
        
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
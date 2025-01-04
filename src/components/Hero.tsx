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
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl max-w-4xl mx-auto leading-tight mb-6 text-white whitespace-nowrap">
          Cloud Security Alliance San Francisco Chapter
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">
          Join industry leaders and practitioners in shaping the future of cloud security
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "10K+", label: "Page Views" },
            { number: "5K+", label: "Active Users" },
            { number: "25+", label: "Sponsors" },
            { number: "15+", label: "Industry Partners" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2 text-white">{stat.number}</div>
              <p className="text-blue-50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
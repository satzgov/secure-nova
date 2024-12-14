import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl md:text-6xl max-w-4xl mx-auto leading-tight mb-4">
        We are a Next-Generation Cybersecurity Firm
      </h1>
      <p className="text-gray-600 mb-8">
        Trusted by many organizations
      </p>
      <Button className="bg-black text-white hover:bg-gray-800 px-6 py-6 h-auto text-lg group">
        Explore Our Services
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default Hero;
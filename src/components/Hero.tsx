import { Button } from "./ui/button";
import { ArrowRight, Shield, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl max-w-4xl mx-auto leading-tight mb-6 text-gray-900">
          San Francisco's Premier Cloud Security Community
        </h1>
        <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
          Join industry leaders and practitioners in shaping the future of cloud security
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 h-auto text-lg group">
            Become a Member
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="px-8 py-6 h-auto text-lg">
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
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
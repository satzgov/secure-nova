import { Button } from "./ui/button";
import { CloudCog } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 border-b bg-white">
      <div className="flex items-center space-x-3">
        <CloudCog className="w-8 h-8 text-blue-600" />
        <span className="font-semibold text-xl text-gray-900">CSA-SFO</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about" className="nav-link">About</a>
        <a href="#events" className="nav-link">Events</a>
        <a href="#resources" className="nav-link">Resources</a>
        <a href="#membership" className="nav-link">Membership</a>
      </div>
      
      <Button className="bg-blue-600 text-white hover:bg-blue-700">
        Join CSA-SFO
      </Button>
    </nav>
  );
};

export default Navbar;
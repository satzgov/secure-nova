import { Button } from "./ui/button";
import { Home, User, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b bg-white">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png" 
          alt="CSA San Francisco Chapter Logo" 
          className="h-12 w-auto"
        />
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="/" className="nav-link flex items-center gap-2">
          <Home className="w-4 h-4" />
          Home
        </a>
        <a href="#sponsor" className="nav-link flex items-center gap-2">
          <User className="w-4 h-4" />
          Sponsor
        </a>
        <a href="#about" className="nav-link">About</a>
        <a href="#events" className="nav-link">Events</a>
        <a href="#resources" className="nav-link">Resources</a>
        <a href="#membership" className="nav-link">Membership</a>
      </div>
      
      <div className="flex items-center gap-4">
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Donate
        </Button>
        <Button className="bg-[#005CB9] text-white hover:bg-[#004a94]">
          Join CSA-SFO
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
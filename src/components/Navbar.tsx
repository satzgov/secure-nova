import { Button } from "./ui/button";
import { Home, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b bg-white">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/d044d806-b2ce-4e62-a1c3-62ef65a1a39b.png" 
          alt="CSA San Francisco Chapter Logo" 
          className="h-8 md:h-12 w-auto"
        />
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="nav-link flex items-center gap-2">
          <Home className="w-4 h-4" />
          Home
        </Link>
        <Link to="#sponsor" className="nav-link flex items-center gap-2">
          <User className="w-4 h-4" />
          Sponsor
        </Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="#events" className="nav-link">Events</Link>
        <Link to="#resources" className="nav-link">Resources</Link>
        <Link to="#membership" className="nav-link">Membership</Link>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <Button size="sm" className="hidden md:flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Donate
        </Button>
        <Button size="sm" className="bg-[#005CB9] text-white hover:bg-[#004a94] text-xs md:text-sm">
          Join CSA-SFO
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
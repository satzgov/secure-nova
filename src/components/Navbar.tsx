import { Button } from "./ui/button";
import { Home, User, Plus, Calendar, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const adminId = localStorage.getItem('adminId');

  const handleAdminClick = () => {
    if (adminId) {
      navigate('/admin/dashboard');
    } else {
      navigate('/admin/login');
    }
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b bg-white relative">
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
        <Link to="/sponsor" className="nav-link flex items-center gap-2">
          <User className="w-4 h-4" />
          Sponsor
        </Link>
        <Link to="/about" className="nav-link">About</Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-link">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[200px] bg-white">
                  <Link 
                    to="/events/upcoming"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Upcoming Events</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      See what's coming up
                    </p>
                  </Link>
                  <Link
                    to="/events/past"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Past Events</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Browse our previous events
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link to="#resources" className="nav-link">Resources</Link>
        <Link to="#membership" className="nav-link">Membership</Link>
        
        <Button 
          variant="ghost"
          size="sm" 
          onClick={handleAdminClick}
          className="flex items-center gap-2"
        >
          <Settings className="w-4 h-4" />
          Admin
        </Button>
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
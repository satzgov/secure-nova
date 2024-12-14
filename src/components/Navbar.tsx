import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-lg"></div>
        <span className="font-semibold text-xl">SecureNova</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="nav-link">Solutions</a>
        <a href="#" className="nav-link">Industries</a>
        <a href="#" className="nav-link">Resources</a>
        <a href="#" className="nav-link">Company</a>
      </div>
      
      <Button className="bg-black text-white hover:bg-gray-800">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
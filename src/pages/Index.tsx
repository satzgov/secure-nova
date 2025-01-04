import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sponsors from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Sponsors />
      <Services />
    </div>
  );
};

export default Index;
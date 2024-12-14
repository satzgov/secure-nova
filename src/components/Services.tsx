import { Code, Shield, Brain, Network } from "lucide-react";

const services = [
  {
    title: "Application Security",
    description: "Comprehensive security testing and vulnerability management.",
    icon: Code,
    features: [
      "Source Code Review",
      "API Security Testing",
      "Vulnerability Management",
      "Pentesting Services"
    ]
  },
  {
    title: "Security Architecture",
    description: "Expert review and design of secure system architectures.",
    icon: Shield,
    features: [
      "Architecture Review",
      "Security Design",
      "Compliance Assessment",
      "Best Practices Implementation"
    ]
  },
  {
    title: "AI Security",
    description: "Advanced security solutions for AI/ML systems.",
    icon: Brain,
    features: [
      "LLM Security",
      "AI Model Security",
      "Threat Modeling",
      "Data Privacy Compliance"
    ]
  },
  {
    title: "Network Security",
    description: "Robust protection for your infrastructure.",
    icon: Network,
    features: [
      "Firewall Configuration",
      "IDS/IPS Systems",
      "DDoS Protection",
      "Cloud Security"
    ]
  }
];

const Services = () => {
  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Security Services That Deliver True Value
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive cybersecurity solutions tailored to protect your digital assets and infrastructure
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <service.icon className="service-icon" />
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600">• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
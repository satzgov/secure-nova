import { Calendar, Users, BookOpen, Award } from "lucide-react";

const services = [
  {
    title: "Monthly Meetups",
    description: "Regular gatherings featuring industry experts and thought leaders.",
    icon: Calendar,
    features: [
      "Expert Presentations",
      "Networking Sessions",
      "Q&A Opportunities",
      "Community Updates"
    ]
  },
  {
    title: "Member Resources",
    description: "Exclusive access to valuable cloud security resources.",
    icon: BookOpen,
    features: [
      "Best Practices Guides",
      "Research Papers",
      "Tool Recommendations",
      "Training Materials"
    ]
  },
  {
    title: "Networking",
    description: "Connect with fellow security professionals and industry leaders.",
    icon: Users,
    features: [
      "Peer Discussions",
      "Mentorship Programs",
      "Job Opportunities",
      "Community Forums"
    ]
  },
  {
    title: "Certifications",
    description: "Support for professional development and certifications.",
    icon: Award,
    features: [
      "CCSK Training",
      "Study Groups",
      "Exam Preparation",
      "Certification Paths"
    ]
  }
];

const Services = () => {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4 text-gray-900">
          Empowering Cloud Security Excellence
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our community and access exclusive benefits designed to enhance your cloud security expertise
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
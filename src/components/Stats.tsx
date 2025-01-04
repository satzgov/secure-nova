const stats = [
  { number: "500+", label: "Active Members" },
  { number: "50+", label: "Annual Events" },
  { number: "15+", label: "Industry Partners" },
  { number: "100%", label: "Cloud Focus" },
];

const Stats = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
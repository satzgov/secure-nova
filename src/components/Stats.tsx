const stats = [
  { number: "20+", label: "Global Clients" },
  { number: "4K+", label: "Daily Transactions" },
  { number: "99%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto py-16 px-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
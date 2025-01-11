import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminId = localStorage.getItem('adminId');
    if (!adminId) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-600">View and manage user accounts</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600">Configure system settings</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
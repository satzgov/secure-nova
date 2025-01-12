import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SponsorsForm } from "@/components/admin/SponsorsForm";
import { TeamMembersForm } from "@/components/admin/TeamMembersForm";
import { EventsForm } from "@/components/admin/EventsForm";
import { SocialMediaForm } from "@/components/admin/SocialMediaForm";
import { Routes, Route } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminAuth = () => {
      const adminId = localStorage.getItem('adminId');
      if (!adminId) {
        navigate('/admin/login');
      }
      setIsLoading(false);
    };

    checkAdminAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-6 mt-16">
          <Routes>
            <Route path="/sponsors" element={<SponsorsForm />} />
            <Route path="/team" element={<TeamMembersForm />} />
            <Route path="/events" element={<EventsForm />} />
            <Route path="/social" element={<SocialMediaForm />} />
            <Route path="/" element={
              <div className="text-2xl font-bold">
                Welcome to the Admin Dashboard
              </div>
            } />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
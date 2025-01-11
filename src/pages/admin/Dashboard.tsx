import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { SponsorsForm } from "@/components/admin/SponsorsForm"
import { Routes, Route } from "react-router-dom"

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="sponsors" element={<SponsorsForm />} />
            <Route path="/" element={
              <div className="text-2xl font-bold">
                Welcome to the Admin Dashboard
              </div>
            } />
            {/* Other routes will be added here */}
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AdminDashboard

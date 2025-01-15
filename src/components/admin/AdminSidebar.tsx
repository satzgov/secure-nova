import { Building, Users, Calendar, Share2 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/integrations/supabase/client"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const menuItems = [
  {
    title: "Add Sponsors",
    url: "/admin/dashboard/sponsors",
    icon: Building,
  },
  {
    title: "Team Members",
    url: "/admin/dashboard/team",
    icon: Users,
  },
  {
    title: "Events",
    url: "/admin/dashboard/events",
    icon: Calendar,
  },
  {
    title: "Social Media",
    url: "/admin/dashboard/social",
    icon: Share2,
  },
]

export function AdminSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user?.id) {
        navigate("/admin/login")
      } else {
        setIsAuthenticated(true)
      }
    }
    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false)
        navigate("/admin/login")
      } else if (session) {
        setIsAuthenticated(true)
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  const handleMenuClick = (e: React.MouseEvent, url: string) => {
    if (!isAuthenticated) {
      e.preventDefault()
      toast.error("Please log in to access this page")
      navigate("/admin/login")
    }
  }

  return (
    <Sidebar>
      <SidebarContent className="mt-16">
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname.endsWith(item.url.split('/').pop() || '')}
                  >
                    <Link 
                      to={item.url}
                      onClick={(e) => handleMenuClick(e, item.url)}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
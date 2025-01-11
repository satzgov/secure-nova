import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Users, Building, Calendar, Share2 } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sponsors Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Sponsors
            </CardTitle>
            <CardDescription>Manage sponsor listings and tiers</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Sponsor
            </Button>
          </CardContent>
        </Card>

        {/* Team Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Members
            </CardTitle>
            <CardDescription>Manage team members and roles</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </CardContent>
        </Card>

        {/* Events Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Events
            </CardTitle>
            <CardDescription>Manage upcoming and past events</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Event
            </Button>
          </CardContent>
        </Card>

        {/* Social Media Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Social Media
            </CardTitle>
            <CardDescription>Manage social media content</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Social Post
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
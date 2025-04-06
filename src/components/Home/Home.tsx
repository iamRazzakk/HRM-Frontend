import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Topbar } from "../Topbar/Topbar";
import { Sidebar } from "../shared/Sidebar";
import { useState } from "react";
import { 
  Users,
  Calendar,
  Briefcase,
  DollarSign,
  PieChart,
  Clock,
  CheckCircle,
  Activity
} from "lucide-react";
import { StatCard } from "../../components/dashboard/StatCard";
import { ActionButton } from "../../components/dashboard/ActionButton";
import { DepartmentProgress } from "../../components/dashboard/DepartmentProgress";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Mock data
  const employeeCount = 142;
  const activeProjects = 18;
  const pendingRequests = 7;
  const attendanceRate = 92;
  
  const upcomingEvents = [
    { id: 1, title: 'Team Meeting', date: 'Today, 2:00 PM' },
    { id: 2, title: 'Payroll Submission', date: 'Tomorrow' },
    { id: 3, title: 'Performance Reviews', date: 'Fri, 10:00 AM' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <div className={`flex-1 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} transition-all duration-300`}>
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="p-6">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>
          
          {/* Stats Cards Grid */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <StatCard 
              icon={<Users className="h-6 w-6" />}
              title="Total Employees"
              value={employeeCount}
              trend="+5% from last month"
            />
            <StatCard 
              icon={<Briefcase className="h-6 w-6" />}
              title="Active Projects"
              value={activeProjects}
              trend="2 new this week"
            />
            <StatCard 
              icon={<CheckCircle className="h-6 w-6" />}
              title="Pending Requests"
              value={pendingRequests}
              trend="3 approvals needed"
            />
            <StatCard 
              icon={<Clock className="h-6 w-6" />}
              title="Attendance Rate"
              value={`${attendanceRate}%`}
              trend="+2% from last week"
            />
          </div>
          
          {/* Main Content Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Employee Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    Employee Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Employee activity chart placeholder</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common HR tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <ActionButton icon={<Users />} label="Add Employee" />
                    <ActionButton icon={<Calendar />} label="Schedule Event" />
                    <ActionButton icon={<DollarSign />} label="Process Payroll" />
                    <ActionButton icon={<PieChart />} label="View Reports" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map(event => (
                      <div key={event.id} className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Department Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <DepartmentProgress name="Engineering" value={45} color="bg-blue-500" />
                    <DepartmentProgress name="Marketing" value={20} color="bg-green-500" />
                    <DepartmentProgress name="HR" value={15} color="bg-purple-500" />
                    <DepartmentProgress name="Finance" value={10} color="bg-yellow-500" />
                    <DepartmentProgress name="Operations" value={10} color="bg-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
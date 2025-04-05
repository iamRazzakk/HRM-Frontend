
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Topbar } from '../Topbar/Topbar'
import { Sidebar } from '../shared/Sidebar'
import { useState } from 'react';

export const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content */}
      <div className="lg:ml-64 transition-all">
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to HRM</CardTitle>
              <CardDescription>Manage your team efficiently.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is your HRM dashboard overview.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

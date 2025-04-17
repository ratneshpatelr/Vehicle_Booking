import { Search, Bell, User } from "lucide-react"

// Header component for the dashboard with search and user controls
export default function DashboardHeader() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Booking Dashboard</h1>
        <p className="text-gray-500">Manage your bookings and reservations</p>
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search bookings..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <User className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  )
}

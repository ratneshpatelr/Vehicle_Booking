"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CalendarClock, Car, Users, Settings, Menu, X, LogOut } from "lucide-react"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen)
  }

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Bookings", href: "/bookings", icon: CalendarClock },
    { name: "Vehicles", href: "/vehicles", icon: Car },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md"
        onClick={toggleMobileSidebar}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="relative flex flex-col h-full max-w-xs w-full bg-gray-800 text-white shadow-xl">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
            <h2 className="text-xl font-bold">VehicleBook</h2>
            <button onClick={toggleMobileSidebar}>
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm rounded-md ${
                  pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-700">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-700">
              <LogOut className="h-5 w-5 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div
        className={`hidden md:flex flex-col ${expanded ? "w-64" : "w-20"} h-full bg-gray-800 text-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
          {expanded ? (
            <h2 className="text-xl font-bold">VehicleBook</h2>
          ) : (
            <h2 className="text-xl font-bold mx-auto">VB</h2>
          )}
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm rounded-md ${
                pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <item.icon className={`h-5 w-5 ${expanded ? "mr-3" : "mx-auto"}`} />
              {expanded && item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            className={`flex items-center ${expanded ? "w-full" : "justify-center"} px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-700`}
          >
            <LogOut className={`h-5 w-5 ${expanded ? "mr-3" : ""}`} />
            {expanded && "Sign out"}
          </button>
        </div>
      </div>
    </>
  )
}

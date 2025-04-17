import type React from "react"
import { Calendar, CheckCircle, Clock, XCircle, DollarSign } from "lucide-react"

// Stats component to display booking metrics
interface DashboardStatsProps {
  totalBookings: number
  confirmedBookings: number
  pendingBookings: number
  cancelledBookings: number
  totalRevenue: number
}

export default function DashboardStats({
  totalBookings,
  confirmedBookings,
  pendingBookings,
  cancelledBookings,
  totalRevenue,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <StatCard
        title="Total Bookings"
        value={totalBookings}
        icon={<Calendar className="h-6 w-6 text-blue-500" />}
        color="blue"
      />

      <StatCard
        title="Confirmed"
        value={confirmedBookings}
        icon={<CheckCircle className="h-6 w-6 text-green-500" />}
        color="green"
      />

      <StatCard
        title="Pending"
        value={pendingBookings}
        icon={<Clock className="h-6 w-6 text-yellow-500" />}
        color="yellow"
      />

      <StatCard
        title="Cancelled"
        value={cancelledBookings}
        icon={<XCircle className="h-6 w-6 text-red-500" />}
        color="red"
      />

      <StatCard
        title="Revenue"
        value={`$${totalRevenue.toLocaleString()}`}
        icon={<DollarSign className="h-6 w-6 text-emerald-500" />}
        color="emerald"
      />
    </div>
  )
}

// Individual stat card component
interface StatCardProps {
  title: string
  value: number | string
  icon: React.ReactNode
  color: "blue" | "green" | "yellow" | "red" | "emerald"
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  const bgColorClass = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    yellow: "bg-yellow-50",
    red: "bg-red-50",
    emerald: "bg-emerald-50",
  }[color]

  return (
    <div className={`p-6 rounded-lg shadow-sm border ${bgColorClass}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  )
}

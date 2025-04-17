import type React from "react"
import { CalendarCheck, CalendarClock, CheckCircle, XCircle } from "lucide-react"

interface BookingStatsProps {
  totalBookings: number
  upcomingBookings: number
  cancelledBookings: number
  completedBookings: number
}

export default function BookingStats({
  totalBookings,
  upcomingBookings,
  cancelledBookings,
  completedBookings,
}: BookingStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Bookings"
        value={totalBookings}
        icon={<CalendarClock className="h-8 w-8 text-blue-500" />}
        color="blue"
      />
      <StatCard
        title="Upcoming"
        value={upcomingBookings}
        icon={<CalendarCheck className="h-8 w-8 text-green-500" />}
        color="green"
      />
      <StatCard
        title="Completed"
        value={completedBookings}
        icon={<CheckCircle className="h-8 w-8 text-blue-500" />}
        color="blue"
      />
      <StatCard
        title="Cancelled"
        value={cancelledBookings}
        icon={<XCircle className="h-8 w-8 text-red-500" />}
        color="red"
      />
    </div>
  )
}

interface StatCardProps {
  title: string
  value: number
  icon: React.ReactNode
  color: "blue" | "green" | "red"
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    red: "bg-red-50 border-red-200",
  }

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  )
}

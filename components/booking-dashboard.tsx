import BookingList from "@/components/booking-list"
import DashboardHeader from "@/components/dashboard-header"
import DashboardStats from "@/components/dashboard-stats"
import { getBookings } from "@/lib/data"

// Main dashboard component that orchestrates the dashboard UI
export default async function BookingDashboard() {
  // Fetch bookings data from our mock API
  const bookings = await getBookings()

  // Calculate some stats for the dashboard
  const totalBookings = bookings.length
  const confirmedBookings = bookings.filter((booking) => booking.status === "confirmed").length
  const pendingBookings = bookings.filter((booking) => booking.status === "pending").length
  const cancelledBookings = bookings.filter((booking) => booking.status === "cancelled").length

  // Calculate total revenue
  const totalRevenue = bookings
    .filter((booking) => booking.status !== "cancelled")
    .reduce((sum, booking) => sum + booking.totalAmount, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />

      <DashboardStats
        totalBookings={totalBookings}
        confirmedBookings={confirmedBookings}
        pendingBookings={pendingBookings}
        cancelledBookings={cancelledBookings}
        totalRevenue={totalRevenue}
      />

      <BookingList bookings={bookings} />
    </div>
  )
}

import BookingStats from "@/components/booking-stats"
import BookingTable from "@/components/booking-table"
import DateRangeFilter from "@/components/date-range-filter"
import PageTitle from "@/components/page-title"
import { getBookings } from "@/lib/data"

export default async function Home() {
  const bookings = await getBookings()

  // Calculate stats
  const totalBookings = bookings.length
  const upcomingBookings = bookings.filter(
    (booking) => booking.status === "confirmed" || booking.status === "pending",
  ).length
  const cancelledBookings = bookings.filter((booking) => booking.status === "cancelled").length
  const completedBookings = bookings.filter((booking) => booking.status === "completed").length

  return (
    <div className="p-6">
      <PageTitle title="Vehicle Bookings Dashboard" />

      <BookingStats
        totalBookings={totalBookings}
        upcomingBookings={upcomingBookings}
        cancelledBookings={cancelledBookings}
        completedBookings={completedBookings}
      />

      <div className="mt-8">
        <DateRangeFilter />
      </div>

      <div className="mt-6">
        <BookingTable bookings={bookings} />
      </div>
    </div>
  )
}

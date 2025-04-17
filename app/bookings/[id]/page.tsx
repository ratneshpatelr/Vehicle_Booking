import BookingDetails from "@/components/booking-details"
import PageTitle from "@/components/page-title"
import { getBookingById } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function BookingPage({ params }: { params: { id: string } }) {
  const booking = await getBookingById(params.id)

  if (!booking) {
    notFound()
  }

  return (
    <div className="p-6">
      <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Dashboard
      </Link>

      <PageTitle title={`Booking #${booking.id}`} />

      <div className="mt-6">
        <BookingDetails booking={booking} />
      </div>
    </div>
  )
}

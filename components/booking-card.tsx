"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar, Clock, User, MapPin, CreditCard, MoreVertical, CheckCircle, XCircle } from "lucide-react"
import type { Booking } from "@/lib/types"

// Card component to display individual booking information
interface BookingCardProps {
  booking: Booking
}

export default function BookingCard({ booking }: BookingCardProps) {
  const [showMenu, setShowMenu] = useState(false)

  // Format dates for display
  const checkInDate = new Date(booking.checkIn)
  const checkOutDate = new Date(booking.checkOut)

  // Determine status badge color
  const statusColors = {
    confirmed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800",
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{booking.customerName}</h3>
            <p className="text-gray-500 text-sm">{booking.email}</p>
          </div>

          <div className="flex items-center">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[booking.status as keyof typeof statusColors]}`}
            >
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>

            <div className="relative ml-2">
              <button onClick={() => setShowMenu(!showMenu)} className="p-1 rounded-full hover:bg-gray-100">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                  <div className="py-1">
                    <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Confirm Booking
                    </button>
                    <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <XCircle className="h-4 w-4 mr-2 text-red-500" />
                      Cancel Booking
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
            <span>
              {format(checkInDate, "MMM d, yyyy")} - {format(checkOutDate, "MMM d, yyyy")}
            </span>
          </div>

          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 text-gray-400 mr-2" />
            <span>
              {booking.nights} {booking.nights === 1 ? "night" : "nights"}
            </span>
          </div>

          <div className="flex items-center text-sm">
            <User className="h-4 w-4 text-gray-400 mr-2" />
            <span>
              {booking.guests} {booking.guests === 1 ? "guest" : "guests"}
            </span>
          </div>

          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 text-gray-400 mr-2" />
            <span>{booking.roomType}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="text-lg font-semibold">${booking.totalAmount.toLocaleString()}</p>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <CreditCard className="h-4 w-4 mr-1" />
          <span>{booking.paymentMethod}</span>
        </div>
      </div>
    </div>
  )
}

"use client"

import type { Booking } from "@/lib/types"
import { useState } from "react"
import BookingStatusBadge from "./booking-status-badge"
import { Calendar, MapPin, User, Phone, Mail, Car, CreditCard, FileText } from "lucide-react"

interface BookingDetailsProps {
  booking: Booking
}

export default function BookingDetails({ booking }: BookingDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleCancel = () => {
    // In a real app, this would call an API to cancel the booking
    alert("This would cancel the booking in a real application")
  }

  const handleSave = () => {
    // In a real app, this would save the edited booking
    setIsEditing(false)
    alert("This would save the booking changes in a real application")
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Booking #{booking.id}</h2>
            <p className="text-gray-500">Created on {formatDate(booking.createdAt)}</p>
          </div>
          <BookingStatusBadge status={booking.status} className="mt-2 md:mt-0" />
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-500" />
              Booking Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 text-gray-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pickup Date & Time</p>
                  <p className="text-gray-800">{formatDate(booking.pickupDate)}</p>
                  <p className="text-gray-600">{formatTime(booking.pickupDate)}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 text-gray-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Drop-off Date & Time</p>
                  <p className="text-gray-800">{formatDate(booking.dropoffDate)}</p>
                  <p className="text-gray-600">{formatTime(booking.dropoffDate)}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 text-gray-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pickup Location</p>
                  <p className="text-gray-800">{booking.pickupLocation}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 text-gray-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Drop-off Location</p>
                  <p className="text-gray-800">{booking.dropoffLocation}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 text-gray-400">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Payment</p>
                  <p className="text-gray-800">${booking.totalAmount.toFixed(2)}</p>
                  <p className="text-gray-600">{booking.paymentMethod}</p>
                </div>
              </div>

              {booking.notes && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 text-gray-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Notes</p>
                    <p className="text-gray-800">{booking.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Customer & Vehicle Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-500" />
                Customer Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-gray-800">{booking.customerName}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 text-gray-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-gray-800">{booking.customerPhone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-gray-800">{booking.customerEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2 text-blue-500" />
                Vehicle Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 text-gray-400">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Vehicle Type</p>
                    <p className="text-gray-800">{booking.vehicleType}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 text-gray-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">License Plate</p>
                    <p className="text-gray-800">{booking.licensePlate || "Not assigned"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50"
            >
              Cancel Booking
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Edit Booking
            </button>
          </>
        )}
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import BookingCard from "@/components/booking-card"
import type { Booking } from "@/lib/types"

// Component to display a list of bookings with filtering
interface BookingListProps {
  bookings: Booking[]
}

export default function BookingList({ bookings }: BookingListProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Filter bookings based on selected status
  const filteredBookings =
    statusFilter === "all" ? bookings : bookings.filter((booking) => booking.status === statusFilter)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recent Bookings</h2>

        <div className="flex space-x-2">
          <StatusFilterButton status="all" current={statusFilter} onClick={() => setStatusFilter("all")}>
            All
          </StatusFilterButton>
          <StatusFilterButton status="confirmed" current={statusFilter} onClick={() => setStatusFilter("confirmed")}>
            Confirmed
          </StatusFilterButton>
          <StatusFilterButton status="pending" current={statusFilter} onClick={() => setStatusFilter("pending")}>
            Pending
          </StatusFilterButton>
          <StatusFilterButton status="cancelled" current={statusFilter} onClick={() => setStatusFilter("cancelled")}>
            Cancelled
          </StatusFilterButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No bookings found</p>
        </div>
      )}
    </div>
  )
}

// Filter button component
interface StatusFilterButtonProps {
  status: string
  current: string
  onClick: () => void
  children: React.ReactNode
}

function StatusFilterButton({ status, current, onClick, children }: StatusFilterButtonProps) {
  const isActive = status === current

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import type { Booking } from "@/lib/types"
import { ChevronDown, ChevronUp, Calendar, Car } from "lucide-react"
import BookingStatusBadge from "./booking-status-badge"

interface BookingTableProps {
  bookings: Booking[]
}

export default function BookingTable({ bookings }: BookingTableProps) {
  const [view, setView] = useState<"table" | "card">("table")
  const [sortField, setSortField] = useState<keyof Booking>("pickupDate")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const sortedBookings = [...bookings].sort((a, b) => {
    if (sortField === "pickupDate" || sortField === "dropoffDate") {
      const dateA = new Date(a[sortField]).getTime()
      const dateB = new Date(b[sortField]).getTime()
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA
    }

    if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1
    if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (field: keyof Booking) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
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

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setView("table")}
            className={`px-3 py-1 text-sm rounded-md ${view === "table" ? "bg-blue-100 text-blue-700" : "bg-gray-100"}`}
          >
            Table
          </button>
          <button
            onClick={() => setView("card")}
            className={`px-3 py-1 text-sm rounded-md ${view === "card" ? "bg-blue-100 text-blue-700" : "bg-gray-100"}`}
          >
            Cards
          </button>
        </div>
      </div>

      {view === "table" ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("id")}
                >
                  <div className="flex items-center">
                    Booking ID
                    {sortField === "id" &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      ))}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("customerName")}
                >
                  <div className="flex items-center">
                    Customer
                    {sortField === "customerName" &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      ))}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("vehicleType")}
                >
                  <div className="flex items-center">
                    Vehicle
                    {sortField === "vehicleType" &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      ))}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("pickupDate")}
                >
                  <div className="flex items-center">
                    Pickup
                    {sortField === "pickupDate" &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      ))}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("dropoffDate")}
                >
                  <div className="flex items-center">
                    Drop-off
                    {sortField === "dropoffDate" &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      ))}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center">
                    Status
                    {sortField === "status" &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      ))}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vehicleType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{formatDate(booking.pickupDate)}</div>
                    <div className="text-xs text-gray-400">{formatTime(booking.pickupDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{formatDate(booking.dropoffDate)}</div>
                    <div className="text-xs text-gray-400">{formatTime(booking.dropoffDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BookingStatusBadge status={booking.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/bookings/${booking.id}`} className="text-blue-600 hover:text-blue-900">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedBookings.map((booking) => (
            <Link href={`/bookings/${booking.id}`} key={booking.id}>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Booking #{booking.id}</h3>
                    <p className="text-gray-500 text-sm">{booking.customerName}</p>
                  </div>
                  <BookingStatusBadge status={booking.status} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Car className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{booking.vehicleType}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <div>Pickup: {formatDate(booking.pickupDate)}</div>
                      <div className="text-xs text-gray-400">{formatTime(booking.pickupDate)}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <div>Drop-off: {formatDate(booking.dropoffDate)}</div>
                      <div className="text-xs text-gray-400">{formatTime(booking.dropoffDate)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

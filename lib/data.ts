import type { Booking } from "./types"
import bookingsData from "@/data/bookings.json"

/**
 * Get all bookings
 */
export async function getBookings(): Promise<Booking[]> {
  // In a real app, this would be an API call
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return bookingsData
}

/**
 * Get a booking by ID
 */
export async function getBookingById(id: string): Promise<Booking | null> {
  // In a real app, this would be an API call
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const booking = bookingsData.find((booking) => booking.id === id)
  return booking || null
}

/**
 * Update a booking
 */
export async function updateBooking(booking: Booking): Promise<Booking> {
  // In a real app, this would be an API call
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return booking
}

/**
 * Cancel a booking
 */
export async function cancelBooking(id: string): Promise<boolean> {
  // In a real app, this would be an API call
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return true
}

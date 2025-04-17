export interface Booking {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  vehicleType: string
  licensePlate?: string
  pickupDate: string
  dropoffDate: string
  pickupLocation: string
  dropoffLocation: string
  status: string
  totalAmount: number
  paymentMethod: string
  createdAt: string
  notes?: string
}

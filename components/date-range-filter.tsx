"use client"

import { useState } from "react"
import { Calendar, ChevronDown } from "lucide-react"

export default function DateRangeFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleApply = () => {
    // In a real app, this would filter the bookings based on the date range
    alert(`Filtering bookings from ${startDate} to ${endDate}`)
    setIsOpen(false)
  }

  const handleClear = () => {
    setStartDate("")
    setEndDate("")
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
      >
        <Calendar className="h-4 w-4 mr-2" />
        {startDate && endDate ? (
          <span>
            {startDate} - {endDate}
          </span>
        ) : (
          <span>Filter by date range</span>
        )}
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 p-4 bg-white rounded-md shadow-lg border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4 space-x-2">
            <button onClick={handleClear} className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">
              Clear
            </button>
            <button
              onClick={handleApply}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

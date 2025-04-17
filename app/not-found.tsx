import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 text-center">
        The booking you are looking for doesn't exist or has been removed.
      </p>
      <Link href="/" className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Return to Dashboard
      </Link>
    </div>
  )
}

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ResumePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}

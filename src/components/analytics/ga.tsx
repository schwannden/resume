"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

/**
 * Sends GA4 page_view events on client-side route changes.
 * Requires NEXT_PUBLIC_GA_ID to be defined.
 */
export function GoogleAnalyticsRouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_ID
    if (!measurementId || !pathname) return

    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag?.("config", measurementId, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

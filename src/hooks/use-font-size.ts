"use client"

import { useState, useEffect } from "react"

export type FontSize = "normal" | "large" | "extra-large"

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>("normal")

  useEffect(() => {
    // CRITICAL: Check localStorage only on client side to avoid hydration mismatch
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fontSize")
      if (
        saved &&
        (saved === "normal" || saved === "large" || saved === "extra-large")
      ) {
        setFontSize(saved as FontSize)
        // Apply the saved font size class to document element
        document.documentElement.classList.remove(
          "font-size-normal",
          "font-size-large",
          "font-size-extra-large"
        )
        document.documentElement.classList.add(`font-size-${saved}`)
      } else {
        // Set default font size class
        document.documentElement.classList.add("font-size-normal")
      }
    }
  }, [])

  const updateFontSize = (size: FontSize) => {
    setFontSize(size)

    if (typeof window !== "undefined") {
      // Persist to localStorage
      localStorage.setItem("fontSize", size)

      // Apply class to document element
      document.documentElement.classList.remove(
        "font-size-normal",
        "font-size-large",
        "font-size-extra-large"
      )
      document.documentElement.classList.add(`font-size-${size}`)
    }
  }

  return { fontSize, setFontSize: updateFontSize }
}

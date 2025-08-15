"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Settings, Sun, Moon, Monitor, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFontSize } from "@/hooks/use-font-size"
import { fontSizeConfigs } from "@/lib/font-size-utils"

export function AccessibilityConfig() {
  const [open, setOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const { fontSize, setFontSize } = useFontSize()
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: Sun,
    },
    {
      value: "dark",
      label: "Dark",
      icon: Moon,
    },
    {
      value: "system",
      label: "System",
      icon: Monitor,
    },
  ]

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open accessibility settings"
        className="text-foreground/60 hover:text-foreground transition-colors"
        onClick={() => setOpen(!open)}
      >
        <Settings className="h-4 w-4" />
      </Button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] border border-border rounded-lg shadow-lg z-[100] p-4">
          {/* Theme Settings */}
          <div className="space-y-2 mb-4">
            <h3 className="text-sm font-medium text-popover-foreground mb-2">
              Theme
            </h3>
            <div className="space-y-1">
              {themeOptions.map((option) => {
                const Icon = option.icon
                const isSelected = theme === option.value
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 w-full p-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{option.label}</span>
                    {isSelected && <Check className="h-4 w-4 shrink-0" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border my-3" />

          {/* Font Size Settings */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-popover-foreground mb-2">
              Font Size
            </h3>
            <div className="space-y-1">
              {fontSizeConfigs.map((config) => {
                const Icon = config.icon
                const isSelected = fontSize === config.name
                return (
                  <button
                    key={config.name}
                    onClick={() => {
                      setFontSize(config.name)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 w-full p-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{config.label}</span>
                    {isSelected && <Check className="h-4 w-4 shrink-0" />}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

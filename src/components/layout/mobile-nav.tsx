"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navigationLinks = [
  {
    href: "/",
    label: "Resume",
    description: "Professional experience and skills",
  },
  {
    href: "/speaking",
    label: "Speaking & Publications",
    description: "Talks, publications, and thought leadership",
  },
  {
    href: "/contributions",
    label: "Contributions",
    description: "Open source projects and community work",
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          {navigationLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="flex flex-col gap-1 p-3 rounded-lg border hover:bg-gray-50 transition-colors text-left"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium text-gray-900">{link.label}</span>
                <span className="text-sm text-gray-600">
                  {link.description}
                </span>
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm text-gray-600">Schwannden Kuo</p>
            <p className="text-xs text-gray-500">
              Software and System Architect
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="mailto:schwannden@gmail.com"
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/schwannden/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/schwannden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

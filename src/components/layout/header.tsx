"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"
import { Github } from "lucide-react"

const navigationLinks = [
  {
    href: "/",
    label: "Resume",
  },
  {
    href: "/speaking",
    label: "Speaking",
  },
  {
    href: "/contributions",
    label: "Community",
  },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Schwannden Kuo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/schwannden/resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href="https://github.com/schwannden/resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

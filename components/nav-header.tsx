"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavHeader() {
  const pathname = usePathname()

  return (
    <header className="max-w-4xl mx-auto px-4 pt-16">
      <h1 className="text-3xl mb-8">Megan McCarthy</h1>
      <nav>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <Link 
              href="/" 
              className={`hover:text-black transition-colors ${pathname === "/" ? "text-black" : ""}`}
            >
              Art
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`hover:text-black transition-colors ${pathname === "/contact" ? "text-black" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

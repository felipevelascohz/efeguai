"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  items: string[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Botón de hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 focus:outline-none"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-rosa-300 z-50 shadow-lg rounded-b-lg overflow-hidden">
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block py-3 px-4 text-white font-bold hover:bg-rosa-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

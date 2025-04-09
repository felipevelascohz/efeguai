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

      {/* Menú desplegable - Posicionado fijo en la parte superior derecha */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 w-64 bg-rosa-300 h-auto">
            <div className="p-4 flex justify-between items-center border-b border-white border-opacity-20">
              <span className="text-white font-bold">Menú</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>
            <div className="py-2">
              {items.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block py-4 px-6 text-white font-bold hover:bg-rosa-400 transition-colors border-b border-white border-opacity-10"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

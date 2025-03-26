"use client"

import { useState } from "react"
import Link from "next/link"

interface ListItem {
  id: string
  title: string
  duration: string
  active?: boolean
  progress?: number // Añadido para controlar el progreso de cada elemento
}

interface ItemListProps {
  items: ListItem[]
}

export function ItemList({ items }: ItemListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={item.id}>
          <Link
            href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            className={`
              w-full flex flex-col py-3 px-4
              ${item.active ? "bg-rosa-200" : "hover:bg-rosa-100"}
              transition-colors
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-rosa-400 mr-2">{item.id}.</span>
                <span className="text-gray-800">{item.title}</span>
              </div>
              <span className="text-rosa-400 text-sm">{item.duration}</span>
            </div>

            {/* Audio visualization line */}
            <div className="h-2 w-full mt-2">
              <div className="w-full h-1 bg-rosa-100 rounded-full overflow-hidden">
                <div
                  className={`
                    h-full bg-rosa-400 
                    ${hoveredIndex === index || item.active ? "audio-line-active" : ""}
                  `}
                  style={{
                    width: `${item.progress || 0}%`,
                  }}
                ></div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}


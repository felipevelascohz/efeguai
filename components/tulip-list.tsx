"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

interface ListItem {
  id: string
  title: string
  duration: string
  active?: boolean
  progress?: number
  url: string
  external?: boolean
}

interface ItemListProps {
  items: ListItem[]
}

export function ItemList({ items }: ItemListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      {items.map((item, index) => {
        // Componente Link o a dependiendo de si es externo o no
        const LinkComponent = ({ children }: { children: React.ReactNode }) =>
          item.external ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-full flex flex-col py-3 px-4
                ${item.active ? "bg-rosa-200" : "hover:bg-rosa-100"}
                transition-colors
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {children}
            </a>
          ) : (
            <Link
              href={item.url}
              className={`
                w-full flex flex-col py-3 px-4
                ${item.active ? "bg-rosa-200" : "hover:bg-rosa-100"}
                transition-colors
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {children}
            </Link>
          )

        return (
          <div key={item.id}>
            <LinkComponent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-rosa-400 mr-2">{item.id}.</span>
                  <span className="text-gray-800">{item.title}</span>
                  {item.external && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 text-rosa-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
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
            </LinkComponent>
          </div>
        )
      })}
    </div>
  )
}


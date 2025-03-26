"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center justify-center space-x-4 mb-2">
        <button className="p-2 text-rosa-400 hover:text-rosa-600 transition-colors" aria-label="Previous track">
          <SkipBack size={20} />
        </button>

        <button
          className="p-3 bg-rosa-300 rounded-full text-white hover:bg-rosa-400 transition-colors"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button className="p-2 text-rosa-400 hover:text-rosa-600 transition-colors" aria-label="Next track">
          <SkipForward size={20} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs bg-rosa-100 h-1 rounded-full overflow-hidden">
        <div className="bg-rosa-400 h-full w-1/3"></div>
      </div>
    </div>
  )
}


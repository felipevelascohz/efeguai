import Image from "next/image"
import Link from "next/link"
import { AudioPlayer } from "@/components/audio-player"
import { ItemList } from "@/components/tulip-list"

export default function Home() {
  // List items with their timestamps and progress
  const listItems = [
    { id: "01", title: "Catalogo Ko-fi", duration: "2:13", progress: 85 },
    { id: "02", title: "Subscripciones Ko-fi", duration: "1:57", active: true, progress: 45 },
    { id: "03", title: "Comisiones", duration: "11:47", progress: 20 },
    { id: "04", title: "Instagram", duration: "2:04", progress: 65 },
    { id: "05", title: "Twitch", duration: "7:39", progress: 10 },
    { id: "06", title: "Twitter", duration: "3:45", progress: 30 },
    { id: "07", title: "Discord", duration: "4:11", progress: 75 },
    { id: "08", title: "TikTok", duration: "2:31", progress: 50 },
    { id: "09", title: "Materiales", duration: "5:32", progress: 15 },
  ]

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      {/* Header without decorative border */}
      <header className="w-full bg-rosa-300 px-4 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/efeguai-logo.png" alt="efeguai logo" width={150} height={40} className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex space-x-6">
            {["ABOUT", "SUBSCRIPCIONES", "CATALOGO"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white font-bold hover:text-rosa-100 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <div className="w-full max-w-2xl mx-auto mt-16 px-4 flex flex-col items-center">
        {/* Featured image */}
        <div className="relative w-full max-w-md mb-8 overflow-hidden">
          <Image
            src="/efeguai-main.png"
            alt="efeguai character with pink hair and crown"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>

        {/* Audio player */}
        <AudioPlayer />

        {/* Item list */}
        <div className="w-full mt-8 border border-rosa-200 rounded-md overflow-hidden">
          <ItemList items={listItems} />
        </div>
      </div>
    </main>
  )
}


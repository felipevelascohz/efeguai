import Image from "next/image"
import Link from "next/link"
import { AudioPlayer } from "@/components/audio-player"
import { ItemList } from "@/components/tulip-list"

export default function Home() {
  // Lista reducida con solo 4 elementos y URLs externas para redes sociales
  const listItems = [
    { id: "01", title: "Subscripciones Ko-fi", duration: "2:13", progress: 85, url: "/subscripciones" },
    { id: "02", title: "Shop Ko-fi", duration: "1:57", active: true, progress: 45, url: "/shop" },
    { id: "03", title: "Instagram", duration: "2:04", progress: 65, url: "https://instagram.com/efeguai", external: true },
    { id: "04", title: "TikTok", duration: "2:31", progress: 50, url: "https://tiktok.com/@efeguai", external: true },
    { id: "05", title: "efeguaidesign@gmail.com", duration: "3:52", progress: 25 }
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
            {["ABOUT", "SUBSCRIPCIONES", "SHOP"].map((item) => (
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
      
      <div className="w-full bg-rosa-300">
        <div className="scalloped-border"></div>
      </div>

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


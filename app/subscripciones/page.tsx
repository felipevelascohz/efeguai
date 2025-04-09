import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function SubscripcionesPage() {
  return (
    <main className="min-h-screen bg-white">
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
          <MobileMenu items={menuItems} />
        </div>
      </header>

      {/* Borde festoneado */}
      <div className="w-full bg-rosa-300">
        <div className="scalloped-border"></div>
      </div>


      {/* Ko-fi Membership iframe */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-rosa-600">Subscripciones Ko-fi</h1>

        <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://ko-fi.com/efeguai/tiers"
            title="Ko-fi Memberships"
            className="w-full h-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Si las subscripciones no se cargan correctamente, puedes visitarlas directamente en Ko-fi.
          </p>
          <Link
            href="https://ko-fi.com/efeguai/tiers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rosa-400 hover:bg-rosa-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Ver subscripciones en Ko-fi
          </Link>
        </div>
      </div>
    </main>
  )
}


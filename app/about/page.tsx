import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
        </div>
      </header>

      {/* Borde festoneado */}
      <div className="w-full bg-rosa-300">
        <div className="scalloped-border"></div>
      </div>

      {/* About content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square relative rounded-full overflow-hidden bg-rosa-100">
              <Image
                src="/efeguai-about.png"
                alt="efeguai character"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4 text-rosa-600">¡Hola! Soy efeguai 💕</h1>
            <p className="text-gray-700 mb-4">
            🌸 Soy una artista digital especializada en ilustraciones kawaii y diseños adorables.
            🌸 También me encanta crear recursos para imprimir o usar en tus apps y dispositivos favoritos.
            🌸 Comparto mis creaciones contigo a través de mi tienda online y mis redes sociales.
            🌸 En mi tienda encontrarás papelería digital creativa y productos listos para imprimir o usar digitalmente.

            ¡Espero que te encanten! ✨

            </p>
            {/* <p className="text-gray-700 mb-4">
              Desde pequeña siempre me ha encantado dibujar personajes tiernos y crear mundos imaginarios llenos de
              magia. Ahora comparto mis creaciones contigo a través de mi tienda online y mis redes sociales.
            </p> */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com/efeguai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rosa-200 hover:bg-rosa-300 text-white p-2 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://x.com/efeguai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rosa-200 hover:bg-rosa-300 text-white p-2 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://ko-fi.com/efeguai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rosa-200 hover:bg-rosa-300 text-white p-2 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" x2="6" y1="1" y2="4" />
                  <line x1="10" x2="10" y1="1" y2="4" />
                  <line x1="14" x2="14" y1="1" y2="4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          <section>
            {/* <h2 className="text-2xl font-bold mb-4 text-rosa-500">Mi Proceso Creativo</h2>
            <p className="text-gray-700 mb-4">
              Todo comienza con una idea o un sentimiento que quiero expresar. Luego hago bocetos a mano o digitales,
              refinando la idea hasta que estoy satisfecha con el resultado. Finalmente, añado color y detalles para dar
              vida a mis creaciones.
            </p> */}
            {/* <p className="text-gray-700">
            🌸 Papelería digital creativa ♡ Tiendita con productos para imprimir o para su uso digital en las apps o dispositivos que desees. 🌸
            📩 efeguaidesign@gmail.com
            </p> */}
          </section>

          {/* <section>
            <h2 className="text-2xl font-bold mb-4 text-rosa-500">Mis Servicios</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ilustraciones digitales personalizadas</li>
              <li>Diseño de personajes</li>
              <li>Stickers y productos impresos</li>
              <li>Comisiones para regalos especiales</li>
              <li>Contenido exclusivo para subscriptores</li>
            </ul>
          </section> */}

          <section>
            <h2 className="text-2xl font-bold mb-4 text-rosa-500">¡Gracias por tu Apoyo!</h2>
            <p className="text-gray-700">
            Cada compra, suscripción o simple mensaje de aliento significa muchísimo para mí. Gracias a ti, puedo seguir creando y compartiendo lo que hago. ¡Tu motivación es invaluable!

            Si necesitas contactarme, no dudes en hacerlo.

            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


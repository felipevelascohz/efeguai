import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { Check } from "lucide-react"

export default function SubscripcionesPage() {
  // Elementos del menú de navegación
  const menuItems = ["ABOUT", "MEMBRESIAS", "SHOP"]

  // Datos de los planes de suscripción con enlaces Ko-fi
  const subscriptionPlans = [
    {
      name: "MiniPrint Pass",
      price: "$2",
      description: "Accede a una selección de algunos de mis recursos gratis ✨ 📝 📘",
      features: [
        "Uso en digital o impresión",
        "Wallpapers Estándar",
        "Acceso a una selección de mis recursos gratuitos",
        "Nuevos recursos añadidos ocasionalmente",
        "Blog Post",
      ],
      color: "bg-green-50",
      iconColor: "text-green-500",
      joinLink: "https://ko-fi.com/summary/0a7fa1a2-6daa-4081-b445-b56167c33f61",
      imageSrc: "/miniprint.png", // Imagen para MiniPrint Pass
    },
    {
      name: "PrintPass",
      price: "$5",
      description: "Tu acceso ilimitado a todos los recursos gratis actuales y futuros ✨ 📝 📘",
      features: [
        "Uso en digital o impresión",
        "Wallpapers Estándar",
        "Acceso a todos los recursos gratuitos",
        "Compatible con apps de anotaciones digitales en Android, iOS y PC",
        "Nuevos recursos añadidos regularmente",
        "Blog Post exclusivos 📝 ✨",
      ],
      color: "bg-pink-50",
      iconColor: "text-pink-500",
      joinLink: "https://ko-fi.com/summary/ae0adb40-2c4c-45ba-ab68-8168c42e6059",
      imageSrc: "/printpass.png", // Imagen para PrintPass
    },
    {
      name: "Premium Print",
      price: "$15",
      description: "Accede mensualmente a recursos exclusivos disponibles solo en esta membresía 💝 ✨",
      features: [
        "Uso en digital o impresión",
        "Wallpapers Estándar",
        "Wallpapers PREMIUM",
        "Acceso a todos los recursos gratuitos",
        "Acceso a recursos exclusivos ✨ Premium Print 💝 ✨",
        "Compatible con apps de anotaciones digitales en Android, iOS y PC",
        "Archivos formato Goodnotes 📘",
        "Nuevos recursos añadidos constantemente",
        "Blog Post exclusivos 📝 ✨",
      ],
      color: "bg-purple-50",
      iconColor: "text-purple-500",
      joinLink: "https://ko-fi.com/summary/10ed53c0-3210-492c-b16e-9a7ead5becc4",
      imageSrc: "/premiumprint.png", // Imagen para Premium Print
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header con borde festoneado */}
      <header className="w-full bg-rosa-300 px-4 py-6 relative z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/efeguai-logo.png" alt="efeguai logo" width={150} height={40} className="h-10 w-auto" />
          </Link>

          {/* Menú de escritorio */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white font-bold hover:text-rosa-100 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Menú móvil */}
          <MobileMenu items={menuItems} />
        </div>
      </header>

      {/* Borde festoneado */}
      <div className="w-full bg-rosa-300">
        <div className="scalloped-border"></div>
      </div>

      {/* Contenido de suscripciones */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-rosa-600">Planes de Suscripción</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {subscriptionPlans.map((plan, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg flex flex-col">
              {/* Cabecera del plan con imagen */}
              <div className={`${plan.color} relative`}>
                <div className="aspect-[16/9] relative">
                  {/* Aquí usamos la imagen proporcionada */}
                  <Image
                    src={plan.imageSrc || "/placeholder.svg"}
                    alt={`${plan.name} illustration`}
                    width={400}
                    height={225}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Contenido del plan */}
              <div className="bg-white p-6 flex-grow flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg text-gray-800 flex items-center justify-center">
                    {plan.name}
                    {index === 1 && <span className="ml-2">💝 ✨</span>}
                    {index === 2 && <span className="ml-2">✨ 💝 ✨</span>}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">per month</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center mb-6">{plan.description}</p>

                {/* Botón Join con enlace a Ko-fi */}
                <a
                  href={plan.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rosa-300 hover:bg-rosa-400 text-white font-bold py-2 px-4 rounded-full w-32 mx-auto mb-6 transition-colors text-center"
                >
                  Join
                </a>

                <div className="space-y-3 mt-auto">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Tienes preguntas sobre los planes de suscripción? No dudes en contactarme.
          </p>
          <Link
            href="mailto:efeguaidesign@gmail.com"
            className="inline-block bg-rosa-400 hover:bg-rosa-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  )
}

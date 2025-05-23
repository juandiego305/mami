"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Fotos reales de la familia - cada una con su historia especial
const familyImages = [
  {
    src: "/images/family-celebration.jpeg",
    alt: "Celebración familiar",
    caption: "Celebrando juntos en familia - momentos que siempre recordaremos",
  },
  {
    src: "/images/couple-event.jpeg",
    alt: "Mamá y papá en evento",
    caption: "Mamá y papá disfrutando de una salida especial",
  },
  {
    src: "/images/park-celebration.jpeg",
    alt: "Celebración en el parque",
    caption: "Una noche mágica celebrando en el parque",
  },
  {
    src: "/images/umbrella-family.jpeg",
    alt: "Familia bajo las sombrillas",
    caption: "Un paseo familiar lleno de colores y alegría",
  },
  {
    src: "/images/mountain-family.jpeg",
    alt: "Familia en las montañas",
    caption: "Aventuras familiares con las montañas de fondo",
  },
  {
    src: "/images/home-family.jpeg",
    alt: "Reunión familiar en casa",
    caption: "Momentos especiales en la comodidad de nuestro hogar",
  },
  {
    src: "/images/campfire-mom.jpeg",
    alt: "Mamá junto al fuego",
    caption: "Mamá disfrutando de la naturaleza - siempre aventurera",
  },
  {
    src: "/images/birthday-couple.jpeg",
    alt: "Celebración de cumpleaños",
    caption: "Celebrando otro año de vida y amor",
  },
  {
    src: "/images/friends-group.jpeg",
    alt: "Con amigos queridos",
    caption: "Rodeados de las personas que amamos",
  },
  {
    src: "/images/restaurant-family.jpeg",
    alt: "Cena familiar",
    caption: "Compartiendo una deliciosa cena en familia",
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? familyImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === familyImages.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm" id="galeria">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-600 mb-12">Nuestros Recuerdos</h2>

        <div className="relative max-w-3xl mx-auto">
          <Card className="border-rose-200 shadow-lg overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="relative h-[50vh] w-full">
                <Image
                  src={familyImages[currentIndex].src || "/placeholder.svg"}
                  alt={familyImages[currentIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-xl font-medium">{familyImages[currentIndex].caption}</p>
              </div>
            </CardContent>
          </Card>

          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 p-2 rounded-full shadow-md"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-600 p-2 rounded-full shadow-md"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {familyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-rose-600" : "bg-rose-300"}`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

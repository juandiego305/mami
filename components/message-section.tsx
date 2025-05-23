"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Gift, Sparkles } from "lucide-react"

// Mensajes de ejemplo - personalízalos con tus propias palabras
const messages = [
  {
    title: "Gracias por tu amor incondicional",
    content:
      "Mamá, gracias por estar siempre a mi lado, por tu apoyo constante y por todo el amor que me has dado. Eres mi ejemplo a seguir y mi mayor inspiración.",
    icon: <Heart className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Eres mi guía y mi luz",
    content:
      "Siempre has sido mi guía en los momentos difíciles, iluminando mi camino con tu sabiduría y consejos. Gracias por enseñarme a ser fuerte y valiente.",
    icon: <Star className="h-6 w-6 text-amber-500" />,
  },
  {
    title: "El regalo más grande",
    content:
      "El regalo más grande que he recibido en la vida es tenerte como madre. Tu paciencia, dedicación y cariño han hecho de mí la persona que soy hoy.",
    icon: <Gift className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Momentos mágicos",
    content:
      "Cada momento a tu lado es especial. Gracias por todos esos instantes de risas, abrazos y conversaciones que guardaré por siempre en mi corazón.",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
  },
]

export default function MessageSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 bg-rose-50" id="mensajes">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-600 mb-12">De Mi Corazón Para Ti</h2>

        <div className="max-w-3xl mx-auto">
          <Card className="border-rose-200 shadow-lg bg-white">
            <CardContent className="p-6 md:p-8">
              <div className="flex justify-center mb-4">{messages[activeIndex].icon}</div>
              <h3 className="text-2xl font-semibold text-center text-rose-700 mb-4">{messages[activeIndex].title}</h3>
              <p className="text-lg text-center text-gray-700 mb-6">{messages[activeIndex].content}</p>

              <div className="flex justify-center gap-2 mt-8">
                {messages.map((_, index) => (
                  <Button
                    key={index}
                    variant={index === activeIndex ? "default" : "outline"}
                    className={
                      index === activeIndex ? "bg-rose-500 hover:bg-rose-600" : "border-rose-300 text-rose-500"
                    }
                    onClick={() => setActiveIndex(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

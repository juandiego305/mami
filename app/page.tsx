"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star, Camera, Book, Music, Palette, Coffee, Sparkles, Moon, Sun, Play, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [currentSection, setCurrentSection] = useState("inicio")
  const [isLoaded, setIsLoaded] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    setIsLoaded(true)
    // Crear partículas flotantes
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  const sections = [
    { id: "inicio", name: "Inicio", icon: Heart, color: "from-pink-500 to-rose-500" },
    { id: "galeria", name: "Galería", icon: Camera, color: "from-purple-500 to-indigo-500" },
    { id: "cartas", name: "Cartas", icon: Book, color: "from-blue-500 to-cyan-500" },
    { id: "musica", name: "Playlist", icon: Music, color: "from-green-500 to-emerald-500" },
    { id: "arte", name: "Arte Digital", icon: Palette, color: "from-orange-500 to-red-500" },
    { id: "momentos", name: "Momentos", icon: Coffee, color: "from-amber-500 to-yellow-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Partículas flotantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Navegación lateral */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 space-y-4"
      >
        {sections.map((section) => {
          const IconComponent = section.icon
          return (
            <motion.button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`group relative p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${
                currentSection === section.id
                  ? `bg-gradient-to-r ${section.color} shadow-lg scale-110`
                  : "bg-white/10 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="h-6 w-6" />
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.name}
              </div>
            </motion.button>
          )
        })}
      </motion.nav>

      {/* Contenido principal */}
      <AnimatePresence mode="wait">
        {currentSection === "inicio" && <InicioSection key="inicio" />}
        {currentSection === "galeria" && <GaleriaSection key="galeria" />}
        {currentSection === "cartas" && <CartasSection key="cartas" />}
        {currentSection === "musica" && <MusicaSection key="musica" />}
        {currentSection === "arte" && <ArteSection key="arte" />}
        {currentSection === "momentos" && <MomentosSection key="momentos" />}
      </AnimatePresence>
    </div>
  )
}

function InicioSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <Heart className="h-24 w-24 text-pink-400 mx-auto fill-pink-400" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6"
          style={{ fontFamily: "serif" }}
        >
          Milena
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl text-pink-200 font-light">Un universo digital creado para ti</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora cada sección de este espacio mágico diseñado especialmente para celebrar a la mujer más
            extraordinaria que conozco
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: Camera, text: "Recuerdos", color: "text-purple-400" },
            { icon: Book, text: "Cartas", color: "text-blue-400" },
            { icon: Music, text: "Música", color: "text-green-400" },
            { icon: Palette, text: "Arte", color: "text-orange-400" },
            { icon: Coffee, text: "Momentos", color: "text-yellow-400" },
            { icon: Sparkles, text: "Magia", color: "text-pink-400" },
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <IconComponent className={`h-8 w-8 ${item.color} mx-auto mb-2`} />
                <p className="text-sm text-gray-300">{item.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

function GaleriaSection() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    {
      src: "/images/mountain-family.jpeg",
      title: "Aventuras en familia",
      description: "Explorando nuevos lugares juntos",
    },
    { src: "/images/campfire-mom.jpeg", title: "Espíritu aventurero", description: "Tu amor por la naturaleza" },
    { src: "/images/umbrella-family.jpeg", title: "Momentos coloridos", description: "Llenando la vida de alegría" },
    { src: "/images/couple-event.jpeg", title: "Noches especiales", description: "Disfrutando cada momento" },
    { src: "/images/birthday-couple.jpeg", title: "Celebraciones", description: "Cada día es especial contigo" },
    {
      src: "/images/restaurant-family.jpeg",
      title: "Reuniones familiares",
      description: "El corazón de nuestra familia",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen p-8 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Galería de Recuerdos
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen principal */}
          <motion.div
            key={selectedImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-200">{images[selectedImage].description}</p>
            </div>
          </motion.div>

          {/* Miniaturas */}
          <div className="space-y-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                  selectedImage === index
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{image.title}</h4>
                  <p className="text-sm text-gray-400">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function CartasSection() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  const cartas = [
    {
      titulo: "Para mi heroína",
      contenido:
        "Mamá, eres la mujer más fuerte que conozco. Tu determinación y valentía me inspiran cada día. Gracias por enseñarme que no hay obstáculo que no se pueda superar con amor y perseverancia.",
      color: "from-rose-500 to-pink-500",
    },
    {
      titulo: "Mi ejemplo a seguir",
      contenido:
        "Tu forma de enfrentar la vida con una sonrisa, tu generosidad infinita y tu corazón bondadoso son cualidades que admiro profundamente. Espero algún día ser la mitad de extraordinaria que eres tú.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      titulo: "Gracias por todo",
      contenido:
        "Por cada abrazo que curó mis heridas, por cada consejo que iluminó mi camino, por cada sacrificio silencioso que hiciste por mí. Tu amor incondicional es el regalo más grande que he recibido.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      titulo: "Mi deseo para ti",
      contenido:
        "Deseo que cada día de tu vida esté lleno de la misma alegría que tú has traído a la mía. Que tus sueños se hagan realidad y que nunca te falten razones para sonreír como solo tú sabes hacerlo.",
      color: "from-emerald-500 to-green-500",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="min-h-screen p-8 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Cartas del Corazón
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartas.map((carta, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                className={`bg-gradient-to-br ${carta.color} p-1 rounded-2xl shadow-xl cursor-pointer`}
                whileHover={{ scale: 1.02, rotate: openCard === index ? 0 : 2 }}
                onClick={() => setOpenCard(openCard === index ? null : index)}
              >
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl h-64 flex flex-col justify-between">
                  <div>
                    <Book className="h-8 w-8 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">{carta.titulo}</h3>
                  </div>

                  <AnimatePresence>
                    {openCard === index ? (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/90 text-sm leading-relaxed"
                      >
                        {carta.contenido}
                      </motion.p>
                    ) : (
                      <motion.p initial={{ opacity: 1 }} className="text-white/70 text-sm">
                        Toca para leer la carta completa...
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function MusicaSection() {
  const [currentSong, setCurrentSong] = useState(0)

  const playlist = [
    {
      titulo: "Red Red Wine",
      artista: "UB40",
      dedicatoria: "Para los momentos especiales que compartimos",
      youtubeId: "zXt56MB-3vc", // ID del video de YouTube
    },
    {
      titulo: "Tú Sin Mí",
      artista: "Dread Mar I",
      dedicatoria: "Porque no imagino mi vida sin ti",
      youtubeId: "a5fHoAx12DY", // ID del video de YouTube
    },
    {
      titulo: "can't falling in love",
      artista: "UB40",
      dedicatoria: "Por tu espíritu libre y aventurero",
      youtubeId: "Ajp0Uaw4rqo", // ID del video de YouTube (versión con letra)
    },
    {
      titulo: "Love of My Life",
      artista: "Freddie Mercury",
      dedicatoria: "Porque eres el amor de mi vida",
      youtubeId: "sUJkCXE4sAA", // ID del video de YouTube
    },
    {
      titulo: "Tabaco y Chanel",
      artista: "Bacilos",
      dedicatoria: "Por tu elegancia y fortaleza",
      youtubeId: "6JqnbsQpljU", // ID del video de YouTube
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="min-h-screen p-8 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Playlist Especial
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reproductor de YouTube */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <div className="aspect-video rounded-2xl overflow-hidden mb-4">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${playlist[currentSong].youtubeId}?autoplay=0&controls=1`}
                title={playlist[currentSong].titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{playlist[currentSong].titulo}</h3>
              <p className="text-gray-300 mb-2">{playlist[currentSong].artista}</p>
              <p className="text-green-300 italic text-sm">"{playlist[currentSong].dedicatoria}"</p>
            </div>
          </div>

          {/* Lista de canciones */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-white mb-4">Selecciona una canción:</h4>
            {playlist.map((song, index) => (
              <motion.div
                key={index}
                onClick={() => setCurrentSong(index)}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                  currentSong === index
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50"
                    : "bg-white/5 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{song.titulo}</p>
                  <p className="text-sm text-gray-400">{song.artista}</p>
                  <p className="text-xs text-green-300 mt-1">"{song.dedicatoria}"</p>
                </div>
                {currentSong === index && (
                  <div className="text-green-400">
                    <Music className="h-5 w-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-400/30 text-center">
          <p className="text-green-200 text-sm">🎵 Creo que escogi canciones que te gustan  - ¡Disfruta la música!</p>
        </div>
      </div>
    </motion.section>
  )
}

function ArteSection() {
  const [showLetter, setShowLetter] = useState(false)
  const [letterPage, setLetterPage] = useState(0)

  const letterPages = [
    "Querida mamá, hay tantas cosas que quisiera decirte, tantos sentimientos que a veces las palabras no son suficientes para expresar lo que significas para mí.",
    "Desde que tengo memoria, has sido mi roca, mi guía, mi confidente y mi mayor apoyo. Cuando pienso en todas las veces que has estado ahí para mí, me lleno de gratitud.",
    "Gracias por enseñarme a ser fuerte, por mostrarme que con amor y perseverancia todo es posible. Por tus sacrificios silenciosos que no pasaron desapercibidos.",
    "Admiro tu fortaleza, tu bondad, tu capacidad para hacer que todo sea mejor con solo una sonrisa. Eres la persona más extraordinaria que conozco.",
    "Te prometo que siempre estaré para ti, así como tú lo has estado para mí. Te amo más de lo que las palabras pueden expresar. Gracias por ser mi mamá.",
  ]

  return (
    <motion.section
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      className="min-h-screen p-8 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
        >
          Arte Digital para Ti
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carta especial */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!showLetter ? (
                <motion.div
                  key="letter-closed"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  className="bg-gradient-to-br from-pink-500 to-orange-500 p-1 rounded-2xl shadow-xl cursor-pointer h-full"
                  onClick={() => setShowLetter(true)}
                >
                  <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col items-center justify-center min-h-[400px]">
                    <Mail className="h-16 w-16 text-white mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">Una Carta Especial Para Ti</h3>
                    <p className="text-white/70 text-center">Toca para abrir esta carta de mi corazón...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="letter-open"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  className="bg-gradient-to-br from-pink-500 to-orange-500 p-1 rounded-2xl shadow-xl h-full"
                >
                  <div className="bg-[url('/images/paper-texture.jpg')] bg-cover p-8 rounded-2xl h-full flex flex-col justify-between min-h-[400px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-50/90"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-orange-800" style={{ fontFamily: "cursive" }}>
                          Mi Querida Mamá
                        </h3>
                        <button onClick={() => setShowLetter(false)} className="text-orange-800 hover:text-orange-600">
                          Cerrar
                        </button>
                      </div>

                      <motion.div
                        key={`page-${letterPage}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-[200px] flex items-center"
                      >
                        <p className="text-orange-900 leading-relaxed text-lg" style={{ fontFamily: "cursive" }}>
                          {letterPages[letterPage]}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex justify-between mt-6 relative z-10">
                      <button
                        onClick={() => setLetterPage(Math.max(0, letterPage - 1))}
                        disabled={letterPage === 0}
                        className={`px-4 py-2 rounded-lg ${
                          letterPage === 0
                            ? "bg-orange-300/50 text-orange-600/50 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        Anterior
                      </button>

                      <div className="text-orange-800">
                        {letterPage + 1} / {letterPages.length}
                      </div>

                      <button
                        onClick={() => setLetterPage(Math.min(letterPages.length - 1, letterPage + 1))}
                        disabled={letterPage === letterPages.length - 1}
                        className={`px-4 py-2 rounded-lg ${
                          letterPage === letterPages.length - 1
                            ? "bg-orange-300/50 text-orange-600/50 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Arte digital */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { type: "heart", color: "from-pink-500 to-rose-500" },
              { type: "star", color: "from-yellow-500 to-orange-500" },
              { type: "flower", color: "from-purple-500 to-pink-500" },
              { type: "sun", color: "from-orange-500 to-yellow-500" },
            ].map((art, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`aspect-square bg-gradient-to-br ${art.color} rounded-2xl p-8 flex items-center justify-center relative overflow-hidden group cursor-pointer`}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {art.type === "heart" && <Heart className="h-16 w-16 text-white fill-white" />}
                  {art.type === "star" && <Star className="h-16 w-16 text-white fill-white" />}
                  {art.type === "flower" && <Sparkles className="h-16 w-16 text-white" />}
                  {art.type === "sun" && <Sun className="h-16 w-16 text-white" />}
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, borderRadius: "50%" }}
                  whileHover={{ scale: 2, borderRadius: "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada forma y color representa una faceta de tu personalidad: tu corazón bondadoso, tu luz brillante, tu
            belleza natural y tu espíritu mágico.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function MomentosSection() {
  const momentos = [
    { tiempo: "Mañana", actividad: "Tu sonrisa al despertar", icon: Sun },
    { tiempo: "Tarde", actividad: "Nuestras conversaciones", icon: Coffee },
    { tiempo: "Noche", actividad: "Tu sabiduría y consejos", icon: Moon },
    { tiempo: "Siempre", actividad: "Tu amor incondicional", icon: Heart },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="min-h-screen p-8 flex items-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
        >
          Momentos Contigo
        </motion.h2>

        <div className="space-y-8">
          {momentos.map((momento, index) => {
            const IconComponent = momento.icon
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
                >
                  <IconComponent className="h-12 w-12 text-white" />
                </motion.div>

                <div className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-2">{momento.tiempo}</h3>
                  <p className="text-xl text-white">{momento.actividad}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-400/30"
        >
          <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <p className="text-2xl text-white font-light">Cada momento contigo es un regalo que atesoro en mi corazón</p>
          <p className="text-yellow-300 mt-4 text-lg">¡Mami! 💖</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

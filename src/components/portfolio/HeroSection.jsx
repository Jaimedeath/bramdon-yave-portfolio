import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CV_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6933991d02b58b87d1fd7b66/d1e92730e_CV_BYMNpdf_2025_9_232.pdf";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#A8D8EA]/30 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#C3B1E1]/25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#FFB347]/20 blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Avatar / Initials */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#A8D8EA] via-[#C3B1E1] to-[#FFB347] p-1 shadow-2xl shadow-[#C3B1E1]/30"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7EC8E3] via-[#C3B1E1] to-[#FFB347] bg-clip-text text-transparent">
              BM
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#2D3436] mb-2">
            Bramdon Yave
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#7EC8E3] via-[#C3B1E1] to-[#FFB347] bg-clip-text text-transparent mb-6">
            Martínez Núñez
          </h1>
        </motion.div>

        {/* Title badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["Desarrollador Web", "Desarrollador de Software", "Sistemas POS", "Ciberseguridad"].map((tag, i) => (
            <span
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${
                i === 0 ? 'bg-[#A8D8EA]/20 border-[#A8D8EA]/40 text-[#3a7ca5]' :
                i === 1 ? 'bg-[#C3B1E1]/20 border-[#C3B1E1]/40 text-[#7a5fa8]' :
                i === 2 ? 'bg-[#FFB347]/20 border-[#FFB347]/40 text-[#c07b1e]' :
                'bg-[#A8D8EA]/20 border-[#A8D8EA]/40 text-[#3a7ca5]'
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-xl text-[#636e72] max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Profesional de la informática con amplios conocimientos en redes, sistemas operativos y software.
          Apasionado por crear soluciones tecnológicas eficientes y seguras que impulsen la innovación.
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-[#636e72] mb-10"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#C3B1E1]" /> Culiacán, Sinaloa
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#7EC8E3]" /> by.martinez20@info.uas.edu.mx
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#FFB347]" /> 6674115833
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" download>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#7EC8E3] to-[#C3B1E1] hover:from-[#6bb8d3] hover:to-[#b3a1d1] text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-[#A8D8EA]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#C3B1E1]/30"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar CV
            </Button>
          </a>
          <a href="#proyectos">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold border-2 border-[#C3B1E1]/40 text-[#7a5fa8] hover:bg-[#C3B1E1]/10 transition-all duration-300"
            >
              Ver Proyectos
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-[#C3B1E1]" />
      </motion.div>
    </section>
  );
}
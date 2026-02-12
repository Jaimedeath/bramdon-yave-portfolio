import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '526674115833'; // Formato internacional
  const message = encodeURIComponent('¡Hola Bramdon! Me interesa contactarte para un proyecto.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg shadow-[#25D366]/40 flex items-center justify-center cursor-pointer group hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white animate-pulse group-hover:animate-none" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-[#2D3436] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
          ¿Tienes un proyecto? ¡Escríbeme!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#2D3436]" />
        </div>
      </div>

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
    </motion.a>
  );
}
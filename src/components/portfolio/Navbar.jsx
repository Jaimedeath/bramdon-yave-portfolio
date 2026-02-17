import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CV_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6933991d02b58b87d1fd7b66/d1e92730e_CV_BYMNpdf_2025_9_232.pdf";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-900 via-teal-600 to-amber-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">BM</span>
            </div>
            <span className="font-bold text-slate-900 hidden sm:inline">Bramdon Martínez</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" download className="hidden sm:block">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500 text-white rounded-full px-5 text-sm font-medium shadow-sm"
              >
                <Download className="w-4 h-4 mr-1.5" />
                CV
              </Button>
            </a>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg md:hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" download className="block mt-2">
                <Button className="w-full bg-gradient-to-r from-blue-900 to-teal-600 text-white rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CV_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6933991d02b58b87d1fd7b66/d1e92730e_CV_BYMNpdf_2025_9_232.pdf";

const contactInfo = [
  { icon: Mail, label: "Email", value: "by.martinez20@info.uas.edu.mx", href: "mailto:by.martinez20@info.uas.edu.mx", color: "#1e3a8a", bg: "#dbeafe" },
  { icon: Phone, label: "Teléfono", value: "667 411 5833", href: "tel:6674115833", color: "#0d9488", bg: "#ccfbf1" },
  { icon: MapPin, label: "Ubicación", value: "Culiacán, Sinaloa, México", href: null, color: "#f59e0b", bg: "#fef3c7" },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-4 bg-gradient-to-b from-transparent via-white to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">Contacto</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-slate-600 mt-4 max-w-lg mx-auto">
            Estoy disponible para nuevos proyectos de desarrollo web, software y consultoría tecnológica.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="block bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${item.bg}40` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#636e72] mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-[#2D3436]">{item.value}</p>
                </a>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${item.bg}40` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#636e72] mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-[#2D3436]">{item.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Download CV Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-8 md:p-12 text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-amber-500/10 rounded-full" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Descarga mi Currículum Completo
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Obtén una versión detallada de mi experiencia, habilidades y formación profesional en formato PDF.
            </p>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV en PDF
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
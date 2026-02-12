import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    type: "work",
    title: "Auxiliar de Redes y Mantenimiento",
    place: "Universidad Autónoma de Sinaloa — Facultad de Arquitectura",
    period: "2025",
    details: [
      "Mantenimiento y formateo de equipos de cómputo institucionales",
      "Creación de redes VLAN para alumnos",
      "Estructuración de cableado ethernet para videovigilancia",
      "Programación de página web de posgrado",
      "Auditoría y conteo de equipos institucionales",
      "Mantenimiento de impresoras Clúster y servidores"
    ]
  }
];

const education = [
  {
    type: "edu",
    title: "Licenciado en Informática",
    place: "Universidad Autónoma de Sinaloa — FIC",
    period: "2020 — 2025",
    details: ["Certificado"]
  },
  {
    type: "edu",
    title: "Bachillerato Preparatoria",
    place: "Universidad Autónoma de Sinaloa",
    period: "2010 — 2013",
    details: ["Certificado"]
  }
];

function TimelineItem({ item, index, isLeft }) {
  const isWork = item.type === "work";
  const Icon = isWork ? Briefcase : GraduationCap;
  const color = isWork ? "#7EC8E3" : "#C3B1E1";
  const bg = isWork ? "#A8D8EA" : "#D4C5F0";

  return (
    <motion.div
      initial={{ x: isLeft ? -30 : 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative flex items-start gap-4 mb-8 last:mb-0"
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-1"
        style={{ backgroundColor: `${bg}50` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#2D3436]">{item.title}</h3>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: `${bg}40`, color }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-sm text-[#636e72] mb-3">{item.place}</p>
        {item.details.length > 0 && (
          <ul className="space-y-1.5">
            {item.details.map((detail, i) => (
              <li key={i} className="text-sm text-[#636e72] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7EC8E3]">Trayectoria</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D3436] mt-2">
            Experiencia & Educación
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7EC8E3] via-[#C3B1E1] to-[#FFB347] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#2D3436] mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#7EC8E3]" />
            Experiencia Profesional
          </h3>
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLeft={true} />
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-bold text-[#2D3436] mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#C3B1E1]" />
            Educación
          </h3>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLeft={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
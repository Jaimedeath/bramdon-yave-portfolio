import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Network, Monitor, Globe } from 'lucide-react';

const technicalSkills = [
  { name: "C++ / C / C#", level: 85, color: "#1e3a8a" },
  { name: "Python", level: 80, color: "#0d9488" },
  { name: "SQL Server / MySQL", level: 85, color: "#f59e0b" },
  { name: "Linux", level: 75, color: "#1e3a8a" },
  { name: "Redes & Cisco", level: 80, color: "#0d9488" },
  { name: "Visual Studio", level: 85, color: "#f59e0b" },
];

const skillAreas = [
  { icon: Code, title: "Desarrollo Web", desc: "Creación de sitios y aplicaciones web modernas y responsivas", color: "#1e3a8a", bg: "#dbeafe" },
  { icon: Monitor, title: "Software & POS", desc: "Desarrollo de sistemas de punto de venta y software a medida", color: "#0d9488", bg: "#ccfbf1" },
  { icon: Database, title: "Bases de Datos", desc: "Diseño, gestión y optimización de bases de datos SQL y Big Data", color: "#f59e0b", bg: "#fef3c7" },
  { icon: Shield, title: "Ciberseguridad", desc: "Implementación de seguridad perimetral y auditorías de sistemas", color: "#1e3a8a", bg: "#dbeafe" },
  { icon: Network, title: "Redes", desc: "Configuración y administración de redes VLAN y cableado estructurado", color: "#0d9488", bg: "#ccfbf1" },
  { icon: Globe, title: "Mantenimiento", desc: "Soporte técnico, formateo y actualización de equipos de cómputo", color: "#f59e0b", bg: "#fef3c7" },
];

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">Competencias</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
            Habilidades & Tecnologías
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skill areas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--card-color)_15%,transparent)] transition-all duration-500 hover:-translate-y-1"
              style={{ '--card-color': area.color }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${area.bg}40` }}
              >
                <area.icon className="w-6 h-6" style={{ color: area.color }} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical skill bars */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-8">Nivel Técnico</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalSkills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-900">{skill.name}</span>
                  <span className="text-xs font-medium text-slate-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
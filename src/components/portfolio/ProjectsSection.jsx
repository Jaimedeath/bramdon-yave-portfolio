import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ShoppingCart, Globe, Server, Database, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sistema Punto de Venta (POS)",
    description: "Sistema completo de punto de venta con gestión de inventario, facturación electrónica, reportes de ventas y control de usuarios. Diseñado para pequeños y medianos negocios.",
    tags: ["C#", "SQL Server", "Windows Forms", "Reportes"],
    icon: ShoppingCart,
    color: "#f59e0b",
    bg: "#fef3c7",
    status: "Completado"
  },
  {
    title: "Portal Web Posgrado UAS",
    description: "Desarrollo de la página web de posgrado para la Facultad de Arquitectura de la Universidad Autónoma de Sinaloa. Diseño responsivo y sistema de gestión de contenidos.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    icon: Globe,
    color: "#1e3a8a",
    bg: "#dbeafe",
    status: "En producción"
  },
  {
    title: "Gestor de Base de Datos",
    description: "Aplicación para la administración y consulta de bases de datos empresariales con soporte para SQL Server y MySQL. Incluye generación de reportes y dashboards.",
    tags: ["Python", "SQL", "Big Data", "Dashboards"],
    icon: Database,
    color: "#0d9488",
    bg: "#ccfbf1",
    status: "Completado"
  },
  {
    title: "Red VLAN Institucional",
    description: "Diseño e implementación de redes VLAN para la Facultad de Arquitectura, incluyendo cableado ethernet para sistema de videovigilancia y segmentación de red.",
    tags: ["Cisco", "Networking", "VLAN", "Cableado"],
    icon: Server,
    color: "#f59e0b",
    bg: "#fef3c7",
    status: "Completado"
  },
  {
    title: "Plataforma Web Empresarial",
    description: "Desarrollo de aplicaciones web modernas con arquitectura escalable, integración de APIs, autenticación segura y diseño UI/UX profesional.",
    tags: ["React", "Node.js", "REST API", "UI/UX"],
    icon: Code,
    color: "#1e3a8a",
    bg: "#dbeafe",
    status: "En desarrollo"
  },
  {
    title: "Auditoría de Seguridad",
    description: "Servicio de auditoría y análisis de vulnerabilidades en sistemas informáticos. Implementación de políticas de seguridad perimetral y monitoreo continuo.",
    tags: ["Linux", "Seguridad", "Auditoría", "Firewall"],
    icon: Lock,
    color: "#0d9488",
    bg: "#ccfbf1",
    status: "Servicio activo"
  }
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-4 bg-gradient-to-b from-transparent via-white to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${project.color}, ${project.bg})` }} />
              
              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${project.bg}50` }}
                  >
                    <project.icon className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${project.bg}40`, color: project.color }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
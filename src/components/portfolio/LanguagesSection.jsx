import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const languages = [
  { name: "Español", level: "Nativo", percent: 100, color: "#7EC8E3" },
  { name: "Inglés", level: "Intermedio B1", percent: 55, color: "#C3B1E1" },
];

const softSkills = [
  "Trabajo en equipo",
  "Desarrollo de estrategias",
  "Responsable y proactivo",
  "Pensamiento analítico",
  "Resolución de problemas",
  "Comunicación efectiva",
];

export default function LanguagesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#2D3436] mb-6 flex items-center gap-2">
              <Languages className="w-5 h-5 text-[#7EC8E3]" />
              Idiomas
            </h3>
            <div className="space-y-5">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#2D3436]">{lang.name}</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${lang.color}20`, color: lang.color }}>
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#2D3436] mb-6">
              Habilidades Blandas
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring" }}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{
                    backgroundColor: i % 3 === 0 ? '#A8D8EA15' : i % 3 === 1 ? '#C3B1E115' : '#FFB34715',
                    borderColor: i % 3 === 0 ? '#A8D8EA40' : i % 3 === 1 ? '#C3B1E140' : '#FFB34740',
                    color: i % 3 === 0 ? '#3a7ca5' : i % 3 === 1 ? '#7a5fa8' : '#c07b1e'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#636e72]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7EC8E3] via-[#C3B1E1] to-[#FFB347] flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">BM</span>
          </div>
          <span>© 2026 Bramdon Yave Martínez Núñez</span>
        </div>
        <p className="text-xs text-[#b2bec3]">
          Desarrollador Web · Software · Ciberseguridad · Culiacán, Sinaloa
        </p>
      </div>
    </footer>
  );
}
// src/components/Navbar.tsx
import { useState } from 'react';
import { enlacesMenu } from '../config/navConfig';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  return (
    <nav className="w-full border-b border-institucional-componente bg-institucional-superficie/60 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo del Instituto */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              <span className="text-institucional-acento">-</span>INSTITUTO<span className="text-institucional-acento">-</span>
            </span>
          </div>

          {/* Menú de Escritorio (Oculto en móviles) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {enlacesMenu.map((enlace, index) => (
                <a
                  key={index}
                  href={enlace.ruta}
                  className="text-slate-300 hover:text-institucional-acento px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {enlace.texto}
                </a>
              ))}
            </div>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-institucional-componente focus:outline-none transition-colors"
              aria-label="Alternar menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuAbierto ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Despliegue del Menú Móvil (Interactividad en tiempo real) */}
      <div className={`${menuAbierto ? 'block animate-fadeIn' : 'hidden'} md:hidden border-t border-institucional-componente bg-institucional-superficie`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {enlacesMenu.map((enlace, index) => (
            <a
              key={index}
              href={enlace.ruta}
              className="text-slate-300 hover:text-institucional-acento block px-3 py-2 rounded-md text-base font-medium"
            >
              {enlace.texto}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
// src/components/FormularioContacto.tsx
import { useState, type FormEvent } from 'react';

export default function FormularioContacto() {
  const [email, setEmail] = useState<string>('');
  const [interes, setInteres] = useState<string>('sistemas');
  const [enviado, setEnviado] = useState<boolean>(false);

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    // Aquí en el futuro conectarás el envío de datos
    setEnviado(true);
    setEmail('');
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 rounded-2xl border border-institucional-componente bg-institucional-superficie/30 backdrop-blur-md shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white">¿Tienes dudas o deseas postular?</h3>
        <p className="text-sm text-slate-400 font-light mt-1">
          Déjanos tu correo y un asesor académico se pondrá en contacto contigo.
        </p>
      </div>

      {enviado ? (
        <div className="p-4 rounded-xl bg-institucional-acento/10 border border-institucional-acento/30 text-center animate-fade-in">
          <p className="text-sm text-institucional-acento font-medium">
            ¡Registro exitoso! Pronto revisaremos tu solicitud.
          </p>
        </div>
      ) : (
        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label htmlFor="interes" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Programa de Interés
            </label>
            <select
              id="interes"
              value={interes}
              onChange={(e) => setInteres(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-institucional-componente bg-institucional-fondo text-sm text-slate-200 focus:outline-none focus:border-institucional-acento transition-colors duration-200"
            >
              <option value="sistemas">Desarrollo de Sistemas</option>
              <option value="ciberseguridad">Ciberseguridad y Redes</option>
              <option value="videojuegos">Diseño y Desarrollo de Videojuegos</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="ejemplo@instituto.edu.pe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-institucional-componente bg-institucional-fondo text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-institucional-acento transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-institucional-acento text-slate-950 text-sm font-semibold hover:bg-cyan-400 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md shadow-institucional-acento/10"
          >
            Solicitar Información
          </button>
        </form>
      )}
    </div>
  );
}
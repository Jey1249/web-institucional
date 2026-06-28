import { useState } from "react";

//Definimos una interfaz con TypeScript para las propiedades (Props)
interface BotonProps {
    texto: string;
}

export default function BotonProps({ texto }: BotonProps) {
    const [contador, setContador] = useState<number>(0);

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
            <p className="text-white text-lg font-medium">
                Clics realizados: <span className="text-cyan-400 font-bold">{contador}</span>
            </p>
            <button
                onClick={() => setContador(contador + 1)}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
                {texto}
            </button>
        </div>
    );
}
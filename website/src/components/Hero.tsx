import { Github, Atom } from "lucide-react"
import { toast } from "react-biper"
export const Hero = () => {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
            <div className="flex gap-4 bg-gray-800 text-white font-bold font-mono px-6 md:px-10 py-2 rounded-full items-center justify-center mb-6">
                <Atom className="w-6 h-6 md:w-8 md:h-8" />
                <p className="text-xl md:text-2xl">React</p>
            </div>
            <h1 className="text-gray-800 font-mono text-6xl md:text-8xl font-black mb-4">Biper</h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">Gestor de notificaciones push para aplicaciones react</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                <button className="bg-gray-800 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer active:scale-95" onClick={() => toast.success("¡Biper es increible! 🔥🔥🔥🔥", { position: "top-center" })}>Probar Biper</button>
                <button className="bg-white text-gray-800 border-2 border-gray-800 px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:cursor-pointer active:scale-95">Documentación</button>
            </div>
            <div className="mt-8 text-gray-500 hover:text-gray-800 transition-colors hover:cursor-pointer">
                <a className="flex gap-2 items-center justify-center" href="https://github.com/Javier-GarciaP/biper" target="_blank">
                    <Github className="w-5 h-5" />
                    <p className="font-medium">Repositorio del proyecto</p>
                </a>
            </div>
        </section>
    )
}
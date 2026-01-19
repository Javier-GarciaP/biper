import { Github, Atom } from "lucide-react"
import { toast } from "react-biper"
export const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
            <div className="flex gap-4 bg-gray-800 text-white font-bold font-mono px-10 py-2 rounded-4xl items-center justify-center"><Atom /> <p className="text-2xl">React</p></div>
            <h1 className="text-gray-800 font-mono text-8xl font-black">Biper</h1>
            <p className="text-gray-600 text-xl">Gestor de notificaciones push para aplicaciones react</p>
            <div className="flex gap-4 mt-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer" onClick={() => toast.success("¡Biper es increible! 🔥🔥🔥🔥", { position: "top-center" })}>Probar Biper</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer">Documentación</button>
            </div>
            <div className="mt-4 text-gray-500 hover:text-gray-800 transition-colors hover:cursor-pointer">
                <a className="flex gap-2" href="">
                    <Github />
                    <p>Repositorio del proyecto</p>
                </a>
            </div>
        </section>
    )
}
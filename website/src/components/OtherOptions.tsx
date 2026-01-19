import { toast } from "react-biper"
import { useState } from "react"
import { Copy } from "lucide-react"

export const OtherOptions = () => {
    const [code, setCode] = useState('toast.info("Mensaje con título", { title: "Notificación" })')

    const showWithTitle = () => {
        const msg = 'toast.info("Mensaje con título", { title: "Notificación" })';
        setCode(msg);
        toast.info("Mensaje con título", { title: "Notificación" });
    }

    const showWithDuration = () => {
        const msg = 'toast.success("Dura 5 segundos", { duration: 5000 })';
        setCode(msg);
        toast.success("Dura 5 segundos", { duration: 5000 });
    }

    const showCustomStyles = () => {
        const msg = 'toast.info("Estilos personalizados", {\n      backgroundColor: "#1e1b4b",\n      textColor: "#e0e7ff",\n      borderColor: "#4338ca"\n    })';
        setCode(msg);
        toast.info("Estilos personalizados", {
            backgroundColor: "#1e1b4b",
            textColor: "#e0e7ff",
            borderColor: "#4338ca"
        });
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast.info("Código copiado", {
            position: "bottom-center",
            duration: 2000
        });
    }

    return (
        <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-gray-700 font-mono">Otras Opciones</h3>
            <p className="text-gray-600 text-sm">Personaliza el tiempo, añade títulos o cambia los colores base.</p>

            <div className="flex flex-wrap gap-3">
                <button className="bg-gray-800 py-3 px-6 rounded-xl text-white font-bold hover:bg-gray-700 hover:cursor-pointer transition-all active:scale-95 shadow-md"
                    onClick={showWithTitle}>
                    Con Título
                </button>
                <button className="bg-gray-800 py-3 px-6 rounded-xl text-white font-bold hover:bg-gray-700 hover:cursor-pointer transition-all active:scale-95 shadow-md"
                    onClick={showWithDuration}>
                    Larga Duración
                </button>
                <button className="bg-gray-800 py-3 px-6 rounded-xl text-white font-bold hover:bg-gray-700 hover:cursor-pointer transition-all active:scale-95 shadow-md"
                    onClick={showCustomStyles}>
                    Estilos Custom
                </button>
            </div>

            <div className="relative group rounded-2xl bg-white border-2 border-gray-100 shadow-sm overflow-hidden hover:border-gray-300 transition-all">
                <div
                    className="absolute right-4 top-4 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors border border-transparent hover:border-gray-200 z-10"
                    onClick={handleCopy}
                >
                    <Copy width={16} height={16} className="text-gray-400 group-hover:text-gray-600" />
                </div>
                <pre className="p-6 md:p-8 overflow-x-auto selection:bg-gray-800 selection:text-white">
                    <code className="font-mono text-xs md:text-sm leading-relaxed text-gray-800 block">
                        {code}
                    </code>
                </pre>
            </div>
        </article>
    )
}
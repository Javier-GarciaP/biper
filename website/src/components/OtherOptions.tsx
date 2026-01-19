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

            <div className="flex flex-wrap gap-2">
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={showWithTitle}>
                    Con Título
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={showWithDuration}>
                    Larga Duración
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={showCustomStyles}>
                    Estilos Custom
                </button>
            </div>

            <div className="relative group rounded-xl bg-gray-20 border-2 border-gray-100">
                <pre className="flex justify-between items-center p-5 overflow-x-auto selection:bg-blue-500/30">
                    <code className="font-mono text-sm leading-relaxed text-gray-800 block">
                        {code}
                    </code>
                    <div
                        className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
                        onClick={handleCopy}
                    >
                        <Copy width={15} className="text-gray-400 group-hover:text-gray-600" />
                    </div>
                </pre>
            </div>
        </article>
    )
}
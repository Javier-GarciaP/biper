import { toast } from "react-biper"
import { useState } from "react"
import { Copy } from "lucide-react"

export const Types = () => {

    const [type, setType] = useState('toast.success("Archivo creado con exito", { position: "bottom-right" })')

    const types = (type: string) => {
        switch (type) {
            case "success":
                toast.success("Archivo creado con exito", { position: "bottom-right" })
                break;
            case "error":
                toast.error("Error al crear el archivo", { position: "bottom-right" })
                break;
            case "warning":
                toast.warning("El archivo ya existe", { position: "bottom-right" })
                break;
            case "info":
                toast.info("Información de la aplicación", { position: "bottom-right" })
                break;
            default:
                break;
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(type);
        toast.info("Código copiado", {
            position: "bottom-center",
            duration: 2000
        });
    }

    return (
        <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-gray-700 font-mono">Tipos</h3>
            <p className="text-gray-600 text-sm">Existen cuatro tipos de toasts</p>
            <div className="flex flex-wrap gap-2">
                <button className="bg-gray-100 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 hover:cursor-pointer transition-all active:scale-95" onClick={() => { setType('toast.success("Archivo creado con exito", { position: "bottom-right" })'); types("success") }}>
                    Success
                </button>
                <button className="bg-red-50 text-red-600 font-bold py-2 px-6 rounded-lg hover:bg-red-100 hover:cursor-pointer transition-all active:scale-95" onClick={() => { setType('toast.error("Error al crear el archivo", { position: "bottom-right" })'); types("error") }}>
                    Error
                </button>
                <button className="bg-yellow-50 text-yellow-600 font-bold py-2 px-6 rounded-lg hover:bg-yellow-100 hover:cursor-pointer transition-all active:scale-95" onClick={() => { setType('toast.warning("El archivo ya existe", { position: "bottom-right" })'); types("warning") }}>
                    Warning
                </button>
                <button className="bg-blue-50 text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-blue-100 hover:cursor-pointer transition-all active:scale-95" onClick={() => { setType('toast.info("Información de la aplicación", { position: "bottom-right" })'); types("info") }}>
                    Info
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
                        {type}
                    </code>
                </pre>
            </div>
        </article>
    )
}
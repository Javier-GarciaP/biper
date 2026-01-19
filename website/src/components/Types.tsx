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
    return (
        <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-gray-700 font-mono">Tipos</h3>
            <p className="text-gray-600 text-sm">Existen cuatro tipos de toasts</p>
            <div className="flex gap-2">
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200" onClick={() => { setType('toast.success("Archivo creado con exito", { position: "bottom-right" })'); types("success") }}>
                    Success
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200" onClick={() => { setType('toast.error("Error al crear el archivo", { position: "bottom-right" })'); types("error") }}>
                    Error
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200" onClick={() => { setType('toast.warning("El archivo ya existe", { position: "bottom-right" })'); types("warning") }}>
                    Warning
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200" onClick={() => { setType('toast.info("Información de la aplicación", { position: "bottom-right" })'); types("info") }}>
                    Info
                </button>
            </div>

            <div className="relative group rounded-xl bg-gray-20 border-2 border-gray-100">
                <pre className="flex justify-between items-center p-5 overflow-x-auto selection:bg-blue-500/30">
                    <code className="font-mono text-sm leading-relaxed text-gray-800 block">
                        {
                            type
                        }
                    </code>
                    <Copy width={15} className="hover:cursor-pointer" />
                </pre>
            </div>
        </article>
    )
}
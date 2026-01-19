import { toast } from "react-biper"
import { useState } from "react"
import { Copy } from "lucide-react"

export const Position = () => {
    const [code, setCode] = useState('toast.success("Notificación en posición", { position: "top-right" })')

    const showToast = (pos: any) => {
        const snippet = `toast.success("Notificación en posición", { position: "${pos}" })`;
        setCode(snippet);
        toast.success("Notificación en posición", { position: pos });
    }

    return (
        <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-gray-700 font-mono">Posición</h3>
            <p className="text-gray-600 text-sm">Controla dónde aparecen las notificaciones en la pantalla.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={() => showToast("top-left")}>
                    Top Left
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={() => showToast("top-center")}>
                    Top Center
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={() => showToast("top-right")}>
                    Top Right
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={() => showToast("bottom-left")}>
                    Bottom Left
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={() => showToast("bottom-center")}>
                    Bottom Center
                </button>
                <button className="bg-gray-800 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-transform hover:scale-105 duration-200"
                    onClick={() => showToast("bottom-right")}>
                    Bottom Right
                </button>
            </div>

            <div className="relative group rounded-xl bg-gray-20 border-2 border-gray-100">
                <pre className="flex justify-between items-center p-5 overflow-x-auto selection:bg-blue-500/30">
                    <code className="font-mono text-sm leading-relaxed text-gray-800 block">
                        {code}
                    </code>
                    <Copy width={15} className="hover:cursor-pointer" />
                </pre>
            </div>
        </article>
    )
}
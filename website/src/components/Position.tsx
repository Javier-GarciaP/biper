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

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast.info("Código copiado", {
            position: "bottom-center",
            duration: 2000
        });
    }

    return (
        <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-gray-700 font-mono">Posición</h3>
            <p className="text-gray-600 text-sm">Controla dónde aparecen las notificaciones en la pantalla.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button className="bg-white border-2 border-gray-100 py-3 px-4 rounded-xl text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer transition-all active:scale-95"
                    onClick={() => showToast("top-left")}>
                    Top Left
                </button>
                <button className="bg-white border-2 border-gray-100 py-3 px-4 rounded-xl text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer transition-all active:scale-95"
                    onClick={() => showToast("top-center")}>
                    Top Center
                </button>
                <button className="bg-white border-2 border-gray-100 py-3 px-4 rounded-xl text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer transition-all active:scale-95"
                    onClick={() => showToast("top-right")}>
                    Top Right
                </button>
                <button className="bg-white border-2 border-gray-100 py-3 px-4 rounded-xl text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer transition-all active:scale-95"
                    onClick={() => showToast("bottom-left")}>
                    Bottom Left
                </button>
                <button className="bg-white border-2 border-gray-100 py-3 px-4 rounded-xl text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer transition-all active:scale-95"
                    onClick={() => showToast("bottom-center")}>
                    Bottom Center
                </button>
                <button className="bg-white border-2 border-gray-100 py-3 px-4 rounded-xl text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer transition-all active:scale-95"
                    onClick={() => showToast("bottom-right")}>
                    Bottom Right
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
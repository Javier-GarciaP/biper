import { Copy } from "lucide-react"
import { toast } from "react-biper"

export const Installation = () => {
    const command = "npm install react-biper";

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        toast.success("Comando copiado al portapapeles", {
            position: "bottom-center",
            duration: 2000
        });
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-gray-800 font-mono text-4xl font-bold">Instalación</h2>
            <div
                className="bg-gray-800 text-white px-5 py-4 rounded-xl flex justify-between items-center group cursor-pointer hover:bg-gray-900 transition-all active:scale-[0.98] shadow-lg overflow-hidden"
                onClick={handleCopy}
            >
                <code className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide mr-4">
                    <span className="text-green-400">npm</span> <span className="text-blue-200">install</span> <span className="text-white">react-biper</span>
                </code>
                <Copy width={18} height={18} className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
            </div>
        </section>
    )
}
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
                className="bg-gray-800 text-white px-4 py-2 rounded-md flex justify-between items-center group cursor-pointer"
                onClick={handleCopy}
            >
                <code>
                    <span className="text-green-400">npm</span> <span className="text-blue-200">install</span> <span className="text-white">react-biper</span>
                </code>
                <Copy width={15} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
        </section>
    )
}
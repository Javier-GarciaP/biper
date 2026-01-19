import { Copy } from "lucide-react"

export const Installation = () => {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-gray-800 font-mono text-4xl font-bold">Instalación</h2>
            <pre className="bg-gray-800 text-white px-4 py-2 rounded-md flex justify-between items-center">
                <code>
                    <span className="text-green-400">npm</span> <span className="text-blue-200">install</span> <span className="text-white">react-biper</span>
                </code>
                <Copy width={15} className="hover:cursor-pointer" />
            </pre>
        </section>
    )
}
import { Copy } from "lucide-react"
import { toast } from "react-biper"

export const Usage = () => {

    const codeSnippet = `import { Toaster, toast } from 'react-biper'

function App() {
    return (
        <div>
            <Toaster>
                <button onClick={() => toast.success('Mensaje de prueba')}>
                    Pulsar para mostrar toast
                </button>
            </Toaster>
        </div>
    )
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        toast.success("Código copiado", {
            position: "bottom-center",
            duration: 2000
        });
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-gray-800 font-mono text-4xl font-black">Como usar</h2>

            <div className="relative group rounded-xl bg-gray-20 border-2 border-gray-100">
                <div
                    className="absolute right-4 top-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={handleCopy}
                >
                    <Copy width={15} className="text-gray-400 group-hover:text-gray-600" />
                </div>
                <pre className="p-5 overflow-x-auto selection:bg-blue-500/30">
                    <code className="font-mono text-sm leading-relaxed text-gray-800 block">
                        {codeSnippet}
                    </code>
                </pre>
            </div>
        </section>
    );
};
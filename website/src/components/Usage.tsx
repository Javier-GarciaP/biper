export const Usage = () => {

    const codeSnippet = `
    import { Toaster, toast } from 'react-biper'

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
    }
    `;

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-gray-800 font-mono text-4xl font-black">Como usar</h2>

            <div className="relative group rounded-xl bg-gray-20 border-2 border-gray-100">
                <pre className="p-5 overflow-x-auto selection:bg-blue-500/30">
                    <code className="font-mono text-sm leading-relaxed text-gray-800 block">
                        {codeSnippet}
                    </code>
                </pre>
            </div>
        </section>
    );
};
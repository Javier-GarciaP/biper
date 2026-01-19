import { Github } from "lucide-react"
export const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 text-gray-500 border-gray-100 py-10 gap-4 mt-10">
            <a className="flex gap-2 items-center hover:text-gray-900 transition-colors font-medium" href="https://github.com/Javier-GarciaP" target="_blank text-sm md:text-base">
                <Github width={18} height={18} />
                <p>Javier García</p>
            </a>
            <p className="text-sm">© 2026 Biper • Hecho con amor por para la comunidad de React</p>
        </footer>
    )
}
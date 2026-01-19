import { Github } from "lucide-react"
export const Footer = () => {
    return (
        <footer className="flex justify-between border-t-4 text-gray-600 border-gray-300 py-8">
            <a className="flex gap-2 hover:text-gray-800 transition-colors hover:cursor-pointer" href="https://github.com/Javier-GarciaP" target="_blank">
                <Github />
                <p>Javier-GarciaP</p>
            </a>
            <p>@2026 Biper</p>
        </footer>
    )
}
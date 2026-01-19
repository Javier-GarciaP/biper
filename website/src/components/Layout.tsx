export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="w-full max-w-4xl px-4 md:px-6 py-10 text-gray-900 flex flex-col">
            {children}
        </main>
    )
}
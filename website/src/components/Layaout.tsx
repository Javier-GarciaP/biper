export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-w-2xl p-2 text-gray-900 flex flex-col">
            {children}
        </main>
    )
}
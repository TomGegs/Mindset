import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main className="relative flex h-svh w-screen flex-col lg:h-lvh">{children}</main>
            </body>
        </html>
    )
}

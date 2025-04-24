import type { Metadata } from 'next';
import './global.css';
import Sidebar from '@/layouts/Sidebar';


export const metadata: Metadata = {
    title: {
        default: 'Conduit',
        template: '%s — Conduit',
    },
    description:
        'Conduit is realworld social blogging site. it uses a custom API for all requests, including authentication.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
                <html lang="en" suppressHydrationWarning>
                    <body
                        suppressHydrationWarning
                        className={`antialiased`}
                    >
                        <div
                            className='app-container'
                        >
                            <Sidebar></Sidebar>
                            <main>{children}</main>
                        </div>
                    </body>
                </html>
        </>
    );
}

import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Beauty Empress',
        default: 'Beauty Empress'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="bg-black text-white min-h-screen m-0 p-0">{children}</body>
        </html>
    );
}

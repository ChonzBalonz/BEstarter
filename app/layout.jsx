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
            <body style={{ background: '#000', color: '#fff', margin: 0, padding: 0, minHeight: '100vh' }}>
                {children}
            </body>
        </html>
    );
}

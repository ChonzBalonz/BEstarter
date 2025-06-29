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
                <meta name="description" content="Beauty Empress - Premier beauty salon in Plainfield, IL. Specializing in microblading, lip fillers, facials, lashes, and salon suite rentals. Book your appointment today!" />
                <meta property="og:title" content="Beauty Empress | Beauty Salon in Plainfield, IL" />
                <meta property="og:description" content="Experience top-tier beauty services including microblading, lip fillers, facials, and more at Beauty Empress. Private salon suites available for professionals." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://beautyempress.com/" />
                <meta property="og:image" content="/public/images/corgi.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Beauty Empress | Beauty Salon in Plainfield, IL" />
                <meta name="twitter:description" content="Experience top-tier beauty services including microblading, lip fillers, facials, and more at Beauty Empress." />
                <meta name="twitter:image" content="/public/images/corgi.jpg" />
            </head>
            <body className="bg-black text-white min-h-screen m-0 p-0">{children}</body>
        </html>
    );
}

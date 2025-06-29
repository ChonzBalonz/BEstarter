import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import Faq from 'components/faq';
import BookButton from 'components/BookButton';
import HeroSlideshow from 'components/HeroSlideshow';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="bg-black text-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BeautySalon',
                        name: 'Beauty Empress',
                        image: 'https://beautyempress.com/public/images/corgi.jpg',
                        '@id': 'https://beautyempress.com/',
                        url: 'https://beautyempress.com/',
                        telephone: '+1-555-123-4567',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: '12337 S Route 59 Unit 131',
                            addressLocality: 'Plainfield',
                            addressRegion: 'IL',
                            postalCode: '60585',
                            addressCountry: 'US',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 41.626,
                            longitude: -88.205,
                        },
                        openingHoursSpecification: [{
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: [
                                'Monday',
                                'Tuesday',
                                'Wednesday',
                                'Thursday',
                                'Friday',
                                'Saturday',
                            ],
                            opens: '09:00',
                            closes: '18:00',
                        }],
                        sameAs: [
                            'https://www.facebook.com/yourbeautyempress',
                            'https://www.instagram.com/yourbeautyempress'
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative w-screen h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <HeroSlideshow />
                </div>
                <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-center tracking-widest text-white drop-shadow-lg opacity-80">
                    BEAUTY
                    <br />
                    EMPRESS
                </h1>
            </section>

            {/* Salon Suites Title */}
            <section className="text-center my-8">
                <h2 className="text-3xl md:text-4xl font-bold">SALON SUITES</h2>
            </section>

            {/* Our Services */}
            <section className="text-center my-8">
                <BookButton />
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold my-6">Our Services</h3>
                    <p>Explore our beauty services, including microblading and lip fillers, tailored for you.</p>
                    <div className="text-left mt-8 space-y-4">
                        <h4 className="font-bold">Permanent Makeup Training</h4>
                        <p>Join our classes to learn beauty techniques and enhance your skills in microblading.</p>
                        <h4 className="font-bold">Our Mission</h4>
                        <p>
                            Brow that stay. Lips that slay. Treat yourself to brows, lashes, facials, body sculpting and
                            more! One stop, all the glam.
                        </p>
                        <h4 className="font-bold">Salon Suites</h4>
                        <p>
                            Private salon suites available for rent — perfect for beauty professionals ready to elevate
                            their brand.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Faq />

            {/* Contact Form */}
            <section className="max-w-4xl mx-auto my-12 flex flex-wrap gap-8 items-start">
                <div className="flex-1 min-w-[250px]">
                    <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                    <p>
                        Contact us for inquiries about microblading, lip fillers, and our beauty classes. We&apos;re
                        here to help!
                    </p>
                </div>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="flex-1 min-w-[250px] flex flex-col gap-4"
                >
                    {/* Netlify form hidden input */}
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Honeypot field for bots */}
                    <input type="hidden" name="bot-field" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your First Name Here"
                        className="px-4 py-3 rounded-lg border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address*"
                        className="px-4 py-3 rounded-lg border-none bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message Here*"
                        className="px-4 py-3 rounded-lg border-none bg-gray-800 text-white placeholder-gray-400 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow transition-colors duration-200 min-w-[140px] text-lg mt-2"
                    >
                        Message
                    </button>
                </form>
            </section>

            {/* Location Section */}
            <section className="max-w-4xl mx-auto my-12 flex flex-wrap gap-8 items-start">
                <div className="flex-1 min-w-[250px]">
                    <h2 className="text-2xl font-bold mb-2">Our Location</h2>
                    <p>
                        <b>Salon</b>
                        <br />
                        12337 s route 59 Plainfield 60585 unit 131
                    </p>
                </div>
                <div className="flex-1 min-w-[250px]">
                    <iframe
                        src="https://www.google.com/maps?q=12337+S+Rte+59+%23131,+Plainfield,+IL+60585&output=embed"
                        width="100%"
                        height="250"
                        className="border-0 rounded-xl w-full h-[250px]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Salon Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}

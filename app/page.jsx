import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

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
        <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    height: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    src="/images/corgi.jpg" // Replace with your hero image
                    alt="Beauty Empress Hero"
                    layout="fill"
                    objectFit="cover"
                    style={{ filter: 'brightness(0.5)' }}
                />
                <h1
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        letterSpacing: '0.1em'
                    }}
                >
                    Beauty Empress
                </h1>
            </section>

            {/* Salon Suites Title */}
            <section style={{ textAlign: 'center', margin: '2rem 0' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>SALON SUITES</h2>
            </section>

            {/* Our Services */}
            <section style={{ textAlign: 'center', margin: '2rem 0' }}>
                <button
                    style={{
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        border: '1px solid #fff',
                        background: 'none',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        marginBottom: '1rem'
                    }}
                >
                    Book Service Or Class
                </button>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1.5rem 0' }}>Our Services</h3>
                    <p>Explore our beauty services, including microblading and lip fillers, tailored for you.</p>
                    <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                        <h4 style={{ fontWeight: 'bold' }}>Permanent Makeup Training</h4>
                        <p>Join our classes to learn beauty techniques and enhance your skills in microblading.</p>
                        <h4 style={{ fontWeight: 'bold' }}>Our Mission</h4>
                        <p>
                            Brow that stay. Lips that slay. Treat yourself to brows, lashes, facials, body sculpting and
                            more! One stop, all the glam.
                        </p>
                        <h4 style={{ fontWeight: 'bold' }}>Salon Suites</h4>
                        <p>
                            Private salon suites available for rent — perfect for beauty professionals ready to elevate
                            their brand.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ maxWidth: 700, margin: '2rem auto' }}>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>What Courses do you offer?</summary>
                    <p>Microblading, Lip Fillers, and more.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>What is the Course Outline?</summary>
                    <p>Comprehensive training covering theory and hands-on practice.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>What is included?</summary>
                    <p>All materials and certification upon completion.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>Who is this course for?</summary>
                    <p>Anyone interested in beauty and permanent makeup.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>Will I be able to work on a live model?</summary>
                    <p>Yes, live model practice is included.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>What will you learn?</summary>
                    <p>Techniques, safety, and business tips.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>Is there a deposit required?</summary>
                    <p>Yes, a deposit is required to secure your spot.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>Is there licensing required?</summary>
                    <p>Check your local regulations for licensing requirements.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>Do you offer financing?</summary>
                    <p>Financing options are available.</p>
                </details>
                <details style={{ marginBottom: '1rem' }}>
                    <summary style={{ fontWeight: 'bold' }}>Our Classes</summary>
                    <p>Contact us for the latest class schedule.</p>
                </details>
            </section>

            {/* Contact Form */}
            <section
                style={{
                    maxWidth: 900,
                    margin: '3rem auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    alignItems: 'flex-start'
                }}
            >
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Get in Touch</h2>
                    <p>
                        Contact us for inquiries about microblading, lip fillers, and our beauty classes. We're here to
                        help!
                    </p>
                </div>
                <form style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Your First Name Here"
                        style={{ padding: '0.75rem', borderRadius: '0.5rem', border: 'none' }}
                    />
                    <input
                        type="email"
                        placeholder="Your Email Address*"
                        style={{ padding: '0.75rem', borderRadius: '0.5rem', border: 'none' }}
                    />
                    <textarea
                        placeholder="Your Message Here*"
                        style={{ padding: '0.75rem', borderRadius: '0.5rem', border: 'none', minHeight: '100px' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '0.75rem',
                            borderRadius: '2rem',
                            border: 'none',
                            background: '#fff',
                            color: '#000',
                            fontWeight: 'bold'
                        }}
                    >
                        Message
                    </button>
                </form>
            </section>

            {/* Location Section */}
            <section
                style={{
                    maxWidth: 900,
                    margin: '3rem auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    alignItems: 'flex-start'
                }}
            >
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Our Location</h2>
                    <p>
                        <b>Salon</b>
                        <br />
                        12337 s route 59 Plainfield 60585 unit 131
                    </p>
                </div>
                <div style={{ flex: 1 }}>
                    <iframe
                        src="https://www.google.com/maps?q=12337+S+Rte+59+%23131,+Plainfield,+IL+60585&output=embed"
                        width="100%"
                        height="250"
                        style={{ border: 0, borderRadius: '1rem' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Salon Location"
                    ></iframe>
                </div>
            </section>

            {/* Dynamic Content Sections (for Netlify deployment) */}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
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

import Link from 'next/link';

export default function BookingPage() {
    return (
        <div
            className="section"
            style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Book Your Appointment
            </h1>
            <p
                style={{
                    fontSize: '1.15rem',
                    color: '#e0e0e0',
                    marginBottom: '2.5rem',
                    maxWidth: 500,
                    textAlign: 'center'
                }}
            >
                Welcome to our booking system! Soon you’ll be able to schedule your beauty services and classes right
                here.
            </p>
            <div style={{ marginBottom: '2rem' }}>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>Booking system coming soon.</span>
            </div>
            <Link href="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
}

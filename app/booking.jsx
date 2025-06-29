import Link from 'next/link';

export default function BookingPage() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight text-center">
                Book Your Appointment
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl text-center">
                Welcome to our booking system! Soon you’ll be able to schedule your beauty services and classes right
                here.
            </p>
            <div className="mb-8">
                <span className="text-white font-semibold text-base md:text-lg">Booking system coming soon.</span>
            </div>
            <Link href="/">
                <button className="px-6 py-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow transition-colors duration-200">
                    Back to Home
                </button>
            </Link>
        </div>
    );
}

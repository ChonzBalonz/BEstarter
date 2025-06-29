'use client';
import React, { useState } from 'react';

export default function BookButton({
    label = 'Book Service Or Class',
    url = 'https://app.acuityscheduling.com/schedule.php?owner=19341695&ref=embedded_csp'
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="px-8 py-4 rounded-full border border-cyan-400 bg-gradient-to-r from-cyan-400 to-teal-800 text-gray-900 font-bold text-lg mb-4 shadow-lg transition-transform duration-100 active:scale-95 hover:from-cyan-300 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => setOpen(true)}
            >
                {label}
            </button>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl max-w-3xl w-[90vw] h-[80vh] relative overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2.5 right-2.5 bg-pink-700 text-white border-none rounded-full w-8 h-8 text-lg flex items-center justify-center cursor-pointer z-10 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            onClick={() => setOpen(false)}
                            aria-label="Close booking modal"
                        >
                            ×
                        </button>
                        <iframe
                            src={url}
                            title="Schedule Appointment"
                            width="100%"
                            height="100%"
                            className="border-none min-h-full min-w-full"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

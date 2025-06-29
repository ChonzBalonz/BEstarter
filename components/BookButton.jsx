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
                className="btn"
                style={{
                    padding: '1rem 2rem',
                    borderRadius: '2rem',
                    border: '1px solid #2bdcd2',
                    background: 'linear-gradient(90deg, #2bdcd2 0%, #016968 100%)',
                    color: '#171717',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 16px 0 rgba(43,220,210,0.15)',
                    transition: 'transform 0.1s',
                    cursor: 'pointer'
                }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => setOpen(true)}
            >
                {label}
            </button>
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.7)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={() => setOpen(false)}
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: '10px',
                            maxWidth: '900px',
                            width: '90vw',
                            height: '80vh',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 4px 32px rgba(0,0,0,0.2)'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                background: '#e11d48',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: 32,
                                height: 32,
                                fontSize: 18,
                                cursor: 'pointer',
                                zIndex: 2
                            }}
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
                            frameBorder="0"
                            style={{ border: 'none', minHeight: '100%', minWidth: '100%' }}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

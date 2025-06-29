'use client';
import React from 'react';
import Link from 'next/link';

export default function BookButton() {
    return (
        <Link href="/booking">
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
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                Book Service Or Class
            </button>
        </Link>
    );
}

'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const slides = [
    { type: 'image', src: '/Hero/img1.jpg' },
    { type: 'image', src: '/Hero/img2.jpg' },
    { type: 'image', src: '/Hero/img3.jpg' },
    { type: 'image', src: '/Hero/img4.jpg' },
    { type: 'image', src: '/Hero/img5.jpg' },
    { type: 'image', src: '/Hero/img6.jpg' },
    { type: 'image', src: '/Hero/img7.jpg' }
];

export default function HeroSlideshow() {
    const [current, setCurrent] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        let timer;
        timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [current]);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '90vh', // changed from 100vh to 90vh
                zIndex: -1,
                overflow: 'hidden'
            }}
        >
            <Image src={slides[current].src} alt="Hero Slide" fill style={{ objectFit: 'cover' }} priority />
        </div>
    );
}

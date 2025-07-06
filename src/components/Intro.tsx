'use client';

import { useRef, useState, useEffect } from 'react';

export default function Intro({ onFinish }: { onFinish: () => void }) {
    const [hasStarted, setHasStarted] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [videoSrc, setVideoSrc] = useState('/intro.mov');
    const videoRef = useRef<HTMLVideoElement>(null);

    // Detect if on mobile
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setVideoSrc('/intro_mobile.mp4');
        }
    }, []);

    const handleStart = () => {
        setHasStarted(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 100);
    };

    const handleVideoEnd = () => {
        setFadeOut(true);
        setTimeout(() => {
            onFinish();
        }, 500);
    };

    return (
        <>
            {!hasStarted && (
                <div className="flex flex-col fixed inset-0 z-50 items-center justify-center">
                    <div className='flex flex-col items-center'>
                        <h1>POWER TO THE PEOPLE</h1>
                        <img src="/cyborg_ticker.png" alt="$cyborg" className='w-[75%] md:w-[20%]' />
                    </div>
                    <button
                        onClick={handleStart}
                        className="px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-lg shadow-lg hover:scale-105 transition"
                    >
                        ▶ Welcome Soldier
                    </button>
                </div>
            )}

            {hasStarted && (
                <div
                    className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted={false}
                        playsInline
                        onEnded={handleVideoEnd}
                        controls={false}
                    />
                </div>
            )}
        </>
    );
}

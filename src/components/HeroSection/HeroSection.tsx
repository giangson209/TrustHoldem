import React, { useState, useEffect } from 'react';

const images = [
    '/images/slide-1.png',
    '/images/slide-2.png',
    '/images/slide-3.png',
];

const HeroSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="slideHero relative w-full opacity-0 slide-up slide-up-2">
            <div className="absolute top-0 left-[-24px] 2xl:left-[-32px] 3xl:left-[-36px] 4xl:left-[-47px] h-full flex items-center z-4 pt-10 pointer-events-none">
                <img src="/images/heart-slide.png" className="w-12 2xl:w-16 3xl:w-[72px] 4xl:w-[94px]" alt=""/>
            </div>
            <img src="/images/slide-1.png" className="w-full opacity-0" alt=""/>
            <div className="absolute top-0 left-0 w-full h-full z-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 w-full h-full transition-opacity duration-500"
                        style={{
                            opacity: currentIndex === index ? 1 : 0,
                        }}
                    >
                        <img
                            src={image}
                            className=""
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
import React, { useEffect, useState } from 'react';

interface FlipUnitProps {
    digit: number;
    shuffle?: boolean;
}

const FlipUnit: React.FC<FlipUnitProps> = ({ digit, shuffle }) => {
    const [currentDigit, setCurrentDigit] = useState(digit);
    const [previousDigit, setPreviousDigit] = useState(digit);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (digit !== currentDigit) {
            setPreviousDigit(currentDigit);
            setCurrentDigit(digit);
            setIsFlipping(true);

            const timer = setTimeout(() => {
                setIsFlipping(false);
            }, 600); 

            return () => clearTimeout(timer);
        }
    }, [digit, currentDigit]);

    return (
        <div className={'flip-unitContainer'}>
            <div className={`flip-upperCard ${isFlipping ? 'flip-animation' : ''}`}>
                <span>{currentDigit}</span>
            </div>
            <div className={`flip-lowerCard ${isFlipping ? 'flip-animation' : ''}`}>
                <span>{previousDigit}</span>
            </div>
            <div className={`flip-flipCard first ${isFlipping ? 'flip-animation' : ''}`}>
                <span>{previousDigit}</span>
            </div>
            <div className={`flip-flipCard second ${isFlipping ? 'flip-animation' : ''}`}>
                <span>{currentDigit}</span>
            </div>
        </div>
    );
};

interface FlipClockProps {
    targetTime: Date; 
}

const FlipClock: React.FC<FlipClockProps> = ({ targetTime }) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetTime.getTime() - now.getTime();

            if (difference <= 0) {
                // Timer finished
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            } else {
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    const formatDigit = (num: number) => {
        return num < 10 ? `0${num}` : `${num}`;
    };

    return (
        <div className='flip-clock-container'>
            <div className="flip-group">
                <FlipUnit digit={parseInt(formatDigit(timeLeft.hours)[0])} />
                <FlipUnit digit={parseInt(formatDigit(timeLeft.hours)[1])} />
            </div>
            <span className="flip-separator">:</span>
            <div className="flip-group">
                <FlipUnit digit={parseInt(formatDigit(timeLeft.minutes)[0])} />
                <FlipUnit digit={parseInt(formatDigit(timeLeft.minutes)[1])} />
            </div>
            <span className="flip-separator">:</span>
            <div className="flip-group">
                <FlipUnit digit={parseInt(formatDigit(timeLeft.seconds)[0])} />
                <FlipUnit digit={parseInt(formatDigit(timeLeft.seconds)[1])} />
            </div>
        </div>
    );
};

export default FlipClock;

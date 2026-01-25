import React, { useEffect, useState } from 'react';

interface CountdownProps {
    targetTime: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetTime }) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetTime.getTime() - now.getTime();

            if (difference <= 0) {
                return { hours: 0, minutes: 0, seconds: 0 };
            }

            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return { hours, minutes, seconds };
        };

        setTimeLeft(calculateTimeLeft());

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    const formatDigit = (num: number) => {
        return num < 10 ? `0${num}` : `${num}`;
    };

    return (
        <span>
            {formatDigit(timeLeft.hours)}:{formatDigit(timeLeft.minutes)}:{formatDigit(timeLeft.seconds)}
        </span>
    );
};

export default Countdown;

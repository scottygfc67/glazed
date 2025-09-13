'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
}

export default function CountdownTimer({ initialMinutes = 5 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mb-8 text-center">
      <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
        <p className="text-lg font-medium text-gray-800">
          Special offer expires in:{' '}
          <span className="text-blue-600 font-bold">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </p>
      </div>
    </div>
  );
}

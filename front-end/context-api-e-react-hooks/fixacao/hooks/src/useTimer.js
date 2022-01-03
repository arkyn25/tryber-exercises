import { useState, useEffect } from "react";

const useTimer = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const MIN = 1;
  const MAX = 100;
  const TEN = 10000;

  useEffect(() => {
    const intervalTimer = setInterval(() => {
    setRandomNumber(Math.round(Math.random() * (MAX - MIN) + MIN));      
    }, TEN);

    return () => {
      clearInterval(intervalTimer)
    };
  }, [randomNumber]);

  const THREE  = 3;
  const FIVE = 5;
  const FOUR_SECONDS = 4000;
  const mutiple = randomNumber && (randomNumber % THREE === 0 || randomNumber % FIVE === 0);

  useEffect(() => {
    if (mutiple) {
      setTimeout(() => {
        setRandomNumber(null);
      }, FOUR_SECONDS)
    }
  }, [randomNumber, mutiple]);

  return {
    randomNumber,
    mutiple,
  };
};

export default useTimer;
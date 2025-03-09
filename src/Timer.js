import React, { useState } from 'react';

const Timer = () => {
    const [eventName,setEventName] = useState("Inhale");//inhale, exhale...
    const [eventChange, setEventChange] = useState(false);//if the event name has changed
    const [countdownStarted, setcountDownStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        if (countdownStarted || eventChange) {
          const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const eventTime = currentTime + 4000;
            let remainingTime = eventTime - currentTime;

            if (remainingTime <= 0) {
                remainingTime = 0;
                clearInterval(countdownInterval);
                setEventChange(true);
                if(eventName == "Inhale"){
                    eventName = "Hold";
                }
                if(eventName == "Hold1"){
                    eventName = "Exhale";
                }
                if(eventName == "Exhale"){
                    eventName = "Hold";
                }
                if(eventName == "Hold2"){
                    eventName = "Hold";
                }
              }
              setTimeRemaining(remainingTime);
            }, 1000);
            return () => clearInterval(countdownInterval);
    }
}, [countdownStarted, timeRemaining]);

const handleSetCountdown = () => {
    setCountdownStarted(true);
};
const handleStopCountdown = () => {
    setCountdownStarted(false);
    setTimeRemaining(0);
  };
  return (
    <div className="timer-container">
    </div>
  );
};

export default Timer;
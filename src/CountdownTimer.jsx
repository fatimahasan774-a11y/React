import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    // Stop when timer reaches 0
    if (time === 0) {
      setIsRunning(false);
    }

    // Cleanup
    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const handleSetTime = () => {
    const number = Number(inputTime);

    if (number > 0) {
      setTime(number);
    }
  };

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(Number(inputTime) || 0);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        disabled={isRunning}
      />

      <button onClick={handleSetTime} disabled={isRunning}>
        Set Time
      </button>

      <h2>{time} seconds</h2>

      <button onClick={handleStart} disabled={isRunning || time === 0}>
        Start
      </button>

      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default CountdownTimer;

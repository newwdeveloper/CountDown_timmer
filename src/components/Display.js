import { useState, useRef, useEffect } from "react";

const Display = () => {
  const [target, setTarget] = useState(""); // Target date and time
  const [timeLeft, setTimeLeft] = useState(""); // Formatted time left
  const timerRef = useRef(null); // Reference for the interval timer

  const calculateTimeLeft = () => {
    const targetTime = new Date(target).getTime();
    const currentTime = new Date().getTime();
    const diff = targetTime - currentTime;

    if (diff <= 0) {
      clearInterval(timerRef.current); // Stop the timer
      setTimeLeft("Time's up!"); // Update to "Time's up!"
    } else {
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeLeft(
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
      );
    }
  };

  useEffect(() => {
    if (!target) return;

    // Clear any existing timer when a new target is set
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start a new timer
    timerRef.current = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount or target change
    return () => clearInterval(timerRef.current);
  }, [target]);

  const handleReset = () => {
    setTarget(""); // Reset the target time and clear the input field
    setTimeLeft(""); // Clear the countdown display
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear the timer
    }
  };

  return (
    <div className="w-full mt-10 flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="w-6/12 bg-white shadow-lg rounded-lg p-8">
        <h2 className="font-bold text-3xl text-gray-800 mb-6 text-center">
          Timer Countdown
        </h2>
        <input
          className="border-2 p-4 w-full bg-gray-200 rounded-lg text-black mb-6"
          type="datetime-local"
          value={target} // Bind the input value to the `target` state
          onChange={(e) => setTarget(e.target.value)}
        />
        <div className="mt-4">
          <p className="text-2xl text-blue-600 font-semibold">
            {timeLeft || "Set a target time."}
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={handleReset}
            className="w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 active:bg-green-700"
          >
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;

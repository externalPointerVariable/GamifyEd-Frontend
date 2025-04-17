import React, { useState } from "react";

const Slider = () => {
  const [duration, setDuration] = useState(10);

  return (
    <div className="w-full px-4">
      <label
        htmlFor="duration"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Duration: {duration} minutes
      </label>
      <input
        id="duration"
        type="range"
        min={5}
        max={30}
        step={5}
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export  {Slider};

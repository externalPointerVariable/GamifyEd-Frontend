import React from "react";

export default function ExperienceBar({
  progress,
  width = 300,
  height = 20,
  className = "",
}) {
  const progressWidth = Math.min(Math.max(progress, 0), 100); // clamp 0-100

  return (
    <div
      className={`relative rounded-full overflow-hidden ${className}`}
      style={{ width, height }}
      role="progressbar"
      aria-valuenow={progressWidth}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Experience progress: ${progressWidth}%`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 opacity-40" />

      {/* Progress fill */}
      <div
        className="absolute inset-y-0 left-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 ease-out"
        style={{ width: `${progressWidth}%` }}
      />
    </div>
  );
}

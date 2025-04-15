import React from "react";

export function Progress({ value = 0, max = 100, className = "", ...props }) {
  const percentage = (value / max) * 100;

  return (
    <div
      className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 ${className}`}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-indigo-600 transition-all dark:bg-indigo-500"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  );
}

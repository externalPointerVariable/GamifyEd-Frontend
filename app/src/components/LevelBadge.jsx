import React from "react";

export default function LevelBadge({ level, className = "" }) {
  // Get color based on level
  const getLevelColor = () => {
    if (level < 5) return "bg-gradient-to-r from-blue-500 to-cyan-400";
    if (level < 10) return "bg-gradient-to-r from-green-500 to-emerald-400";
    if (level < 15) return "bg-gradient-to-r from-yellow-500 to-amber-400";
    if (level < 20) return "bg-gradient-to-r from-orange-500 to-amber-400";
    if (level < 25) return "bg-gradient-to-r from-red-500 to-rose-400";
    return "bg-gradient-to-r from-purple-600 to-indigo-400";
  };

  return (
    <div className={`relative ${className}`}>
      <span
        className={`
          text-white font-bold px-3 py-1 text-sm rounded-full
          ${getLevelColor()}
          shadow-md transition-all duration-300
        `}
      >
        Level {level}
      </span>
    </div>
  );
}

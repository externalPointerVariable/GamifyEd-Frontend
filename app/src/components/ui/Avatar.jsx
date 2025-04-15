import React from "react";

export function Avatar({ children, className = "", ...props }) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ className = "", alt = "User avatar", ...props }) {
  return (
    <img
      className={`aspect-square h-full w-full object-cover ${className}`}
      alt={alt}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className = "", ...props }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

import React, { forwardRef } from "react";

export const Select = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus:ring-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";

export function SelectItem({ children, className = "", ...props }) {
  return (
    <option
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-indigo-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-indigo-900 ${className}`}
      {...props}
    >
      {children}
    </option>
  );
}

export function SelectContent({ children, className = "", ...props }) {
  return (
    <div
      className={`z-50 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-gray-800 dark:bg-gray-950 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectTrigger({ children, className = "", ...props }) {
  return (
    <div
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus:ring-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectValue({ children, className = "", ...props }) {
  return (
    <span
      className={`text-sm text-gray-900 dark:text-gray-100 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
export function SelectLabel({ children, className = "", ...props }) { 
  return (
    <span
      className={`text-sm text-gray-900 dark:text-gray-100 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
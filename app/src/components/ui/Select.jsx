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

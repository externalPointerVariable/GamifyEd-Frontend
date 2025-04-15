import React from "react";

export function Badge({ variant = "default", className = "", children, ...props }) {
  let variantClasses = "";

  switch (variant) {
    case "default":
      variantClasses = "bg-indigo-600 text-white hover:bg-indigo-700";
      break;
    case "secondary":
      variantClasses = "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100";
      break;
    case "destructive":
      variantClasses = "bg-red-600 text-white hover:bg-red-700";
      break;
    case "outline":
      variantClasses = "text-gray-900 border border-gray-200 hover:bg-gray-100 dark:text-gray-100 dark:border-gray-800 dark:hover:bg-gray-800";
      break;
    case "success":
      variantClasses = "bg-green-600 text-white hover:bg-green-700";
      break;
    default:
      variantClasses = "bg-indigo-600 text-white hover:bg-indigo-700";
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

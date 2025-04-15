import React from "react";

export function Button({
  variant = "default",
  size = "default",
  asChild = false,
  className = "",
  children,
  ...props
}) {
  // Base styles
  let variantClasses = "";
  let sizeClasses = "";

  // Variant styles
  switch (variant) {
    case "default":
      variantClasses =
        "bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent";
      break;
    case "destructive":
      variantClasses =
        "bg-red-600 text-white hover:bg-red-700 border border-transparent";
      break;
    case "outline":
      variantClasses =
        "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950";
      break;
    case "secondary":
      variantClasses =
        "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border border-transparent dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent";
      break;
    default:
      variantClasses =
        "bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent";
  }

  // Size styles
  switch (size) {
    case "default":
      sizeClasses = "h-10 px-4 py-2";
      break;
    case "sm":
      sizeClasses = "h-8 px-3 text-sm";
      break;
    case "lg":
      sizeClasses = "h-12 px-6 text-lg";
      break;
    case "icon":
      sizeClasses = "h-10 w-10 p-0";
      break;
    default:
      sizeClasses = "h-10 px-4 py-2";
  }

  const buttonClasses = `inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${sizeClasses} ${className}`;

  if (asChild) {
    return (
      <span className={buttonClasses} {...props}>
        {children}
      </span>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

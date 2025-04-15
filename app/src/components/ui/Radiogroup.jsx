import React, { createContext, useContext } from "react";

// Context for radio group
const RadioGroupContext = createContext({
  value: "",
  onValueChange: () => {},
});

export function RadioGroup({ value, onValueChange, children, className = "", ...props }) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={`space-y-2 ${className}`} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({ value, className = "", ...props }) {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroupItem must be used within a RadioGroup component");
  }

  const { value: groupValue, onValueChange } = context;

  return (
    <input
      type="radio"
      className={`h-4 w-4 cursor-pointer rounded-full border border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-indigo-500 dark:focus:ring-indigo-500 ${className}`}
      checked={value === groupValue}
      onChange={() => onValueChange(value)}
      value={value}
      {...props}
    />
  );
}

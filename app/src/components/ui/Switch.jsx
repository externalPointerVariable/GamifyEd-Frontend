import React, { useState, useEffect } from "react";

export const Switch = ({ id, checked, defaultChecked, onChange, ...props }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isChecked;
    if (onChange) onChange(newValue);
    if (checked === undefined) setIsChecked(newValue);
  };

  return (
    <button
      id={id}
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
        isChecked ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
      }`}
      {...props}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          isChecked ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
};

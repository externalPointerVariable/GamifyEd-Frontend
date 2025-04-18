import React from "react";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef(
  ({ checked, onChange, className = "", disabled = false, ...props }, ref) => {
    return (
      <label
        className={`inline-flex items-center gap-2 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <div
          ref={ref}
          onClick={() => !disabled && onChange?.(!checked)}
          className={`
          h-4 w-4 shrink-0 rounded-sm border border-primary flex items-center justify-center
          ring-offset-background transition-colors
          ${checked ? "bg-primary text-primary-foreground" : "bg-background"}
          ${
            disabled
              ? ""
              : "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          }
          ${className}
        `}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && !disabled) {
              e.preventDefault();
              onChange?.(!checked);
            }
          }}
          {...props}
        >
          {checked && <Check className="h-3.5 w-3.5 text-white" />}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };

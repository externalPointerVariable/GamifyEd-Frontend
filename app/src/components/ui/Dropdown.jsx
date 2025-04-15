import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

// Context for dropdown menu
const DropdownMenuContext = createContext(null);

export function DropdownMenu({ open, onOpenChange, children }) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = open !== undefined ? open : internalOpen;
  const handleOpenChange = onOpenChange || setInternalOpen;

  return (
    <DropdownMenuContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ asChild = false, children, className = "", ...props }) {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenuTrigger must be used within a DropdownMenu component");
  }

  const { open, onOpenChange } = context;

  if (asChild) {
    const child = children;
    return React.cloneElement(child, {
      onClick: (e) => {
        child.props.onClick?.(e);
        onOpenChange(!open);
      },
      "aria-expanded": open,
    });
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      aria-expanded={open}
      onClick={() => onOpenChange(!open)}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({ align = "end", children, className = "", ...props }) {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenuContent must be used within a DropdownMenu component");
  }

  const { open, onOpenChange } = context;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  let alignmentClass = "";
  switch (align) {
    case "start":
      alignmentClass = "origin-top-left left-0";
      break;
    case "center":
      alignmentClass = "origin-top";
      break;
    case "end":
    default:
      alignmentClass = "origin-top-right right-0";
  }

  return (
    <div
      ref={dropdownRef}
      className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 ${alignmentClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, className = "", ...props }) {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenuItem must be used within a DropdownMenu component");
  }

  const { onOpenChange } = context;

  return (
    <button
      type="button"
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 w-full text-left ${className}`}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </button>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../features/themeSlice";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    dispatch(setTheme(isDark ? "dark" : "light"));
  }, [isDark, dispatch]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 transition-all dark:bg-amber-500"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </button>
  );
}
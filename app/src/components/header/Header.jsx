import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Bell, MessageSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (user.role === "student") {
      navigate("/student/dashboard");
    } else if (user.role === "teacher") {
      navigate("/teacher/dashboard");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900 backdrop-blur-md dark:bg-black">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-indigo-500"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="text-gray-100">GamifyEd-AI</span>
        </Link>

        {/* Navigation / Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5 text-white hover:text-indigo-300 dark:hover:text-indigo-400" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5 text-white hover:text-indigo-300 dark:hover:text-indigo-400" />
                </Button>
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Teacher"
                    onClick={handleNavigation}
                  />
                  <AvatarFallback>TD</AvatarFallback>
                </Avatar>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

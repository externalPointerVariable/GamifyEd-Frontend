import React from "react";
import {
  Users,
  User,
  BookOpen,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/authSlice";

// Custom hook for logout functionality.
function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    dispatch(clearUser());
    navigate("/login");
  };
}

// Teacher sidebar links defined outside the component to avoid unnecessary recreations.
const teacherLinks = [
  {
    to: "/teacher/dashboard",
    label: "Dashboard",
    icon: <User className="h-4 w-4" />,
  },
  {
    to: "/teacher/classes",
    label: "Classes",
    icon: <Users className="h-4 w-4" />,
  },
  {
    to: "/teacher/quizzes",
    label: "Test Quizzes",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    to: "/teacher/podcasts",
    label: "AI Podcasts",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    to: "/teacher/calendar",
    label: "Calendar",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    to: "/teacher/settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    to: "/login",
    label: "Logout",
    icon: <LogOut className="h-4 w-4" />,
  },
];

function TeacherSidebar() {
  const location = useLocation();
  const logout = useLogout();

  return (
    <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
      <nav className="grid items-start gap-2">
        {teacherLinks.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              onClick={to === "/login" ? useLogout : undefined}
            >
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                {icon}
                {label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default TeacherSidebar;

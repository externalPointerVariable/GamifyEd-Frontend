import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Users,
} from "lucide-react";

const links = [
  { to: "/student/dashboard", label: "Dashboard", icon: <User className="h-4 w-4" /> },
  { to: "/student/classrooms", label: "Classrooms", icon: <Users className="h-4 w-4" /> },
  { to: "/student/quizzes", label: "Practice Quizzes", icon: <BookOpen className="h-4 w-4" /> },
  { to: "/student/podcasts", label: "AI Podcasts", icon: <MessageSquare className="h-4 w-4" /> },
  { to: "/student/achievements", label: "Achievements", icon: <Trophy className="h-4 w-4" /> },
  { to: "/student/calendar", label: "Calendar", icon: <Calendar className="h-4 w-4" /> },
  { to: "/student/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  { to: "/login", label: "Logout", icon: <LogOut className="h-4 w-4" /> },
];

function StudentSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
      <nav className="grid items-start gap-2">
        {links.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;

          return (
            <Link key={to} to={to}>
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

export default StudentSidebar;

import React from "react";
import {Users, User, BookOpen, MessageSquare, Calendar, Settings, LogOut} from "lucide-react";
import {Link} from 'react-router-dom';
function TeacherSidebar() {
  return (
    <>
      <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
        <nav className="grid items-start gap-2">
          <Link to="/teacher/dashboard">
            <Button variant="secondary" className="w-full justify-start gap-2">
              <User className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/teacher/classes">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Classes
            </Button>
          </Link>
          <Link to="/teacher/quizzes">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BookOpen className="h-4 w-4" />
              Test Quizzes
            </Button>
          </Link>
          <Link to="/teacher/podcasts">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare className="h-4 w-4" />
              AI Podcasts
            </Button>
          </Link>
          <Link to="/teacher/calendar">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
          </Link>
          <Link to="/teacher/settings">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default TeacherSidebar;

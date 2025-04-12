import { lazy } from "react";

// General Pages
const Home  = lazy(() => import("./Home.jsx"));
const About = lazy(() => import("./About.jsx"));
const Login = lazy(() => import("./Login.jsx"));
const Register = lazy(() => import("./Register.jsx"));
const Privacy = lazy(() => import("./Privacy.jsx"));
const Terms = lazy(() => import("./Terms.jsx"));
const Error = lazy(() => import("./Error.jsx"));

// Teacher Pages
const TeacherCalendar = lazy(() => import("./teacher/Calendar.jsx"));
const TeacherPodcasts = lazy(() => import("./teacher/Podcasts.jsx"));
const TeacherDashboard = lazy(() => import("./teacher/Dashboard.jsx"));
const TeacherSettings = lazy(() => import("./teacher/Settings.jsx"));
const QuizzesLoadingPage = lazy(() =>
  import("./teacher/quizzes/QuizzesLoadingPage.jsx")
);
const QuizzesPage = lazy(() => import("./teacher/quizzes/QuizzesPage.jsx"));
const ClassesLoadingPage = lazy(() =>
  import("./teacher/classes/ClassesLoadingPage.jsx")
);
const ClassesPage = lazy(() => import("./teacher/classes/ClassesPage.jsx"));
const ClassDetailLoadingPage = lazy(() =>
  import("./teacher/classes/id/ClassDetailLoadingPage.jsx")
);
const ClassDetailPage = lazy(() =>
  import("./teacher/classes/id/ClassDetailPage.jsx")
);

// Student Pages
const Calendar = lazy(() => import("./student/Calendar.jsx"));
const Podcasts = lazy(() => import("./student/Podcasts.jsx"));
const Dashboard = lazy(() => import("./student/Dashboard.jsx"));
const Settings = lazy(() => import("./student/Settings.jsx"));
const Quizzes = lazy(() => import("./student/Quizzes.jsx"));
const Achievements = lazy(() => import("./student/Achievements.jsx"));
const ClassroomLoading = lazy(() =>
  import("./student/classrooms/ClassroomLoading.jsx")
);
const ClassroomPage = lazy(() =>
  import("./student/classrooms/ClassroomPage.jsx")
);
const TestLoading = lazy(() =>
  import("./student/classrooms/test/TestLoading.jsx")
);
const TestPage = lazy(() => import("./student/classrooms/test/TestPage.jsx"));
const TestDetailsLoading = lazy(() =>
  import("./student/classrooms/test/testDetails/TestDetailsLoading.jsx")
);
const TestDetailsPage = lazy(() =>
  import("./student/classrooms/test/testDetails/TestDetailsPage.jsx")
);

export {
  Home,
  About,
  Login,
  Register,
  Privacy,
  Terms,
  Error,
  TeacherCalendar,
  TeacherPodcasts,
  TeacherDashboard,
  TeacherSettings,
  QuizzesLoadingPage,
  QuizzesPage,
  ClassesLoadingPage,
  ClassesPage,
  Calendar,
  Podcasts,
  Dashboard,
  Settings,
  Quizzes,
  Achievements,
  ClassroomLoading,
  ClassDetailLoadingPage,
  ClassDetailPage,
  ClassroomPage,
  TestLoading,
  TestPage,
  TestDetailsLoading,
  TestDetailsPage,
};

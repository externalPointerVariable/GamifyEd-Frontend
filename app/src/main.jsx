import { createRoot } from "react-dom/client";
import { SuspenseWrapper } from "./components/index.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import {
  Home,
  About,
  Login,
  PasswordReset,
  PasswordResetConfirm,
  Register,
  Privacy,
  Terms,
  Error,
  // Teacher
  TeacherDashboard,
  TeacherCalendar,
  TeacherSettings,
  TeacherPodcasts,
  QuizzesPage,
  ClassesPage,
  ClassDetailPage,
  GenerateQuizPage,
  // Student
  Dashboard,
  Calendar,
  Settings,
  Podcasts,
  Quizzes,
  QuizStart,
  Achievements,
  ClassroomPage,
  TestPage,
} from "./pages/index.js";

const suspense = (Component) => (
  <SuspenseWrapper>{<Component />}</SuspenseWrapper>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: suspense(App),
    errorElement: suspense(Error),
    children: [
      { path: "", element: suspense(Home) },
      { path: "about", element: suspense(About) },
      { path: "login", element: suspense(Login) },
      { path: "register", element: suspense(Register) },
      { path: "privacy", element: suspense(Privacy) },
      { path: "terms", element: suspense(Terms) },
      { path: "password-reset", element: suspense(PasswordReset) },
      {
        path: "password-reset-confirm",
        element: suspense(PasswordResetConfirm),
      },

      // Student
      { path: "student/dashboard", element: suspense(Dashboard) },
      { path: "student/calendar", element: suspense(Calendar) },
      { path: "student/settings", element: suspense(Settings) },
      { path: "student/podcasts", element: suspense(Podcasts) },
      { path: "student/quizzes", element: suspense(Quizzes) },
      { path: "student/quiz", element: suspense(QuizStart) },
      { path: "student/achievements", element: suspense(Achievements) },
      { path: "student/classrooms", element: suspense(ClassroomPage) },
      { path: "student/classrooms/test", element: suspense(TestPage) },
      // Teacher
      { path: "teacher/dashboard", element: suspense(TeacherDashboard) },
      { path: "teacher/calendar", element: suspense(TeacherCalendar) },
      { path: "teacher/settings", element: suspense(TeacherSettings) },
      { path: "teacher/podcasts", element: suspense(TeacherPodcasts) },
      { path: "teacher/quizzes", element: suspense(QuizzesPage) },
      { path: "teacher/quizzes/generate", element: suspense(GenerateQuizPage) },
      { path: "teacher/classes", element: suspense(ClassesPage) },

      {
        path: "teacher/classes/:id",
        children: [{ path: "", element: suspense(ClassDetailPage) }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

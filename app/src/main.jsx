import { StrictMode } from "react";
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
  QuizzesLoadingPage,
  QuizzesPage,
  ClassesLoadingPage,
  ClassesPage,
  ClassDetailLoadingPage,
  ClassDetailPage,
  // Student
  Dashboard,
  Calendar,
  Settings,
  Podcasts,
  Quizzes,
  Achievements,
  ClassroomLoading,
  ClassroomPage,
  TestLoading,
  TestPage,
  TestDetailsLoading,
  TestDetailsPage,
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
      { path: "student/achievements", element: suspense(Achievements) },
      {
        path: "student/classrooms/loading",
        element: suspense(ClassroomLoading),
      },
      { path: "student/classrooms/page", element: suspense(ClassroomPage) },
      {
        path: "student/classrooms/test/loading",
        element: suspense(TestLoading),
      },
      { path: "student/classrooms/test/page", element: suspense(TestPage) },
      {
        path: "student/classrooms/test/details/loading",
        element: suspense(TestDetailsLoading),
      },
      {
        path: "student/classrooms/test/details/page",
        element: suspense(TestDetailsPage),
      },

      // Teacher
      { path: "teacher/dashboard", element: suspense(TeacherDashboard) },
      { path: "teacher/calendar", element: suspense(TeacherCalendar) },
      { path: "teacher/settings", element: suspense(TeacherSettings) },
      { path: "teacher/podcasts", element: suspense(TeacherPodcasts) },
      {
        path: "teacher/quizzes/loading",
        element: suspense(QuizzesLoadingPage),
      },
      { path: "teacher/quizzes/page", element: suspense(QuizzesPage) },
      {
        path: "teacher/classes/loading",
        element: suspense(ClassesLoadingPage),
      },
      { path: "teacher/classes/page", element: suspense(ClassesPage) },

      {
        path: "teacher/classes/:id",
        children: [
          { path: "", element: suspense(ClassDetailPage) },
          { path: "loading", element: suspense(ClassDetailLoadingPage) },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);

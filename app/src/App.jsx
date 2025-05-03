import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom";
import config from "./config/config";
import { setAccess } from "./features/authSlice";

function getCookieValue(name) {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, ...v] = cookie.split("=");
    acc[key] = v.join("=");
    return acc;
  }, {});
  return cookies[name] || null;
}

function App() {
  const htmlTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(htmlTheme);
  }, [htmlTheme]);

  useEffect(() => {

    const rawData = getCookieValue("user");
    if (!rawData) {
      console.warn("User cookie not found. Ensure the cookie is set with the 'user' key.");
      return;
    }

    let data = {};
    try {
      data = JSON.parse(decodeURIComponent(rawData));
      console.log("Data from cookie:", data);
    } catch (error) {
      console.error("Error parsing cookie JSON:", error);
      return;
    }

    const refreshToken = async () => {
      try {
        const response = await fetch(`${config.backendEndpoint}/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
        });
        const resData = await response.json();
        if (!response.ok) {
          throw new Error(resData.message || "Token refresh failed");
        }
        dispatch(setAccess(resData.access));
      } catch (error) {
        console.error("Error in token refresh:", error);
      }
    };
    refreshToken();

    const intervalId = setInterval(refreshToken, 1000 * 60 * 4);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
import { useDispatch } from "react-redux";
import config from "../config/config";

function getCookieValue(name) {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, ...v] = cookie.split("=");
    acc[key] = v.join("=");
    return acc;
  }, {});
  return cookies[name] || null;
}

const useTokenRefresh = () => {
  const rawData = getCookieValue("user");
  let data = {};

  if (rawData) {
    try {
      data = JSON.parse(decodeURIComponent(rawData));
      console.log("Data from cookie:", data);
    } catch (error) {
      console.error("Error parsing cookie JSON:", error);
    }
  } else {
    console.warn(
      "User cookie not found. Ensure the cookie is set with the 'user' key."
    );
  }

  const dispatch = useDispatch();

  const tokenRefresh = async () => {
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
      console.log("Token refreshed successfully", resData.access);
    } catch (error) {
      console.error("Token Refresh Error:", error.message);
    }
  };

  return { tokenRefresh };
};

export default useTokenRefresh;

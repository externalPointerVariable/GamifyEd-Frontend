import config from "../config/config";
import { useSelector, useDispatch } from "react-redux";

const registerUser = async ({
  username,
  firstName,
  lastName,
  email,
  password,
  userType,
  institute,
}) => {
  try {
    const response = await fetch(`${config.backendEndpoint}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        firstName,
        lastName,
        email,
        password,
        role: userType,
        institution: institute,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
};

export default registerUser;

const loginUser = async ({ username, password }) => {
  document.cookie = `user=${encodeURIComponent(
    JSON.stringify({ username, password })
  )}; path=/;`;

  try {
    const response = await fetch(`${config.backendEndpoint}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

const getUser = () => {};

export { registerUser, loginUser, getUser };

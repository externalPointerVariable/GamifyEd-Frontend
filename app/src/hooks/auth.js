import config from "../config/config";

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
    const response = await fetch(
      `${config.backendEndpoint}/register`,
      {
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
          userType,
          institute,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Registration failed");

    return data;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
};

const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch("https://your-api-domain.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Login failed");

    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

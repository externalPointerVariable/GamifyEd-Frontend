import config from "../config/config";

const registerUser = async ({
  username,
  firstName,
  lastName,
  email,
  password,
  userType, // this will be mapped to `role`
  institute, // this will be mapped to `institution`
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
        role: userType, // backend expects 'role'
        institution: institute, // backend expects 'institution'
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
    console.log("Cookies: ", document.cookie);

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

// const resetUserPassword

export { registerUser, loginUser };

import config from "../config/config";

const resetPassword = async (email) => {
  const response = await fetch(
    `${config.backendEndpoint}/api/password-reset/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Password reset failed");
  } else {
    return data;
  }
};

const resetPasswordConfirmation = async ({
  resetURL,
  password,
  confirmPassword,
}) => {
  const response = await fetch(resetURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      confirm_password: confirmPassword,
    }),
  });
  const data = response.json();
    if (!response.ok) {
        throw new Error(data.message || "Password reset failed");
    }else {
        return data;
    }
};

export { resetPassword, resetPasswordConfirmation };
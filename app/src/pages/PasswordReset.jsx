import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";

export default function PasswordReset() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email.includes("@") && email.includes(".")) {
        setIsSubmitted(true);
      } else {
        setError("Email address not found. Please check and try again.");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
    navigate("/password-reset-confirm");
  };

  return (
    <div className="container flex min-h-screen w-full flex-col items-center justify-center px-4">
      <BackHomeLink />
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="p-6">
            <Header />
            {!isSubmitted ? (
              <ResetForm
                email={email}
                setEmail={setEmail}
                error={error}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
              />
            ) : (
              <SuccessMessage onRetry={() => setIsSubmitted(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
    </div>
  );
}

function ResetForm({ email, setEmail, error, isSubmitting, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-500 dark:bg-red-950/50 dark:text-red-400">
          {error}
        </div>
      )}

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Checking..." : "Verify Email"}
      </Button>

      <BackToLoginLink />
    </form>
  );
}

function SuccessMessage({ onRetry }) {
  return (
    <div className="mt-6 space-y-4">
      <div className="rounded-md bg-green-50 p-4 text-sm text-green-600 dark:bg-green-950/50 dark:text-green-400">
        <div className="flex items-start gap-2">
          <CheckIcon />
          <p>
            Password reset link sent! Please check your email and follow the
            instructions to reset your password.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Didn't receive the email? Check your spam folder or
        </p>
        <Button variant="outline" onClick={onRetry} className="mx-auto mt-2">
          Try again
        </Button>
      </div>

      <BackToLoginLink />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mt-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function BackHomeLink() {
  return (
    <Link
      to="/"
      className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 font-bold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
      <span>GamifyEd-AI</span>
    </Link>
  );
}

function BackToLoginLink() {
  return (
    <div className="text-center text-sm">
      <Link
        to="/login"
        className="text-indigo-600 hover:underline dark:text-indigo-400"
      >
        Back to login
      </Link>
    </div>
  );
}

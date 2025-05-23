import React, { useEffect, useState } from "react";
import { listCollege, registerUser } from "../hooks";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { RadioGroup, RadioGroupItem } from "../components/ui/Radiogroup";

export default function Register() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("student");
  const [institute, setInstitute] = useState("");
  const [listColleges, setListColleges] = useState([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function fetchColleges() {
      const colleges = await listCollege();
      setListColleges(colleges);
    }
    fetchColleges();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({
        username,
        firstName,
        lastName,
        email,
        password,
        userType,
        institute,
      });

      console.log("Registration success:", res);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.message);
      alert("Registration failed. Please check your input and try again.");
    }
  };

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <Link
        to="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-primary"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span>GamifyEd-AI</span>
      </Link>

      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your information to create your GamifyEd-AI account
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="John_Doe_934"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="institute">Institute</Label>
              <select
                id="institute"
                className="border rounded-md px-3 py-2 w-sm"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                required
              >
                <option value="">Select an institute</option>
                {listColleges.map((college, idx) => (
                  <option key={idx} value={college}>
                    {college}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <Label>I am a:</Label>
              <RadioGroup
                defaultValue="student"
                value={userType}
                onValueChange={setUserType}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="r-student" />
                  <Label htmlFor="r-student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="r-teacher" />
                  <Label htmlFor="r-teacher">Teacher</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Create Account
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

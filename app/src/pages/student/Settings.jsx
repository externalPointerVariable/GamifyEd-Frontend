import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import StudentSidebar from "../../components/StudentSidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/Avatar";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Upload,
  Save,
} from "lucide-react";
import ThreeBackground from "../../components/ThreeBackground";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Textarea } from "../../components/ui/Textarea";

export default function StudentSettings() {
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  );

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] realtive z-10">
        <StudentSidebar />
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your account</p>
          </div>
          <Card className="backdrop-blur bg-background/80 border-primary/20">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your profile details and public information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profileImage} alt="Profile" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Upload className="h-3.5 w-3.5" />
                    Change Photo
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Student Demo" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="student_demo" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      defaultValue="I'm a student interested in mathematics and science."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}

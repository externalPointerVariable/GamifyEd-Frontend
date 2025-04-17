import { useState } from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/Button ";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/Avatar";
import {
  Bell,
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Users,
  Plus,
  BookOpenCheck,
  Clock,
} from "lucide-react";
import ThreeBackground from "../../../components/ThreeBackground";
import { Badge } from "../../../components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/Tabs";
import { Input } from "../../../components/ui/Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/Dialog";
import { Label } from "../../../components/ui/Label";

export default function ClassroomPage() {
  const [joinCode, setJoinCode] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  // Sample classroom data
  const classrooms = [
    {
      id: 1,
      name: "Math 101",
      teacher: "Mrs. Johnson",
      subject: "Mathematics",
      students: 24,
      avatar: "M",
      color: "bg-blue-500",
      assignments: 3,
      tests: 2,
      upcoming: {
        title: "Algebra Quiz",
        due: "2025-04-02T15:00:00",
        type: "test",
      },
    },
    {
      id: 2,
      name: "Science 202",
      teacher: "Mr. Peterson",
      subject: "Science",
      students: 18,
      avatar: "S",
      color: "bg-green-500",
      assignments: 5,
      tests: 1,
      upcoming: {
        title: "Lab Report: Photosynthesis",
        due: "2025-03-29T23:59:00",
        type: "assignment",
      },
    },
    {
      id: 3,
      name: "History 101",
      teacher: "Dr. Martinez",
      subject: "History",
      students: 22,
      avatar: "H",
      color: "bg-amber-500",
      assignments: 2,
      tests: 0,
      upcoming: null,
    },
  ];

  // Sample assignments and tests
  const assignmentsAndTests = [
    {
      id: 1,
      title: "Algebra Quiz",
      classroom: "Math 101",
      type: "test",
      due: "2025-04-02T15:00:00",
      status: "not_started",
      points: 100,
    },
    {
      id: 2,
      title: "Lab Report: Photosynthesis",
      classroom: "Science 202",
      type: "assignment",
      due: "2025-03-29T23:59:00",
      status: "not_started",
      points: 50,
    },
    {
      id: 3,
      title: "Geometry Homework",
      classroom: "Math 101",
      type: "assignment",
      due: "2025-03-10T23:59:00",
      status: "completed",
      points: 25,
      score: 23,
    },
    {
      id: 4,
      title: "World War II Quiz",
      classroom: "History 101",
      type: "test",
      due: "2025-03-12T14:30:00",
      status: "completed",
      points: 100,
      score: 92,
    },
    {
      id: 5,
      title: "Chemical Reactions Worksheet",
      classroom: "Science 202",
      type: "assignment",
      due: "2025-03-20T23:59:00",
      status: "completed",
      points: 30,
      score: 28,
    },
  ];

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // Calculate time remaining
  const getTimeRemaining = (dateString) => {
    if (!dateString) return "Invalid date";

    const now = new Date();
    const dueDate = new Date(dateString);

    if (isNaN(dueDate.getTime())) return "Invalid date";

    const diffTime = dueDate.getTime() - now.getTime();

    if (diffTime <= 0) return "Past due";

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ${diffHours} hr${
        diffHours > 1 ? "s" : ""
      }`;
    } else {
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      return `${diffHours} hr${diffHours > 1 ? "s" : ""} ${diffMinutes} min${
        diffMinutes > 1 ? "s" : ""
      }`;
    }
  };

  const handleJoinClassroom = () => {
    setIsJoining(true);
    // Simulate API call
    setTimeout(() => {
      setIsJoining(false);
      setJoinCode("");
      // In a real app, you would add the new classroom to the list
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
          <nav className="grid items-start gap-2">
            <Link href="/student/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/student/classrooms">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2"
              >
                <Users className="h-4 w-4" />
                Classrooms
              </Button>
            </Link>
            <Link href="/student/quizzes">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Practice Quizzes
              </Button>
            </Link>
            <Link href="/student/podcasts">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                AI Podcasts
              </Button>
            </Link>
            <Link href="/student/achievements">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Trophy className="h-4 w-4" />
                Achievements
              </Button>
            </Link>
            <Link href="/student/calendar">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Calendar
              </Button>
            </Link>
            <Link href="/student/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </Link>
          </nav>
        </aside>
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Classrooms</h1>
              <p className="text-muted-foreground">
                Join and manage your classroom assignments and tests
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                  <Plus className="h-4 w-4" />
                  Join Classroom
                </Button>
              </DialogTrigger>
              <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <DialogHeader className="relative">
                  <DialogTitle>Join a Classroom</DialogTitle>
                  <DialogDescription>
                    Enter the classroom code provided by your teacher to join.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 relative">
                  <div className="grid gap-2">
                    <Label htmlFor="code">Classroom Code</Label>
                    <Input
                      id="code"
                      placeholder="Enter code (e.g., ABC123)"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>
                <DialogFooter className="relative">
                  <Button
                    onClick={handleJoinClassroom}
                    disabled={!joinCode.trim() || isJoining}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                  >
                    {isJoining ? "Joining..." : "Join Classroom"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="classrooms" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
              <TabsTrigger
                value="classrooms"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                My Classrooms
              </TabsTrigger>
              <TabsTrigger
                value="assignments"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Assignments & Tests
              </TabsTrigger>
            </TabsList>

            <TabsContent value="classrooms" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {classrooms.map((classroom) => (
                  <Card
                    key={classroom.id}
                    className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="pb-2 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="border-2 border-primary/20 transition-all group-hover:border-primary/40">
                            <AvatarFallback
                              className={`${classroom.color} group-hover:opacity-90 transition-opacity`}
                            >
                              {classroom.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {classroom.name}
                            </CardTitle>
                            <CardDescription>
                              {classroom.teacher}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-primary/10 border-primary/20"
                        >
                          {classroom.subject}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex flex-col items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/20 transition-colors">
                          <span className="text-lg font-bold">
                            {classroom.assignments}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Assignments
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/20 transition-colors">
                          <span className="text-lg font-bold">
                            {classroom.tests}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Tests
                          </span>
                        </div>
                      </div>

                      {classroom.upcoming ? (
                        <div className="p-3 rounded-md bg-muted/50 border border-muted group-hover:border-primary/20 transition-colors">
                          <div className="flex items-center gap-2 mb-1">
                            <div
                              className={`rounded-full p-1 ${
                                classroom.upcoming.type === "test"
                                  ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-500 dark:from-blue-500/40 dark:to-cyan-500/40"
                                  : "bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-500 dark:from-amber-500/40 dark:to-orange-500/40"
                              }`}
                            >
                              {classroom.upcoming.type === "test" ? (
                                <BookOpenCheck className="h-3.5 w-3.5" />
                              ) : (
                                <BookOpen className="h-3.5 w-3.5" />
                              )}
                            </div>
                            <span className="text-sm font-medium">
                              Upcoming
                            </span>
                            <div className="ml-auto flex items-center gap-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {getTimeRemaining(classroom.upcoming.due)}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm">{classroom.upcoming.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Due: {formatDate(classroom.upcoming.due)}
                          </p>
                        </div>
                      ) : (
                        <div className="p-3 rounded-md bg-muted/50 border border-muted group-hover:border-primary/20 transition-colors text-center">
                          <p className="text-sm text-muted-foreground">
                            No upcoming assignments or tests
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="relative">
                      <Button
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                        asChild
                      >
                        <Link href={`/student/classrooms/${classroom.id}`}>
                          View Classroom
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="assignments" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/15 dark:to-pink-500/20 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                    Upcoming Assignments & Tests
                  </CardTitle>
                  <CardDescription>Work due in the next 7 days</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {assignmentsAndTests
                      .filter((item) => item.status === "not_started")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-3 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/30 transition-all hover:shadow-md hover:shadow-primary/5 group"
                        >
                          <div
                            className={`rounded-full p-2 mt-0.5 ${
                              item.type === "test"
                                ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-500 dark:from-blue-500/40 dark:to-cyan-500/40"
                                : "bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-500 dark:from-amber-500/40 dark:to-orange-500/40"
                            }`}
                          >
                            {item.type === "test" ? (
                              <BookOpenCheck className="h-4 w-4" />
                            ) : (
                              <BookOpen className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className="bg-primary/10 border-primary/20"
                              >
                                {item.points} pts
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-sm text-muted-foreground">
                                {item.classroom}
                              </p>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                  Due: {formatDate(item.due)}
                                </p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Badge
                                variant="outline"
                                className="bg-primary/10 border-primary/20"
                              >
                                {getTimeRemaining(item.due)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}

                    {assignmentsAndTests.filter(
                      (item) => item.status === "not_started"
                    ).length === 0 && (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="rounded-full bg-muted/70 p-4 mb-4">
                          <BookOpen className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          No upcoming assignments or tests
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 dark:from-green-500/20 dark:via-emerald-500/15 dark:to-teal-500/20 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                    Completed Work
                  </CardTitle>
                  <CardDescription>
                    Recently completed assignments and tests
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {assignmentsAndTests
                      .filter((item) => item.status === "completed")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-3 p-3 rounded-md bg-muted/50 border border-muted hover:border-green-500/30 transition-all hover:shadow-md hover:shadow-green-500/5 group"
                        >
                          <div
                            className={`rounded-full p-2 mt-0.5 ${
                              item.type === "test"
                                ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-500 dark:from-blue-500/40 dark:to-cyan-500/40"
                                : "bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-500 dark:from-amber-500/40 dark:to-orange-500/40"
                            }`}
                          >
                            {item.type === "test" ? (
                              <BookOpenCheck className="h-4 w-4" />
                            ) : (
                              <BookOpen className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium group-hover:text-green-500 transition-colors">
                                {item.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20"
                              >
                                {item.score}/{item.points}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-sm text-muted-foreground">
                                {item.classroom}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Completed: {formatDate(item.due)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    variant="outline"
                    className="w-full border-green-500/20 text-green-600 hover:bg-green-500/10 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                  >
                    View All Completed Work
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "../../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/Card";
import { Input } from "../../../../../components/ui/Input";
import { Label } from "../../../../../components/ui/Label";
import { Textarea } from "../../../../../components/ui/Textarea";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
  ArrowLeft,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Checkbox } from "../../../../../components/ui/Checkbox";
import { Badge } from "../../../../../components/ui/Badge";
import { Switch } from "../../../../../components/ui/Switch";
import ThreeBackground from "../../../../../components/ThreeBackground";

// Mock classroom data
const classroomsData = {
  1: {
    id: 1,
    name: "Math 101",
    teacher: "Mrs. Johnson",
    subject: "Mathematics",
    students: 24,
    avatar: "M",
    color: "bg-blue-500",
  },
  2: {
    id: 2,
    name: "Science 202",
    teacher: "Mr. Peterson",
    subject: "Science",
    students: 18,
    avatar: "S",
    color: "bg-green-500",
  },
};

export default function AssignQuizPage() {
  const params = useParams();
  const router = useNavigate();
  const searchParams = useSearchParams();
  const classroomId = params.id;
  const classroom = classroomsData[classroomId];
  const quizTitle = searchParams.get("title") || "New Quiz";

  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [points, setPoints] = useState("100");
  const [timeLimit, setTimeLimit] = useState("30");
  const [description, setDescription] = useState("");
  const [isAssigning, setIsAssigning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  // Mock student data
  const students = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Smith" },
    { id: "3", name: "Charlie Davis" },
    { id: "4", name: "Diana Miller" },
    { id: "5", name: "Edward Wilson" },
  ];

  const handleAssign = () => {
    setIsAssigning(true);
    // Simulate API call
    setTimeout(() => {
      setIsAssigning(false);
      setIsSuccess(true);
      // Redirect after showing success
      setTimeout(() => {
        router(`/teacher/classes/${classroomId}`);
      }, 2000);
    }, 1500);
  };

  if (!classroom) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Classroom not found</h1>
        <Button asChild className="mt-4">
          <Link href="/teacher/classes">Back to Classes</Link>
        </Button>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20">
        <Card className="w-full max-w-md backdrop-blur bg-background/95 border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 dark:from-green-500/10 dark:via-emerald-500/10 dark:to-teal-500/10 rounded-lg pointer-events-none"></div>
          <CardContent className="pt-6 pb-4 text-center">
            <div className="rounded-full bg-green-500/20 p-3 mx-auto w-fit mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Quiz Assigned!</h2>
            <p className="text-muted-foreground">
              Your quiz has been successfully assigned to {classroom.name}.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <p className="text-sm text-muted-foreground">
              Redirecting to classroom page...
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
          <nav className="grid items-start gap-2">
            <Link href="/teacher/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/teacher/classes">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2"
              >
                <Users className="h-4 w-4" />
                Classes
              </Button>
            </Link>
            <Link href="/teacher/quizzes">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Test Quizzes
              </Button>
            </Link>
            <Link href="/teacher/podcasts">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                AI Podcasts
              </Button>
            </Link>
            <Link href="/teacher/calendar">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Calendar
              </Button>
            </Link>
            <Link href="/teacher/settings">
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10"
              >
                <Link href={`/teacher/classes/${classroomId}`}>
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">Assign Quiz</h1>
              <Badge
                variant="outline"
                className="bg-primary/10 border-primary/20"
              >
                {classroom.name}
              </Badge>
            </div>

            <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-lg pointer-events-none"></div>
              <CardHeader className="relative">
                <CardTitle>Quiz Details</CardTitle>
                <CardDescription>
                  Configure how this quiz will be assigned to students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div className="space-y-2">
                  <Label htmlFor="title">Quiz Title</Label>
                  <Input
                    id="title"
                    defaultValue={quizTitle}
                    className="border-primary/20 focus-visible:ring-primary/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueTime">Due Time</Label>
                    <Input
                      id="dueTime"
                      type="time"
                      value={dueTime}
                      onChange={(e) => setDueTime(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="points">Points</Label>
                    <Input
                      id="points"
                      type="number"
                      value={points}
                      onChange={(e) => setPoints(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                    <Input
                      id="timeLimit"
                      type="number"
                      value={timeLimit}
                      onChange={(e) => setTimeLimit(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Instructions (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Add instructions for your students"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-primary/20 focus-visible:ring-primary/30"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Assignment Options</Label>
                  </div>
                  <div className="space-y-2 rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="shuffle" />
                      <Label htmlFor="shuffle">Shuffle questions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="showResults" defaultChecked />
                      <Label htmlFor="showResults">
                        Show results after submission
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="allowRetake" />
                      <Label htmlFor="allowRetake">
                        Allow multiple attempts
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
              <CardHeader className="relative">
                <CardTitle>Assign To</CardTitle>
                <CardDescription>
                  Select which students will receive this quiz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id="selectAll"
                    checked={selectedStudents.length === students.length}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStudents(students.map((s) => s.id));
                      } else {
                        setSelectedStudents([]);
                      }
                    }}
                  />
                  <Label htmlFor="selectAll">
                    Select all students ({classroom.students})
                  </Label>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto p-2">
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50"
                    >
                      <Checkbox
                        id={`student-${student.id}`}
                        checked={selectedStudents.includes(student.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedStudents([
                              ...selectedStudents,
                              student.id,
                            ]);
                          } else {
                            setSelectedStudents(
                              selectedStudents.filter((id) => id !== student.id)
                            );
                          }
                        }}
                      />
                      <Label htmlFor={`student-${student.id}`}>
                        {student.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4 relative">
                <Button variant="outline" asChild>
                  <Link href={`/teacher/classes/${classroomId}`}>Cancel</Link>
                </Button>
                <Button
                  onClick={handleAssign}
                  disabled={
                    !dueDate ||
                    !dueTime ||
                    selectedStudents.length === 0 ||
                    isAssigning
                  }
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                >
                  {isAssigning ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Assigning...
                    </>
                  ) : (
                    "Assign Quiz"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

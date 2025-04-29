import { Link, useParams } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/Card";
import { Avatar, AvatarFallback } from "../../../../components/ui/Avatar";
import { Badge } from "../../../../components/ui/Badge";
import {
  MessageSquare,
  Users,
  Plus,
  ArrowLeft,
  BookOpenCheck,
  FileText,
  Upload,
  Edit,
  MoreHorizontal,
  Search,
  Download,
} from "lucide-react";
import ThreeBackground from "../../../../components/ThreeBackground";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/Tabs";
import { Input } from "../../../../components/ui/Input";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/Dialog";
import { Label } from "../../../../components/ui/Label";
import { Textarea } from "../../../../components/ui/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/Select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/Dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/Table";
import TeacherSidebar from "../../../../components/TeacherSidebar";

// Mock classroom data
const classroomsData = {
  1: {
    id: 1,
    name: "Math 101",
    teacher: "Mrs. Johnson",
    subject: "Mathematics",
    description:
      "Fundamentals of algebra, geometry, and calculus for beginners.",
    students: 24,
    avatar: "M",
    color: "bg-blue-500",
    code: "MATH101",
    createdAt: "2025-01-15",
    announcements: [
      {
        id: 1,
        title: "Test Next Week",
        content:
          "We will have a test on algebra fundamentals next Tuesday. Please review chapters 3-5.",
        date: "2025-03-25",
      },
      {
        id: 2,
        title: "Office Hours Change",
        content:
          "My office hours will be moved to Thursday 3-5 PM this week only.",
        date: "2025-03-20",
      },
    ],
    assignments: [
      {
        id: 1,
        title: "Algebra Quiz",
        type: "test",
        dueDate: "2025-04-02T15:00:00",
        status: "active",
        points: 100,
        description: "Covers linear equations, polynomials, and factoring.",
        submissions: 15,
      },
      {
        id: 2,
        title: "Geometry Homework",
        type: "assignment",
        dueDate: "2025-03-28T23:59:00",
        status: "active",
        points: 25,
        description: "Problems from Chapter 7, exercises 1-15.",
        submissions: 10,
      },
      {
        id: 3,
        title: "Midterm Exam",
        type: "test",
        dueDate: "2025-03-15T14:30:00",
        status: "completed",
        points: 150,
        description:
          "Comprehensive exam covering all material from the first half of the semester.",
        submissions: 24,
      },
      {
        id: 4,
        title: "Trigonometry Worksheet",
        type: "assignment",
        dueDate: "2025-03-10T23:59:00",
        status: "completed",
        points: 30,
        description:
          "Practice problems on sine, cosine, and tangent functions.",
        submissions: 22,
      },
    ],
    materials: [
      {
        id: 1,
        title: "Algebra Fundamentals",
        type: "document",
        uploadedDate: "2025-03-01",
        size: "2.4 MB",
      },
      {
        id: 2,
        title: "Geometry Formulas",
        type: "document",
        uploadedDate: "2025-03-05",
        size: "1.1 MB",
      },
      {
        id: 3,
        title: "Calculus Introduction",
        type: "video",
        uploadedDate: "2025-03-10",
        duration: "15:24",
      },
    ],
    studentList: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "AJ",
        joined: "2025-01-20",
        lastActive: "Today",
        submissions: 4,
        grade: "A",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "BS",
        joined: "2025-01-20",
        lastActive: "Yesterday",
        submissions: 3,
        grade: "B+",
      },
      {
        id: 3,
        name: "Charlie Davis",
        email: "charlie@example.com",
        avatar: "CD",
        joined: "2025-01-21",
        lastActive: "2 days ago",
        submissions: 4,
        grade: "A-",
      },
      {
        id: 4,
        name: "Diana Miller",
        email: "diana@example.com",
        avatar: "DM",
        joined: "2025-01-22",
        lastActive: "Today",
        submissions: 4,
        grade: "A",
      },
      {
        id: 5,
        name: "Edward Wilson",
        email: "edward@example.com",
        avatar: "EW",
        joined: "2025-01-22",
        lastActive: "3 days ago",
        submissions: 2,
        grade: "C+",
      },
      {
        id: 6,
        name: "Fiona Garcia",
        email: "fiona@example.com",
        avatar: "FG",
        joined: "2025-01-23",
        lastActive: "Today",
        submissions: 4,
        grade: "A+",
      },
      {
        id: 7,
        name: "George Martinez",
        email: "george@example.com",
        avatar: "GM",
        joined: "2025-01-25",
        lastActive: "Yesterday",
        submissions: 3,
        grade: "B",
      },
      {
        id: 8,
        name: "Hannah Lee",
        email: "hannah@example.com",
        avatar: "HL",
        joined: "2025-01-26",
        lastActive: "Today",
        submissions: 4,
        grade: "A-",
      },
    ],
  },
  2: {
    id: 2,
    name: "Science 202",
    teacher: "Mr. Peterson",
    subject: "Science",
    description: "Advanced topics in biology, chemistry, and physics.",
    students: 18,
    avatar: "S",
    color: "bg-green-500",
    code: "SCI202",
    createdAt: "2025-01-20",
    announcements: [
      {
        id: 1,
        title: "Lab Report Due",
        content:
          "Don't forget your lab report on photosynthesis is due this Friday.",
        date: "2025-03-22",
      },
    ],
    assignments: [
      {
        id: 1,
        title: "Lab Report: Photosynthesis",
        type: "assignment",
        dueDate: "2025-03-29T23:59:00",
        status: "active",
        points: 50,
        description:
          "Write a detailed report on the photosynthesis experiment we conducted in class.",
        submissions: 12,
      },
      {
        id: 2,
        title: "Chemistry Quiz",
        type: "test",
        dueDate: "2025-04-05T10:00:00",
        status: "active",
        points: 75,
        description:
          "Covers chemical reactions, balancing equations, and molecular structures.",
        submissions: 0,
      },
      {
        id: 3,
        title: "Physics Problem Set",
        type: "assignment",
        dueDate: "2025-03-20T23:59:00",
        status: "completed",
        points: 40,
        description:
          "Problems on Newton's laws of motion and gravitational force.",
        submissions: 18,
      },
    ],
    materials: [
      {
        id: 1,
        title: "Photosynthesis Process",
        type: "document",
        uploadedDate: "2025-03-15",
        size: "3.2 MB",
      },
      {
        id: 2,
        title: "Chemical Reactions",
        type: "video",
        uploadedDate: "2025-03-18",
        duration: "22:15",
      },
    ],
    studentList: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "AJ",
        joined: "2025-01-25",
        lastActive: "Today",
        submissions: 2,
        grade: "A-",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "BS",
        joined: "2025-01-25",
        lastActive: "Yesterday",
        submissions: 2,
        grade: "B",
      },
      {
        id: 3,
        name: "Charlie Davis",
        email: "charlie@example.com",
        avatar: "CD",
        joined: "2025-01-26",
        lastActive: "2 days ago",
        submissions: 1,
        grade: "B+",
      },
      {
        id: 4,
        name: "Diana Miller",
        email: "diana@example.com",
        avatar: "DM",
        joined: "2025-01-27",
        lastActive: "Today",
        submissions: 2,
        grade: "A",
      },
      {
        id: 5,
        name: "Edward Wilson",
        email: "edward@example.com",
        avatar: "EW",
        joined: "2025-01-27",
        lastActive: "3 days ago",
        submissions: 1,
        grade: "C",
      },
    ],
  },
};

export default function ClassroomManagement() {
  const params = useParams();
  const classroomId = params.id;
  const classroom = classroomsData[classroomId];

  const [searchQuery, setSearchQuery] = useState("");
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentType, setAssignmentType] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format datetime for display
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // Filter students based on search query
  const filteredStudents =
    classroom?.studentList.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const handleCreateAnnouncement = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false);
      setAnnouncementTitle("");
      setAnnouncementContent("");
      // In a real app, you would add the new announcement to the list
    }, 1500);
  };

  const handleCreateAssignment = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false);
      setAssignmentTitle("");
      setAssignmentType("");
      // In a real app, you would add the new assignment to the list
    }, 1500);
  };

  if (!classroom) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Classroom not found</h1>
        <Button asChild className="mt-4">
          <Link to="/teacher/classes">Back to Classes</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] realtive z-10">
        <TeacherSidebar />
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10"
              >
                <Link to="/teacher/classes">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">{classroom.name}</h1>
              <Badge
                variant="outline"
                className="bg-primary/10 border-primary/20"
              >
                {classroom.subject}
              </Badge>
            </div>

            <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-lg pointer-events-none"></div>
              <CardContent className="p-4 relative">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarFallback className={`${classroom.color} text-lg`}>
                      {classroom.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold">
                          {classroom.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {classroom.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" className="gap-1">
                          <Edit className="h-3.5 w-3.5" />
                          Edit Class
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Archive Class</DropdownMenuItem>
                            <DropdownMenuItem>Export Data</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete Class
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 border-primary/20"
                      >
                        <Users className="h-3 w-3 mr-1" />
                        {classroom.students} students
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 border-primary/20"
                      >
                        Code: {classroom.code}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 border-primary/20"
                      >
                        Created: {formatDate(classroom.createdAt)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1">
              <TabsTrigger
                value="students"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Students
              </TabsTrigger>
              <TabsTrigger
                value="assignments"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Assignments
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Announcements
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Materials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search students..."
                    className="pl-8 border-primary/20 focus-visible:ring-primary/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                      <Plus className="h-4 w-4" />
                      Add Student
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                    <DialogHeader className="relative">
                      <DialogTitle>Add Student</DialogTitle>
                      <DialogDescription>
                        Add a new student to this class.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 relative">
                      <div className="grid gap-2">
                        <Label htmlFor="studentEmail">Student Email</Label>
                        <Input
                          id="studentEmail"
                          placeholder="Enter student email"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Or</Label>
                        <Button variant="outline" className="w-full">
                          Generate Invitation Link
                        </Button>
                      </div>
                    </div>
                    <DialogFooter className="relative">
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                        Add Student
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardContent className="p-0 relative">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead>Submissions</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {student.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <span>{student.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{formatDate(student.joined)}</TableCell>
                          <TableCell>{student.lastActive}</TableCell>
                          <TableCell>{student.submissions}</TableCell>
                          <TableCell>
                            <Badge
                              className={`
                              ${
                                student.grade.startsWith("A")
                                  ? "bg-green-500/20 text-green-500 border-green-500/20"
                                  : student.grade.startsWith("B")
                                  ? "bg-blue-500/20 text-blue-500 border-blue-500/20"
                                  : "bg-amber-500/20 text-amber-500 border-amber-500/20"
                              }
                            `}
                            >
                              {student.grade}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Message Student
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Grade</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  Remove from Class
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignments" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Assignments & Tests</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                      <Plus className="h-4 w-4" />
                      Create Assignment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                    <DialogHeader className="relative">
                      <DialogTitle>Create Assignment</DialogTitle>
                      <DialogDescription>
                        Create a new assignment or test for your class.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 relative">
                      <div className="grid gap-2">
                        <Label htmlFor="assignmentTitle">Title</Label>
                        <Input
                          id="assignmentTitle"
                          placeholder="Enter assignment title"
                          value={assignmentTitle}
                          onChange={(e) => setAssignmentTitle(e.target.value)}
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="assignmentType">Type</Label>
                        <Select
                          value={assignmentType}
                          onValueChange={setAssignmentType}
                        >
                          <SelectTrigger
                            id="assignmentType"
                            className="border-primary/20 focus-visible:ring-primary/30"
                          >
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="assignment">
                              Assignment
                            </SelectItem>
                            <SelectItem value="test">Test/Quiz</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="assignmentDescription">
                          Description
                        </Label>
                        <Textarea
                          id="assignmentDescription"
                          placeholder="Enter assignment description"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="dueDate">Due Date</Label>
                          <Input
                            id="dueDate"
                            type="date"
                            className="border-primary/20 focus-visible:ring-primary/30"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="dueTime">Due Time</Label>
                          <Input
                            id="dueTime"
                            type="time"
                            className="border-primary/20 focus-visible:ring-primary/30"
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="points">Points</Label>
                        <Input
                          id="points"
                          type="number"
                          placeholder="Enter point value"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                    </div>
                    <DialogFooter className="relative">
                      <Button
                        onClick={handleCreateAssignment}
                        disabled={
                          !assignmentTitle.trim() ||
                          !assignmentType ||
                          isCreating
                        }
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        {isCreating ? "Creating..." : "Create Assignment"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                    Active Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {classroom.assignments
                      .filter((assignment) => assignment.status === "active")
                      .map((assignment) => (
                        <div
                          key={assignment.id}
                          className="flex items-start gap-3 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all"
                        >
                          <div
                            className={`
                              rounded-full p-2 mt-0.5
                              ${
                                assignment.type === "test"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-amber-500/20 text-amber-500"
                              }
                            `}
                          >
                            {assignment.type === "test" ? (
                              <BookOpenCheck className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">
                                {assignment.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className="bg-primary/10 border-primary/20"
                              >
                                {assignment.points} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {assignment.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className={`
                                  ${
                                    assignment.type === "test"
                                      ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                      : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                  }
                                `}
                                >
                                  {assignment.type === "test"
                                    ? "Test"
                                    : "Assignment"}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  Due: {formatDateTime(assignment.dueDate)}
                                </span>
                              </div>
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 border-green-500/20"
                              >
                                {assignment.submissions}/{classroom.students}{" "}
                                submissions
                              </Badge>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                View Submissions
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Edit Assignment
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Extend Deadline
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                Delete Assignment
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 dark:from-green-500/10 dark:via-emerald-500/15 dark:to-teal-500/10 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                    Completed Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {classroom.assignments
                      .filter((assignment) => assignment.status === "completed")
                      .map((assignment) => (
                        <div
                          key={assignment.id}
                          className="flex items-start gap-3 p-3 rounded-md bg-muted/50 border border-muted hover:border-green-500/20 transition-all"
                        >
                          <div
                            className={`
                              rounded-full p-2 mt-0.5
                              ${
                                assignment.type === "test"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-amber-500/20 text-amber-500"
                              }
                            `}
                          >
                            {assignment.type === "test" ? (
                              <BookOpenCheck className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">
                                {assignment.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className="bg-primary/10 border-primary/20"
                              >
                                {assignment.points} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {assignment.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className={`
                                  ${
                                    assignment.type === "test"
                                      ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                      : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                  }
                                `}
                                >
                                  {assignment.type === "test"
                                    ? "Test"
                                    : "Assignment"}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  Completed:{" "}
                                  {formatDateTime(assignment.dueDate)}
                                </span>
                              </div>
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 border-green-500/20"
                              >
                                {assignment.submissions}/{classroom.students}{" "}
                                submissions
                              </Badge>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                View Submissions
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Download Results
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Reopen Assignment
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Archive Assignment
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="announcements" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Announcements</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                      <Plus className="h-4 w-4" />
                      Create Announcement
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                    <DialogHeader className="relative">
                      <DialogTitle>Create Announcement</DialogTitle>
                      <DialogDescription>
                        Create a new announcement for your class.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 relative">
                      <div className="grid gap-2">
                        <Label htmlFor="announcementTitle">Title</Label>
                        <Input
                          id="announcementTitle"
                          placeholder="Enter announcement title"
                          value={announcementTitle}
                          onChange={(e) => setAnnouncementTitle(e.target.value)}
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="announcementContent">Content</Label>
                        <Textarea
                          id="announcementContent"
                          placeholder="Enter announcement content"
                          value={announcementContent}
                          onChange={(e) =>
                            setAnnouncementContent(e.target.value)
                          }
                          className="min-h-[150px] border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="sendEmail"
                          className="rounded border-primary/20"
                        />
                        <Label htmlFor="sendEmail">
                          Send email notification to students
                        </Label>
                      </div>
                    </div>
                    <DialogFooter className="relative">
                      <Button
                        onClick={handleCreateAnnouncement}
                        disabled={
                          !announcementTitle.trim() ||
                          !announcementContent.trim() ||
                          isCreating
                        }
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        {isCreating ? "Creating..." : "Post Announcement"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardContent className="p-4 relative">
                  <div className="space-y-4">
                    {classroom.announcements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className="p-4 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            {announcement.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground bg-muted/70 px-2 py-1 rounded-full">
                              {formatDate(announcement.date)}
                            </span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  Edit Announcement
                                </DropdownMenuItem>
                                <DropdownMenuItem>Pin to Top</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  Delete Announcement
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <p className="text-sm">{announcement.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Class Materials</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                      <Upload className="h-4 w-4" />
                      Upload Material
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                    <DialogHeader className="relative">
                      <DialogTitle>Upload Material</DialogTitle>
                      <DialogDescription>
                        Upload a new document or video for your class.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 relative">
                      <div className="grid gap-2">
                        <Label htmlFor="materialTitle">Title</Label>
                        <Input
                          id="materialTitle"
                          placeholder="Enter material title"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="materialType">Type</Label>
                        <Select>
                          <SelectTrigger
                            id="materialType"
                            className="border-primary/20 focus-visible:ring-primary/30"
                          >
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="document">Document</SelectItem>
                            <SelectItem value="video">Video</SelectItem>
                            <SelectItem value="audio">Audio</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="materialFile">File</Label>
                        <div className="border-2 border-dashed border-primary/20 rounded-md p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Drag and drop your file here, or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Supports PDF, DOCX, MP4, MP3 (max 100MB)
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="materialDescription">
                          Description (Optional)
                        </Label>
                        <Textarea
                          id="materialDescription"
                          placeholder="Enter a brief description"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                    </div>
                    <DialogFooter className="relative">
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                        Upload Material
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardContent className="p-4 relative">
                  <div className="space-y-4">
                    {classroom.materials.map((material) => (
                      <div
                        key={material.id}
                        className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              rounded-full p-2
                              ${
                                material.type === "document"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-purple-500/20 text-purple-500"
                              }
                            `}
                          >
                            {material.type === "document" ? (
                              <FileText className="h-4 w-4" />
                            ) : (
                              <MessageSquare className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{material.title}</h3>
                            <p className="text-xs text-muted-foreground">
                              {material.type === "document"
                                ? `${material.size} • Uploaded ${formatDate(
                                    material.uploadedDate
                                  )}`
                                : `${material.duration} • Uploaded ${formatDate(
                                    material.uploadedDate
                                  )}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Download className="h-3.5 w-3.5" />
                            Download
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>Share Link</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                Delete Material
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

import {Link} from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card"
import { Avatar, AvatarFallback} from "../../../components/ui/Avatar"
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Users,
  BookOpenCheck,
  ArrowLeft,
  Clock,
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import ThreeBackground from "../../../components/ThreeBackground"
import { Badge } from "../../../components/ui/Badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/Tabs"
import ExperienceBar from "../../../components/ExperienceBar"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Mock classroom data - in a real app, this would come from an API
const classroomsData = {
  "1": {
    id: 1,
    name: "Math 101",
    teacher: "Mrs. Johnson",
    subject: "Mathematics",
    description: "Fundamentals of algebra, geometry, and calculus for beginners.",
    students: 24,
    avatar: "M",
    color: "bg-blue-500",
    announcements: [
      {
        id: 1,
        title: "Test Next Week",
        content: "We will have a test on algebra fundamentals next Tuesday. Please review chapters 3-5.",
        date: "2 days ago",
      },
      {
        id: 2,
        title: "Office Hours Change",
        content: "My office hours will be moved to Thursday 3-5 PM this week only.",
        date: "1 week ago",
      },
    ],
    activities: [
      {
        id: 1,
        title: "Algebra Quiz",
        type: "test",
        dueDate: "2025-04-02T15:00:00",
        status: "upcoming",
        points: 100,
        description: "Covers linear equations, polynomials, and factoring.",
        submitted: false,
      },
      {
        id: 2,
        title: "Geometry Homework",
        type: "assignment",
        dueDate: "2025-03-28T23:59:00",
        status: "upcoming",
        points: 25,
        description: "Problems from Chapter 7, exercises 1-15.",
        submitted: false,
      },
      {
        id: 3,
        title: "Midterm Exam",
        type: "test",
        dueDate: "2025-03-15T14:30:00",
        status: "completed",
        points: 150,
        score: 132,
        description: "Comprehensive exam covering all material from the first half of the semester.",
        submitted: true,
      },
      {
        id: 4,
        title: "Trigonometry Worksheet",
        type: "assignment",
        dueDate: "2025-03-10T23:59:00",
        status: "completed",
        points: 30,
        score: 28,
        description: "Practice problems on sine, cosine, and tangent functions.",
        submitted: true,
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
  },
  "2": {
    id: 2,
    name: "Science 202",
    teacher: "Mr. Peterson",
    subject: "Science",
    description: "Advanced topics in biology, chemistry, and physics.",
    students: 18,
    avatar: "S",
    color: "bg-green-500",
    announcements: [
      {
        id: 1,
        title: "Lab Report Due",
        content: "Don't forget your lab report on photosynthesis is due this Friday.",
        date: "1 day ago",
      },
    ],
    activities: [
      {
        id: 1,
        title: "Lab Report: Photosynthesis",
        type: "assignment",
        dueDate: "2025-03-29T23:59:00",
        status: "upcoming",
        points: 50,
        description: "Write a detailed report on the photosynthesis experiment we conducted in class.",
        submitted: false,
      },
      {
        id: 2,
        title: "Chemistry Quiz",
        type: "test",
        dueDate: "2025-04-05T10:00:00",
        status: "upcoming",
        points: 75,
        description: "Covers chemical reactions, balancing equations, and molecular structures.",
        submitted: false,
      },
      {
        id: 3,
        title: "Physics Problem Set",
        type: "assignment",
        dueDate: "2025-03-20T23:59:00",
        status: "completed",
        points: 40,
        score: 35,
        description: "Problems on Newton's laws of motion and gravitational force.",
        submitted: true,
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
  },
  "3": {
    id: 3,
    name: "History 101",
    teacher: "Dr. Martinez",
    subject: "History",
    description: "Survey of world history from ancient civilizations to modern times.",
    students: 22,
    avatar: "H",
    color: "bg-amber-500",
    announcements: [
      {
        id: 1,
        title: "Museum Field Trip",
        content: "We will be visiting the history museum next month. Permission slips will be sent home next week.",
        date: "3 days ago",
      },
    ],
    activities: [
      {
        id: 1,
        title: "Ancient Civilizations Essay",
        type: "assignment",
        dueDate: "2025-04-10T23:59:00",
        status: "upcoming",
        points: 100,
        description: "Write a 1000-word essay comparing two ancient civilizations of your choice.",
        submitted: false,
      },
      {
        id: 2,
        title: "World War II Quiz",
        type: "test",
        dueDate: "2025-03-12T14:30:00",
        status: "completed",
        points: 100,
        score: 92,
        description: "Multiple choice and short answer questions on World War II.",
        submitted: true,
      },
    ],
    materials: [
      {
        id: 1,
        title: "Ancient Egypt Overview",
        type: "document",
        uploadedDate: "2025-03-05",
        size: "4.7 MB",
      },
      {
        id: 2,
        title: "World War II Timeline",
        type: "document",
        uploadedDate: "2025-03-10",
        size: "2.3 MB",
      },
    ],
  },
}

export default function ClassroomDetailPage() {
  const params = useParams()
  const router = useNavigate()
  const classroomId = params.id
  const classroom = classroomsData[classroomId]

  const [selectedActivity, setSelectedActivity] = useState(null)
  const [submissionText, setSubmissionText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
  }

  // Check if date is in the past
  const isPastDate = (dateString) => {
    return new Date(dateString) < new Date()
  }

  // Calculate time remaining
  const getTimeRemaining = (dateString) => {
    const now = new Date()
    const dueDate = new Date(dateString)
    const diffTime = dueDate.getTime() - now.getTime()

    if (diffTime <= 0) return "Past due"

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ${diffHours} hr${diffHours > 1 ? "s" : ""}`
    } else {
      const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
      return `${diffHours} hr${diffHours > 1 ? "s" : ""} ${diffMinutes} min${diffMinutes > 1 ? "s" : ""}`
    }
  }

  const handleSubmitAssignment = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionText("")
      setSelectedActivity(null)
      // In a real app, you would update the activity status to submitted
    }, 1500)
  }

  if (!classroom) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Classroom not found</h1>
        <Button asChild className="mt-4">
          <Link href="/student/classrooms">Back to Classrooms</Link>
        </Button>
      </div>
    )
  }

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
              <Button variant="secondary" className="w-full justify-start gap-2">
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                <Link href="/student/classrooms">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">{classroom.name}</h1>
              <Badge variant="outline" className="bg-primary/10 border-primary/20">
                {classroom.subject}
              </Badge>
            </div>

            <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-lg pointer-events-none"></div>
              <CardContent className="p-4 relative">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarFallback className={`${classroom.color} text-lg`}>{classroom.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{classroom.teacher}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="bg-primary/5">
                        <Users className="h-3 w-3 mr-1" />
                        {classroom.students} students
                      </Badge>
                      <p className="text-sm text-muted-foreground">{classroom.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
              <TabsTrigger
                value="activities"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Activities
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
              >
                Announcements
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-sky-600 data-[state=active]:text-white"
              >
                Materials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activities" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/15 dark:to-pink-500/20 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                    Upcoming Activities
                  </CardTitle>
                  <CardDescription>Tests and assignments that need to be completed</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {classroom.activities
                      .filter((activity) => activity.status === "upcoming")
                      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                      .map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start gap-3 p-4 rounded-md bg-muted/50 border border-muted hover:border-primary/30 transition-all hover:shadow-md hover:shadow-primary/5 group"
                        >
                          <div
                            className={`rounded-full p-2 mt-0.5 ${activity.type === "test" ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-500 dark:from-blue-500/40 dark:to-cyan-500/40" : "bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-500 dark:from-amber-500/40 dark:to-orange-500/40"}`}
                          >
                            {activity.type === "test" ? (
                              <BookOpenCheck className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                {activity.title}
                              </h3>
                              <Badge variant="outline" className="bg-primary/10 border-primary/20">
                                {activity.points} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                            <div className="flex items-center gap-2 mt-3">
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-muted-foreground">Due: {formatDate(activity.dueDate)}</span>
                              </div>
                              <Badge
                                variant={isPastDate(activity.dueDate) ? "destructive" : "outline"}
                                className={`ml-auto ${!isPastDate(activity.dueDate) ? "bg-primary/10 border-primary/20" : ""}`}
                              >
                                {getTimeRemaining(activity.dueDate)}
                              </Badge>
                            </div>
                            <div className="mt-3">
                              {activity.submitted ? (
                                <Badge className="bg-green-500/20 text-green-500 border-green-500/20 gap-1">
                                  <CheckCircle className="h-3.5 w-3.5" />
                                  Submitted
                                </Badge>
                              ) : (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      onClick={() => setSelectedActivity(activity)}
                                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                                    >
                                      {activity.type === "test" ? "Take Test" : "Submit Assignment"}
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                                    <DialogHeader className="relative">
                                      <DialogTitle>
                                        {activity.type === "test" ? "Take Test" : "Submit Assignment"}
                                      </DialogTitle>
                                      <DialogDescription>
                                        {activity.title} - Due {formatDate(activity.dueDate)}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4 relative">
                                      {activity.type === "test" ? (
                                        <div className="text-center p-4">
                                          <AlertCircle className="h-12 w-12 mx-auto text-amber-500 mb-2" />
                                          <h3 className="text-lg font-medium mb-2">Ready to begin?</h3>
                                          <p className="text-muted-foreground mb-4">
                                            This test has a time limit. Once you start, you must complete it in one
                                            session.
                                          </p>
                                          <Button
                                            onClick={() => {
                                              setSelectedActivity(null)
                                              router(`/student/classrooms/${classroomId}/test/${activity.id}`)
                                            }}
                                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                                          >
                                            Start Test
                                          </Button>
                                        </div>
                                      ) : (
                                        <>
                                          <div className="grid gap-2">
                                            <Label htmlFor="submission">Your Submission</Label>
                                            <Textarea
                                              id="submission"
                                              placeholder="Enter your answer or describe your work..."
                                              value={submissionText}
                                              onChange={(e) => setSubmissionText(e.target.value)}
                                              className="min-h-[150px] border-primary/20 focus-visible:ring-primary/30"
                                            />
                                          </div>
                                          <div className="grid gap-2">
                                            <Label htmlFor="file">Attach Files (Optional)</Label>
                                            <div className="border-2 border-dashed border-primary/20 rounded-md p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                                              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                              <p className="text-sm text-muted-foreground">
                                                Drag and drop your files here, or click to browse
                                              </p>
                                              <p className="text-xs text-muted-foreground mt-1">
                                                Supports PDF, DOCX, JPG, PNG (max 10MB)
                                              </p>
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                    <DialogFooter className="relative">
                                      {activity.type !== "test" && (
                                        <Button
                                          onClick={handleSubmitAssignment}
                                          disabled={!submissionText.trim() || isSubmitting}
                                          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                                        >
                                          {isSubmitting ? "Submitting..." : "Submit Assignment"}
                                        </Button>
                                      )}
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                    {classroom.activities.filter((activity) => activity.status === "upcoming").length === 0 && (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="rounded-full bg-muted/70 p-4 mb-4">
                          <BookOpen className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No upcoming activities</p>
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
                    Completed Activities
                  </CardTitle>
                  <CardDescription>Your past work and scores</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {classroom.activities
                      .filter((activity) => activity.status === "completed")
                      .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
                      .map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start gap-3 p-4 rounded-md bg-muted/50 border border-muted hover:border-green-500/30 transition-all hover:shadow-md hover:shadow-green-500/5 group"
                        >
                          <div
                            className={`rounded-full p-2 mt-0.5 ${activity.type === "test" ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-500 dark:from-blue-500/40 dark:to-cyan-500/40" : "bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-500 dark:from-amber-500/40 dark:to-orange-500/40"}`}
                          >
                            {activity.type === "test" ? (
                              <BookOpenCheck className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium group-hover:text-green-500 transition-colors">
                                {activity.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20"
                              >
                                {activity.score}/{activity.points}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                            <div className="flex items-center gap-2 mt-3">
                              <div className="flex items-center gap-1 text-sm">
                                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-muted-foreground">Completed: {formatDate(activity.dueDate)}</span>
                              </div>
                              <div className="ml-auto">
                                <ExperienceBar
                                  progress={Math.round((activity.score / activity.points) * 100)}
                                  width={100}
                                  height={20}
                                />
                              </div>
                            </div>
                            <div className="mt-3">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-green-500/20 text-green-600 hover:bg-green-500/10 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                              >
                                View Feedback
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}

                    {classroom.activities.filter((activity) => activity.status === "completed").length === 0 && (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="rounded-full bg-muted/70 p-4 mb-4">
                          <BookOpen className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No completed activities yet</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="announcements" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-indigo-500/10 dark:from-purple-500/20 dark:via-violet-500/15 dark:to-indigo-500/20 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full"></div>
                    Class Announcements
                  </CardTitle>
                  <CardDescription>Important messages from your teacher</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {classroom.announcements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className="p-4 rounded-md bg-muted/50 border border-muted hover:border-purple-500/30 transition-all hover:shadow-md hover:shadow-purple-500/5"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-purple-500" />
                            {announcement.title}
                          </h3>
                          <span className="text-xs text-muted-foreground bg-muted/70 px-2 py-1 rounded-full">
                            {announcement.date}
                          </span>
                        </div>
                        <p className="text-sm">{announcement.content}</p>
                      </div>
                    ))}

                    {classroom.announcements.length === 0 && (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="rounded-full bg-muted/70 p-4 mb-4">
                          <MessageSquare className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No announcements yet</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-cyan-500/10 dark:from-blue-500/20 dark:via-sky-500/15 dark:to-cyan-500/20 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-blue-500 to-sky-600 rounded-full"></div>
                    Class Materials
                  </CardTitle>
                  <CardDescription>Documents, videos, and resources for this class</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {classroom.materials.map((material) => (
                      <div
                        key={material.id}
                        className="flex items-center justify-between p-4 rounded-md bg-muted/50 border border-muted hover:border-blue-500/30 transition-all hover:shadow-md hover:shadow-blue-500/5 group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-full p-2 ${material.type === "document" ? "bg-gradient-to-br from-blue-500/30 to-sky-500/30 text-blue-500 dark:from-blue-500/40 dark:to-sky-500/40" : "bg-gradient-to-br from-purple-500/30 to-violet-500/30 text-purple-500 dark:from-purple-500/40 dark:to-violet-500/40"}`}
                          >
                            {material.type === "document" ? (
                              <FileText className="h-4 w-4" />
                            ) : (
                              <MessageSquare className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium group-hover:text-blue-500 transition-colors">
                              {material.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {material.type === "document"
                                ? `${material.size} • Uploaded ${formatDate(material.uploadedDate)}`
                                : `${material.duration} • Uploaded ${formatDate(material.uploadedDate)}`}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className={`${material.type === "document" ? "bg-gradient-to-r from-blue-500 to-sky-600" : "bg-gradient-to-r from-purple-500 to-violet-600"} text-white border-0 hover:opacity-90`}
                        >
                          {material.type === "document" ? "Download" : "Watch"}
                        </Button>
                      </div>
                    ))}

                    {classroom.materials.length === 0 && (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="rounded-full bg-muted/70 p-4 mb-4">
                          <FileText className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No materials available yet</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

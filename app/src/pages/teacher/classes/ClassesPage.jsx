import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/Card";
import { Avatar, AvatarFallback } from "../../../components/ui/Avatar";
import { Badge } from "../../../components/ui/Badge";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
  Plus,
  Search,
  MoreHorizontal,
} from "lucide-react";
import ThreeBackground from "../../../components/ThreeBackground";
import { Input } from "../../../components/ui/Input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/Tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/Dropdown";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/Select";
import { useState } from "react";

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  // Sample class data
  const classes = [
    {
      id: 1,
      name: "Math 101",
      subject: "Mathematics",
      description:
        "Fundamentals of algebra, geometry, and calculus for beginners.",
      students: 25,
      avatar: "M",
      color: "bg-blue-500",
      assignments: 3,
      tests: 2,
      lastActive: "Today",
    },
    {
      id: 2,
      name: "Science 202",
      subject: "Science",
      description: "Advanced topics in biology, chemistry, and physics.",
      students: 18,
      avatar: "S",
      color: "bg-green-500",
      assignments: 5,
      tests: 1,
      lastActive: "Yesterday",
    },
    {
      id: 3,
      name: "History 101",
      subject: "History",
      description:
        "Survey of world history from ancient civilizations to modern times.",
      students: 22,
      avatar: "H",
      color: "bg-amber-500",
      assignments: 2,
      tests: 0,
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Physics 101",
      subject: "Physics",
      description:
        "Introduction to physics concepts including mechanics and thermodynamics.",
      students: 20,
      avatar: "P",
      color: "bg-purple-500",
      assignments: 4,
      tests: 1,
      lastActive: "1 week ago",
    },
  ];

  // Filter classes based on search query
  const filteredClasses = classes.filter(
    (cls) =>
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateClass = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false);
      setClassName("");
      setSubject("");
      // In a real app, you would add the new class to the list
    }, 1500);
  };

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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Classes</h1>
              <p className="text-muted-foreground">
                Manage your classes and student assignments
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                  <Plus className="h-4 w-4" />
                  Create Class
                </Button>
              </DialogTrigger>
              <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <DialogHeader className="relative">
                  <DialogTitle>Create a New Class</DialogTitle>
                  <DialogDescription>
                    Enter the details for your new class.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 relative">
                  <div className="grid gap-2">
                    <Label htmlFor="className">Class Name</Label>
                    <Input
                      id="className"
                      placeholder="Enter class name (e.g., Math 101)"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="computer_science">
                          Computer Science
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="Enter a brief description of the class"
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>
                <DialogFooter className="relative">
                  <Button
                    onClick={handleCreateClass}
                    disabled={!className.trim() || !subject || isCreating}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                  >
                    {isCreating ? "Creating..." : "Create Class"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search classes..."
                className="pl-8 border-primary/20 focus-visible:ring-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                All Classes
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="archived"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Archived
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredClasses.map((cls) => (
                  <Card
                    key={cls.id}
                    className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="pb-2 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="border-2 border-primary/20 transition-all group-hover:border-primary/40">
                            <AvatarFallback
                              className={`${cls.color} group-hover:opacity-90 transition-opacity`}
                            >
                              {cls.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {cls.name}
                            </CardTitle>
                            <CardDescription>{cls.subject}</CardDescription>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Class</DropdownMenuItem>
                            <DropdownMenuItem>Manage Students</DropdownMenuItem>
                            <DropdownMenuItem>Archive Class</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-sm text-muted-foreground mb-4">
                        {cls.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex flex-col items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/20 transition-colors">
                          <span className="text-lg font-bold">
                            {cls.students}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Students
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/20 transition-colors">
                          <span className="text-lg font-bold">
                            {cls.assignments + cls.tests}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Activities
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-md bg-muted/50 border border-muted group-hover:border-primary/20 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">
                            Last Active
                          </span>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 border-primary/20"
                          >
                            {cls.lastActive}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                              style={{
                                width: `${(cls.assignments + cls.tests) * 10}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {cls.assignments + cls.tests}/10 activities
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="relative">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        <Link href={`/teacher/classes/${cls.id}`}>
                          Manage Class
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredClasses.map((cls) => (
                  <Card
                    key={cls.id}
                    className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:via-transparent dark:to-primary/20 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="pb-2 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="border-2 border-primary/20 transition-all group-hover:border-primary/40">
                            <AvatarFallback
                              className={`${cls.color} group-hover:opacity-90 transition-opacity`}
                            >
                              {cls.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {cls.name}
                            </CardTitle>
                            <CardDescription>{cls.subject}</CardDescription>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Class</DropdownMenuItem>
                            <DropdownMenuItem>Manage Students</DropdownMenuItem>
                            <DropdownMenuItem>Archive Class</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-sm text-muted-foreground mb-4">
                        {cls.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex flex-col items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/20 transition-colors">
                          <span className="text-lg font-bold">
                            {cls.students}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Students
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/20 transition-colors">
                          <span className="text-lg font-bold">
                            {cls.assignments + cls.tests}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Activities
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-md bg-muted/50 border border-muted group-hover:border-primary/20 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">
                            Last Active
                          </span>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 border-primary/20"
                          >
                            {cls.lastActive}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                              style={{
                                width: `${(cls.assignments + cls.tests) * 10}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {cls.assignments + cls.tests}/10 activities
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="relative">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        <Link href={`/teacher/classes/${cls.id}`}>
                          Manage Class
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="archived" className="space-y-4 pt-4">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted/70 p-6 mb-4">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  No Archived Classes
                </h3>
                <p className="text-muted-foreground max-w-md">
                  You don't have any archived classes yet. When you archive a
                  class, it will appear here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

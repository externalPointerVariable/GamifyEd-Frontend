"use client"
import {Link} from "react-router-dom"
import { Button } from "../../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs"
import { Avatar, AvatarFallback } from "../../components/ui/Avatar"
import { Badge } from "../../components/ui/Badge"
import { BookOpen, Calendar, LogOut, MessageSquare, Settings, User, Users, Plus } from "lucide-react"
import ThreeBackground from "../../components/ThreeBackground"

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
          <nav className="grid items-start gap-2">
            <Link href="/teacher/dashboard">
              <Button variant="secondary" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/teacher/classes">
              <Button variant="ghost" className="w-full justify-start gap-2">
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
            <h1 className="text-3xl font-bold">Welcome back, Teacher!</h1>
            <p className="text-muted-foreground">Manage your classes and create educational content</p>
          </div>

          <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
            <CardHeader className="relative pb-2">
              <CardTitle className="flex items-center gap-2">
                <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                Teacher Overview
              </CardTitle>
              <CardDescription>Your teaching statistics at a glance</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all">
                  <div className="rounded-full bg-primary/10 p-3 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground">Total Students</p>
                  <Badge className="mt-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    +5 from last month
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all">
                  <div className="rounded-full bg-primary/10 p-3 mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">Active Classes</p>
                  <Badge className="mt-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    Same as last month
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all">
                  <div className="rounded-full bg-primary/10 p-3 mb-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">Content Created</p>
                  <Badge className="mt-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    +8 from last month
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="classes"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Classes
              </TabsTrigger>
              <TabsTrigger
                value="content"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Content
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1 backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                      <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                        <div className="rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-500 dark:from-blue-500/40 dark:to-cyan-500/40 p-2">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Created Math Quiz</p>
                          <p className="text-sm text-muted-foreground">Algebra Fundamentals • 15 questions</p>
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/70 px-2 py-1 rounded-full">1h ago</div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                        <div className="rounded-full bg-gradient-to-br from-purple-500/30 to-violet-500/30 text-purple-500 dark:from-purple-500/40 dark:to-violet-500/40 p-2">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Generated History Podcast</p>
                          <p className="text-sm text-muted-foreground">World War II • 20 minutes</p>
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/70 px-2 py-1 rounded-full">
                          Yesterday
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                        <div className="rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 text-green-500 dark:from-green-500/40 dark:to-emerald-500/40 p-2">
                          <Users className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Added 5 Students to Physics Class</p>
                          <p className="text-sm text-muted-foreground">Physics 101</p>
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/70 px-2 py-1 rounded-full">
                          3 days ago
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1 backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                      <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                      Quick Actions
                    </CardTitle>
                    <CardDescription>Create content or manage classes</CardDescription>
                  </CardHeader>
                  <CardContent className="relative grid gap-4">
                    <Button className="w-full justify-start gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0">
                      <BookOpen className="h-4 w-4" />
                      Create Test Quiz
                    </Button>
                    <Button className="w-full justify-start gap-2 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0">
                      <MessageSquare className="h-4 w-4" />
                      Generate AI Podcast
                    </Button>
                    <Button className="w-full justify-start gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0">
                      <Users className="h-4 w-4" />
                      Add New Class
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="classes" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                    Your Classes
                  </CardTitle>
                  <CardDescription>Manage your active classes</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-blue-500">M</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Math 101</p>
                          <p className="text-sm text-muted-foreground">25 students</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
                        Active
                      </Badge>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        Manage
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-green-500">S</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Science 202</p>
                          <p className="text-sm text-muted-foreground">18 students</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
                        Active
                      </Badge>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        Manage
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-amber-500">H</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">History 101</p>
                          <p className="text-sm text-muted-foreground">22 students</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
                        Active
                      </Badge>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        Manage
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-blue-500">P</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Physics 101</p>
                          <p className="text-sm text-muted-foreground">22 students</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
                        Active
                      </Badge>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Class
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                    Educational Content
                  </CardTitle>
                  <CardDescription>Create and manage your content</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Tabs defaultValue="quizzes" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
                      <TabsTrigger
                        value="quizzes"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
                      >
                        Test Quizzes
                      </TabsTrigger>
                      <TabsTrigger
                        value="podcasts"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
                      >
                        AI Podcasts
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="quizzes" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-blue-500/20 transition-all">
                          <div>
                            <p className="font-medium">Algebra Fundamentals</p>
                            <p className="text-sm text-muted-foreground">15 questions • Math 101</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-500/20 text-blue-600 hover:bg-blue-500/10 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0"
                            >
                              Assign
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-blue-500/20 transition-all">
                          <div>
                            <p className="font-medium">World War II</p>
                            <p className="text-sm text-muted-foreground">10 questions • History 101</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-500/20 text-blue-600 hover:bg-blue-500/10 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0"
                            >
                              Assign
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-blue-500/20 transition-all">
                          <div>
                            <p className="font-medium">Newton's Laws</p>
                            <p className="text-sm text-muted-foreground">12 questions • Physics 101</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-500/20 text-blue-600 hover:bg-blue-500/10 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0"
                            >
                              Assign
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Quiz
                      </Button>
                    </TabsContent>

                    <TabsContent value="podcasts" className="space-y-4 pt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-purple-500/20 transition-all">
                          <div>
                            <p className="font-medium">Introduction to Calculus</p>
                            <p className="text-sm text-muted-foreground">15 minutes • Math 101</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-500/20 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0"
                            >
                              Share
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-purple-500/20 transition-all">
                          <div>
                            <p className="font-medium">World War II Overview</p>
                            <p className="text-sm text-muted-foreground">20 minutes • History 101</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-500/20 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0"
                            >
                              Share
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-muted hover:border-purple-500/20 transition-all">
                          <div>
                            <p className="font-medium">Understanding Gravity</p>
                            <p className="text-sm text-muted-foreground">18 minutes • Physics 101</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-500/20 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0"
                            >
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0">
                        <Plus className="h-4 w-4 mr-2" />
                        Generate New Podcast
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

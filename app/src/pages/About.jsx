import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import ThreeBackground from "../components/ThreeBackground";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About GamifyEd-AI
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Revolutionizing education through AI-powered content and
                  gamified learning experiences
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
                  <div className="rounded-[5px] bg-background p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  At GamifyEd-AI, we believe that learning should be engaging,
                  personalized, and effective. Our mission is to transform
                  traditional education by combining the power of artificial
                  intelligence with gamification principles to create a learning
                  experience that motivates students and empowers teachers.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    alt="Students engaged in learning"
                    className="aspect-video object-cover w-full"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how GamifyEd-AI transforms the learning experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card
                id="ai-quizzes"
                className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle>AI-Generated Practice Quizzes</CardTitle>
                  <CardDescription>
                    Reinforce learning with personalized quizzes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-muted-foreground"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes student performance and learning materials
                    to generate customized quizzes that target specific
                    knowledge gaps and reinforce key concepts. Teachers can
                    review and adjust these quizzes before assigning them to
                    students.
                  </p>
                  <Link to="/student/quizzes">
                    <Button variant="outline" className="w-full">
                      Try Quizzes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card
                id="ai-podcasts"
                className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle>AI-Generated Podcasts</CardTitle>
                  <CardDescription>
                    Convert study materials into audio content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-muted-foreground"
                    >
                      <path d="M18 8a6 6 0 0 0-9.33-5" />
                      <path d="m10.93 7.9-1.87.36-.36-1.87" />
                      <circle cx="12" cy="14" r="4" />
                      <path d="M16 18v2" />
                      <path d="M8 18v2" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transform textbooks, notes, and learning materials into
                    engaging audio podcasts. Our AI creates conversational,
                    easy-to-understand audio content that students can listen to
                    anytime, anywhere, making learning more accessible and
                    convenient.
                  </p>
                  <Link to="/student/podcasts">
                    <Button variant="outline" className="w-full">
                      Explore Podcasts
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card
                id="gamification"
                className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle>Gamified Learning</CardTitle>
                  <CardDescription>
                    Missions, achievements, and experience points
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-40 rounded-md bg-muted flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-muted-foreground"
                    >
                      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
                      <path d="M15 7a4 4 0 1 0-8 0" />
                      <path d="M17 14h.352a3 3 0 1 0 0-6H17" />
                      <path d="M7 14h-.352a3 3 0 1 1 0-6H7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Make learning fun with our comprehensive gamification
                    system. Students earn XP, level up, unlock achievements, and
                    complete missions as they progress through their educational
                    journey, increasing motivation and engagement.
                  </p>
                  <Link to="/student/achievements">
                    <Button variant="outline" className="w-full">
                      View Achievements
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="for-teachers" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  For Teachers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful tools to enhance your teaching and save time
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-8">
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Classroom Management</CardTitle>
                  <CardDescription>
                    Organize and manage your classes efficiently
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Create and manage multiple classrooms</li>
                    <li>Track student progress and performance</li>
                    <li>
                      Assign quizzes, podcasts, and other learning materials
                    </li>
                    <li>Schedule events and deadlines</li>
                    <li>Communicate with students through announcements</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Content Creation</CardTitle>
                  <CardDescription>
                    Create engaging learning materials with AI assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Generate quizzes based on your teaching materials</li>
                    <li>Create audio podcasts from textbooks and notes</li>
                    <li>Design gamified learning missions</li>
                    <li>Customize achievement systems</li>
                    <li>Adapt content to different learning styles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/register">
                <Button size="lg">Get Started as a Teacher</Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="for-students"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  For Students
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A fun and engaging way to learn and grow
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-8">
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Personalized Learning</CardTitle>
                  <CardDescription>
                    Learn at your own pace with content tailored to you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Receive personalized quizzes based on your progress</li>
                    <li>Access audio podcasts for on-the-go learning</li>
                    <li>Track your progress with detailed analytics</li>
                    <li>Get recommendations for areas that need improvement</li>
                    <li>Learn in ways that match your learning style</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Gamified Experience</CardTitle>
                  <CardDescription>
                    Make learning fun and rewarding
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Earn XP and level up as you learn</li>
                    <li>Unlock achievements for completing learning goals</li>
                    <li>Compete with classmates on leaderboards</li>
                    <li>Complete missions to reinforce learning</li>
                    <li>
                      Collect badges and trophies for your accomplishments
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/register">
                <Button size="lg">Get Started as a Student</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Learning?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of teachers and students already using
                  GamifyEd-AI
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/register">
                  <Button size="lg" className="w-full">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

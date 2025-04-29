import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import ThreeBackground from "../components/ThreeBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Learning with AI & Gamification
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    GamifyEd-AI enhances education through AI-powered content
                    and gamified learning experiences for both students and
                    teachers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/register">
                    <Button size="lg" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 flex items-center justify-center">
                <div className="rounded-lg overflow-hidden shadow-xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    alt="GamifyEd-AI Platform Preview"
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features for Everyone
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers tailored experiences for both students and
                  teachers
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>AI-Generated Practice Quizzes</CardTitle>
                  <CardDescription>
                    Reinforce learning with personalized quizzes
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
                <CardFooter>
                  <Link to="/about#ai-quizzes">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>AI-Generated Podcasts</CardTitle>
                  <CardDescription>
                    Convert study materials into audio content
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
                <CardFooter>
                  <Link to="/about#ai-podcasts">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur bg-background/80 border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Gamified Learning</CardTitle>
                  <CardDescription>
                    Missions, achievements, and experience points
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
                <CardFooter>
                  <Link to="/about#gamification">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

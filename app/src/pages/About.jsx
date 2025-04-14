import { Link } from "react-router-dom";
import ThreeBackground from "../components/ThreeBackground";
import React from "react";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col relative bg-background text-foreground dark:bg-black dark:text-white">
      <ThreeBackground />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold sm:text-5xl">
                About GamifyEd-AI
              </h1>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl dark:text-gray-400">
                Revolutionizing education through AI-powered content and
                gamified learning experiences
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4 text-left">
                <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 w-fit">
                  <div className="rounded bg-white dark:bg-zinc-900 p-2">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground dark:text-gray-400">
                  At GamifyEd-AI, we believe that learning should be engaging,
                  personalized, and effective. Our mission is to transform
                  traditional education by combining the power of artificial
                  intelligence with gamification principles to create a learning
                  experience that motivates students and empowers teachers.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="/placeholder.svg"
                  alt="Students engaged in learning"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-zinc-800">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Our Features
            </h2>
            <p className="max-w-3xl mx-auto mt-2 text-muted-foreground md:text-xl dark:text-gray-400">
              Discover how GamifyEd-AI transforms the learning experience
            </p>

            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map(
                ({ id, title, description, icon, href, btnText, detail }) => (
                  <div
                    key={id}
                    className="rounded-lg border border-primary/20 hover:border-primary/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur text-left"
                  >
                    <div className="h-40 flex items-center justify-center rounded bg-muted dark:bg-zinc-700 mb-4">
                      {icon}
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {description}
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">
                      {detail}
                    </p>
                    <Link to={href}>
                      <button className="w-full mt-4 border border-input text-sm px-4 py-2 rounded hover:bg-accent transition dark:hover:bg-fuchsia-500">
                        {btnText}
                      </button>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* For Teachers */}
        <Section
          title="For Teachers"
          subtitle="Powerful tools to enhance your teaching and save time"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Classroom Management"
              description="Organize and manage your classes efficiently"
              list={[
                "Create and manage multiple classrooms",
                "Track student progress and performance",
                "Assign quizzes, podcasts, and other learning materials",
                "Schedule events and deadlines",
                "Communicate with students through announcements",
              ]}
            />
            <Card
              title="Content Creation"
              description="Create engaging learning materials with AI assistance"
              list={[
                "Generate quizzes based on your teaching materials",
                "Create audio podcasts from textbooks and notes",
                "Design gamified learning missions",
                "Customize achievement systems",
                "Adapt content to different learning styles",
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <Link to="/register">
              <button className="px-6 py-2 rounded bg-primary hover:bg-fuchsia-500 text-white transition border-1">
                Get Started as a Teacher
              </button>
            </Link>
          </div>
        </Section>

        {/* For Students */}
        <Section
          bg
          title="For Students"
          subtitle="A fun and engaging way to learn and grow"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Personalized Learning"
              description="Learn at your own pace with content tailored to you"
              list={[
                "Receive personalized quizzes based on your progress",
                "Access audio podcasts for on-the-go learning",
                "Track your progress with detailed analytics",
                "Get recommendations for areas that need improvement",
                "Learn in ways that match your learning style",
              ]}
            />
            <Card
              title="Gamified Experience"
              description="Make learning fun and rewarding"
              list={[
                "Earn XP and level up as you learn",
                "Unlock achievements for completing learning goals",
                "Compete with classmates on leaderboards",
                "Complete missions to reinforce learning",
                "Collect badges and trophies for your accomplishments",
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <Link to="/register">
              <button className="px-6 py-2 rounded bg-primary hover:bg-fuchsia-500 text-white transition border-1">
                Get Started as a Student
              </button>
            </Link>
          </div>
        </Section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container mx-auto px-4 md:px-6 space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Ready to Transform Learning?
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl dark:text-gray-400">
              Join thousands of teachers and students already using GamifyEd-AI
            </p>
            <div className="flex flex-col gap-2 sm:flex-row justify-center mt-4">
              <Link to="/register">
                <button className="px-6 py-2 rounded text-white hover:bg-indigo-600 bg-indigo-500 transition w-full">
                  Sign Up Now
                </button>
              </Link>
              <Link to="/login">
                <button className="px-6 py-2 rounded border border-input hover:bg-accent transition dark:hover:bg-zinc-700 w-full">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    id: "ai-quizzes",
    title: "AI-Generated Practice Quizzes",
    description: "Reinforce learning with personalized quizzes",
    detail:
      "AI analyzes performance and materials to generate targeted quizzes for students.",
    href: "/student/quizzes",
    btnText: "Try Quizzes",
    icon: (
      <svg
        className="h-10 w-10 text-muted-foreground dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    id: "ai-podcasts",
    title: "AI-Generated Podcasts",
    description: "Convert study materials into audio content",
    detail: "Transform notes into podcasts for convenient learning anytime.",
    href: "/student/podcasts",
    btnText: "Explore Podcasts",
    icon: (
      <svg
        className="h-10 w-10 text-muted-foreground dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M18 8a6 6 0 0 0-9.33-5" />
        <path d="m10.93 7.9-1.87.36-.36-1.87" />
        <circle cx="12" cy="14" r="4" />
        <path d="M16 18v2" />
        <path d="M8 18v2" />
      </svg>
    ),
  },
  {
    id: "gamification",
    title: "Gamified Learning",
    description: "Missions, achievements, and experience points",
    detail: "Make learning fun and interactive with our gamification system.",
    href: "/student/achievements",
    btnText: "View Achievements",
    icon: (
      <svg
        className="h-10 w-10 text-muted-foreground dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
        <path d="M15 7a4 4 0 1 0-8 0" />
        <path d="M17 14h.352a3 3 0 1 0 0-6H17" />
        <path d="M7 14h-.352a3 3 0 1 1 0-6H7" />
      </svg>
    ),
  },
];

const Section = ({ title, subtitle, children, bg = false }) => (
  <section
    className={`w-full py-12 md:py-24 lg:py-32 ${
      bg ? "bg-muted/50 dark:bg-zinc-800" : ""
    }`}
  >
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <p className="max-w-3xl mx-auto mt-2 text-muted-foreground md:text-xl dark:text-gray-400">
        {subtitle}
      </p>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Card = ({ title, description, list }) => (
  <div className="rounded-lg border border-primary/20 hover:border-primary/50 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur text-left">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">
      {description}
    </p>
    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground dark:text-gray-400">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

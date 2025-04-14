import { Link } from "react-router-dom";
import ThreeBackground from "../components/ThreeBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <ThreeBackground />

      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left Content */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="text-indigo-500">Transform</span> Learning
                  with AI & Gamification
                </h1>
                <p className="text-muted-foreground max-w-xl md:text-xl mx-auto lg:mx-0">
                  GamifyEd-AI enhances education through AI-powered content and
                  gamified learning experiences for both students and teachers.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
                  <Link to="/register">
                    <button className="btn-lg w-full sm:w-auto bg-primary text-white bg-indigo-500 hover:bg-indigo-600 rounded py-2 px-6 transition-all duration-300">
                      Get Started
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="btn-lg w-full transition-all duration-300 sm:w-auto border border-primary text-primary dark:text-white rounded py-2 px-6 bg-white dark:bg-black hover:bg-white hover:text-black">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                    height="310"
                    alt="GamifyEd-AI Platform Preview"
                    className="aspect-video object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Features for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500">
                  Everyone
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Our platform offers tailored experiences for both students and
                teachers
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
              {[
                {
                  title: "AI-Generated Practice Quizzes",
                  desc: "Reinforce learning with personalized quizzes.",
                  href: "/about#ai-quizzes",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </>
                  ),
                },
                {
                  title: "AI-Generated Podcasts",
                  desc: "Convert study materials into engaging audio content.",
                  href: "/about#ai-podcasts",
                  icon: (
                    <>
                      <path d="M18 8a6 6 0 0 0-9.33-5" />
                      <path d="m10.93 7.9-1.87.36-.36-1.87" />
                      <circle cx="12" cy="14" r="4" />
                      <path d="M17 14h.352a3 3 0 1 0 0-6H17" />
                      <path d="M7 14h-.352a3 3 0 1 1 0-6H7" />
                    </>
                  ),
                },
                {
                  title: "Gamified Learning",
                  desc: "Missions, achievements & XP-based progression.",
                  href: "/about#gamification",
                  icon: (
                    <>
                      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11" />
                      <path d="M15 7a4 4 0 1 0-8 0" />
                      <path d="M17 14h.352a3 3 0 1 0 0-6H17" />
                      <path d="M7 14h-.352a3 3 0 1 1 0-6H7" />
                    </>
                  ),
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group rounded border border-none bg-purple-400/10 dark:bg-purple-500/50 backdrop-blur-md hover:shadow-xl hover:border-primary transition-all duration-300"
                >
                  <div className="flex flex-col gap-4 p-6">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto shadow-md group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold">{card.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link to={card.href}>
                      <button className="w-full rounded-lg border border-primary text-primary dark:text-white hover:bg-primary hover:text-black transition-colors duration-300 py-2 hover:bg-white">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

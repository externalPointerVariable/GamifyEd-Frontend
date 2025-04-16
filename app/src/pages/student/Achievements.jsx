import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Star,
  Award,
  Medal,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import ExperienceBar from "../../components/ExperienceBar";
import Trophies from "../../components/Trophy";
import ThreeBackground from "../../components/ThreeBackground";
export default function Achievements() {
  const [filter, setFilter] = useState("all");
  const [barWidth, setBarWidth] = useState(150);

  useEffect(() => {
    setBarWidth(window.innerWidth > 768 ? 200 : 150);
  }, []);

  const achievements = [
    { id: 1, title: "Quick Learner", description: "Complete 5 quizzes in a single day", icon: <Trophy className="h-5 w-5" />, progress: 100, completed: true, category: "quizzes", reward: "50 XP", date: "2 days ago", color: "#FFD700" },
    { id: 2, title: "Knowledge Seeker", description: "Listen to 10 AI podcasts", icon: <MessageSquare className="h-5 w-5" />, progress: 80, completed: false, category: "podcasts", reward: "75 XP", date: "In progress", color: "#C0C0C0" },
    { id: 3, title: "Perfect Score", description: "Get 100% on 3 different quizzes", icon: <Star className="h-5 w-5" />, progress: 33, completed: false, category: "quizzes", reward: "100 XP", date: "In progress", color: "#CD7F32" },
    { id: 4, title: "Consistent Learner", description: "Log in for 7 consecutive days", icon: <Calendar className="h-5 w-5" />, progress: 100, completed: true, category: "engagement", reward: "30 XP", date: "1 week ago", color: "#FFD700" },
    { id: 5, title: "Subject Master", description: "Complete all quizzes in a subject area", icon: <Award className="h-5 w-5" />, progress: 60, completed: false, category: "quizzes", reward: "150 XP", date: "In progress", color: "#C0C0C0" },
    { id: 6, title: "Audio Enthusiast", description: "Listen to podcasts for a total of 2 hours", icon: <MessageSquare className="h-5 w-5" />, progress: 45, completed: false, category: "podcasts", reward: "80 XP", date: "In progress", color: "#CD7F32" },
    { id: 7, title: "Quiz Champion", description: "Score above 90% on 10 different quizzes", icon: <Medal className="h-5 w-5" />, progress: 70, completed: false, category: "quizzes", reward: "120 XP", date: "In progress", color: "#C0C0C0" },
    { id: 8, title: "Early Bird", description: "Complete a learning activity before 8 AM", icon: <Star className="h-5 w-5" />, progress: 100, completed: true, category: "engagement", reward: "25 XP", date: "3 days ago", color: "#FFD700" },
    { id: 9, title: "Night Owl", description: "Complete a learning activity after 10 PM", icon: <Star className="h-5 w-5" />, progress: 100, completed: true, category: "engagement", reward: "25 XP", date: "5 days ago", color: "#FFD700" },
  ];

  const filteredAchievements = useMemo(() => {
    if (filter === "all") return achievements;
    if (filter === "completed") return achievements.filter((a) => a.completed);
    if (filter === "in-progress") return achievements.filter((a) => !a.completed);
    return achievements.filter((a) => a.category === filter);
  }, [filter]);

  return (
    <div className="flex min-h-screen flex-col relative dark:bg-gray-950 dark:text-white">
      <ThreeBackground />

      <div className="container grid flex-1 gap-6 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-6">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px]">
          <nav className="grid items-start gap-2">
            <Link to="/student/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2"><User className="h-4 w-4" /> Dashboard</Button>
            </Link>
            <Link to="/student/quizzes">
              <Button variant="ghost" className="w-full justify-start gap-2"><BookOpen className="h-4 w-4" /> Practice Quizzes</Button>
            </Link>
            <Link to="/student/podcasts">
              <Button variant="ghost" className="w-full justify-start gap-2"><MessageSquare className="h-4 w-4" /> AI Podcasts</Button>
            </Link>
            <Link to="/student/achievements">
              <Button variant="secondary" className="w-full justify-start gap-2"><Trophy className="h-4 w-4" /> Achievements</Button>
            </Link>
            <Link to="/student/calendar">
              <Button variant="ghost" className="w-full justify-start gap-2"><Calendar className="h-4 w-4" /> Calendar</Button>
            </Link>
            <Link to="/student/settings">
              <Button variant="ghost" className="w-full justify-start gap-2"><Settings className="h-4 w-4" /> Settings</Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="w-full justify-start gap-2"><LogOut className="h-4 w-4" /> Logout</Button>
            </Link>
          </nav>
        </aside>

        <main className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Achievements</h1>
            <p className="text-muted-foreground dark:text-gray-400">Track your progress and earn rewards for your learning journey</p>
          </div>

          <Card className="backdrop-blur bg-background/80 border-primary/20">
            <CardHeader>
              <CardTitle>Achievement Stats</CardTitle>
              <CardDescription>Your achievement progress at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <StatCard value={achievements.filter((a) => a.completed).length} label="Achievements Unlocked" />
                <StatCard value={achievements.length} label="Total Achievements" />
                <StatCard value={`${Math.round((achievements.filter((a) => a.completed).length / achievements.length) * 100)}%`} label="Completion Rate" />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {["all", "completed", "in-progress", "quizzes", "podcasts", "engagement"].map((key) => (
                <Button key={key} variant={filter === key ? "default" : "outline"} size="sm" onClick={() => setFilter(key)}>
                  {key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
                </Button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAchievements.map((achievement) => (
                <Card key={achievement.id} className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <div className={`rounded-full p-1.5 ${achievement.completed ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {achievement.icon}
                      </div>
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center py-4">
                      <Trophies color={achievement.color} />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">{achievement.description}</p>
                    {!achievement.completed && (
                      <div className="mt-4 space-y-1">
                        <ExperienceBar progress={achievement.progress} width={barWidth} height={30} />
                        <p className="text-xs text-center text-muted-foreground">{achievement.progress}% completed</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between">
                    <Badge variant="outline">{achievement.reward}</Badge>
                    <Badge variant={achievement.completed ? "default" : "outline"}>
                      {achievement.completed ? "Unlocked" : "In Progress"}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

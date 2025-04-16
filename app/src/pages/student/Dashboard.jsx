import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/Tabs";
import { Badge } from "../../components/ui/Badge";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Users,
} from "lucide-react";
import ExperienceBar from "../../components/ExperienceBar";
import Trophies from "../../components/Trophy";
import ThreeBackground from "../../components/ThreeBackground";
import LevelProgress from "../../components/LevelProgress";
import LevelMilestones from "../../components/LevelMilestones";

// LevelBadge component
const LevelBadge = ({ level }) => {
  return (
    <div className="rounded-full bg-secondary text-secondary-foreground h-8 w-8 flex items-center justify-center font-bold text-sm">
      {level}
    </div>
  );
};

export default function StudentDashboard() {
  const [progress, setProgress] = useState(65);
  const [level, setLevel] = useState(5);
  const [currentXP, setCurrentXP] = useState(650);
  const [nextLevelXP, setNextLevelXP] = useState(1000);

  // Level up rewards
  const nextLevelRewards = [
    "New Quiz Types",
    "Custom Podcast Creation",
    "+50 XP Bonus",
  ];

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
          <nav className="grid items-start gap-2">
            <Link href="/student/dashboard">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2"
              >
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/student/classrooms">
              <Button variant="ghost" className="w-full justify-start gap-2">
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
            <h1 className="text-3xl font-bold">Welcome back, Student!</h1>

            {/* Enhanced Level Progress Component */}
            <LevelProgress
              level={level}
              currentXP={currentXP}
              nextLevelXP={nextLevelXP}
              rewards={nextLevelRewards}
            />
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="missions">Daily Missions</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="levels">Levels</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Quizzes Completed
                    </CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      +2 from last week
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Podcasts Listened
                    </CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">
                      +3 from last week
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Achievements
                    </CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">
                      +1 from last week
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1 backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Completed Math Quiz
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Score: 85%
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          2h ago
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Listened to History Podcast
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Duration: 15 minutes
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Yesterday
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Trophy className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Earned "Quick Learner" Badge
                          </p>
                          <p className="text-sm text-muted-foreground">
                            +50 XP
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          2 days ago
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-1 backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>
                      Based on your learning history
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Advanced Algebra Quiz
                          </p>
                          <p className="text-sm text-muted-foreground">
                            15 questions • 20 minutes
                          </p>
                        </div>
                        <Button size="sm">Start</Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            World History Podcast
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Ancient Civilizations • 25 minutes
                          </p>
                        </div>
                        <Button size="sm">Listen</Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Science Fundamentals Quiz
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Physics basics • 10 questions
                          </p>
                        </div>
                        <Button size="sm">Start</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="missions" className="space-y-4 pt-4">
              <Card className="backdrop-blur bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle>Daily Missions</CardTitle>
                  <CardDescription>
                    Complete these missions to earn XP and rewards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Complete 2 Practice Quizzes
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Reward: 50 XP
                        </p>
                        <ExperienceBar
                          progress={50}
                          width={window.innerWidth > 768 ? 400 : 200}
                          height={30}
                        />
                      </div>
                      <Badge>1/2</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Listen to an AI Podcast
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Reward: 30 XP
                        </p>
                        <ExperienceBar
                          progress={0}
                          width={window.innerWidth > 768 ? 400 : 200}
                          height={30}
                        />
                      </div>
                      <Badge>0/1</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Trophy className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Score 80% or higher on a quiz
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Reward: 75 XP
                        </p>
                        <ExperienceBar
                          progress={100}
                          width={window.innerWidth > 768 ? 400 : 200}
                          height={30}
                        />
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Claim Rewards</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Quick Learner</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center py-4">
                      <Trophies color="#FFD700" />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Complete 5 quizzes in a single day
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Badge className="w-full justify-center" variant="outline">
                      Unlocked
                    </Badge>
                  </CardFooter>
                </Card>
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Knowledge Seeker
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center py-4">
                      <Trophies color="#C0C0C0" />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Listen to 10 AI podcasts
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="w-full space-y-1">
                      <ExperienceBar
                        progress={80}
                        width={window.innerWidth > 768 ? 200 : 150}
                        height={30}
                      />
                      <p className="text-xs text-center text-muted-foreground">
                        8/10 completed
                      </p>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Perfect Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center py-4">
                      <Trophies color="#CD7F32" />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Get 100% on 3 different quizzes
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="w-full space-y-1">
                      <ExperienceBar
                        progress={33}
                        width={window.innerWidth > 768 ? 200 : 150}
                        height={30}
                      />
                      <p className="text-xs text-center text-muted-foreground">
                        1/3 completed
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* New Levels Tab */}
            <TabsContent value="levels" className="space-y-4 pt-4">
              <LevelMilestones currentLevel={level} />

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader>
                    <CardTitle>XP Breakdown</CardTitle>
                    <CardDescription>
                      How you've earned your experience points
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-blue-500/20 p-2">
                            <BookOpen className="h-4 w-4 text-blue-500" />
                          </div>
                          <span>Quizzes Completed</span>
                        </div>
                        <Badge variant="outline">320 XP</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-purple-500/20 p-2">
                            <MessageSquare className="h-4 w-4 text-purple-500" />
                          </div>
                          <span>Podcasts Listened</span>
                        </div>
                        <Badge variant="outline">180 XP</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-yellow-500/20 p-2">
                            <Trophy className="h-4 w-4 text-yellow-500" />
                          </div>
                          <span>Achievements Earned</span>
                        </div>
                        <Badge variant="outline">100 XP</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-green-500/20 p-2">
                            <Calendar className="h-4 w-4 text-green-500" />
                          </div>
                          <span>Daily Logins</span>
                        </div>
                        <Badge variant="outline">50 XP</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur bg-background/80 border-primary/20">
                  <CardHeader>
                    <CardTitle>Level History</CardTitle>
                    <CardDescription>
                      Your learning journey so far
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <LevelBadge level={5} />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Level 5 Reached
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Unlocked AI Podcasts feature
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          2 days ago
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LevelBadge level={4} />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Level 4 Reached
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Unlocked advanced quiz types
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          1 week ago
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LevelBadge level={3} />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Level 3 Reached
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Unlocked custom quiz creation
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          2 weeks ago
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LevelBadge level={2} />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Level 2 Reached
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Unlocked daily missions
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          3 weeks ago
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Badge } from "../components/ui/Badge";
import {
  Lock,
  Unlock,
  Trophy,
  BookOpen,
  MessageSquare,
  Zap,
} from "lucide-react";
import LevelBadge from "../components/LevelBadge";

export default function LevelMilestones({ currentLevel = 5 }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const milestones = [
    {
      level: 1,
      title: "Getting Started",
      description: "Access to basic quizzes and learning materials",
      icon: <BookOpen className="h-4 w-4" />,
      unlocked: currentLevel >= 1,
    },
    {
      level: 3,
      title: "Quiz Master",
      description: "Create custom quizzes for personal study",
      icon: <BookOpen className="h-4 w-4" />,
      unlocked: currentLevel >= 3,
    },
    {
      level: 5,
      title: "Podcast Explorer",
      description: "Access to AI-generated educational podcasts",
      icon: <MessageSquare className="h-4 w-4" />,
      unlocked: currentLevel >= 5,
    },
    {
      level: 7,
      title: "Achievement Hunter",
      description: "Unlock special achievement challenges",
      icon: <Trophy className="h-4 w-4" />,
      unlocked: currentLevel >= 7,
    },
    {
      level: 10,
      title: "Advanced Learning",
      description: "Access to advanced quizzes and study materials",
      icon: <BookOpen className="h-4 w-4" />,
      unlocked: currentLevel >= 10,
    },
    {
      level: 12,
      title: "Podcast Creator",
      description: "Create and share your own AI podcasts",
      icon: <MessageSquare className="h-4 w-4" />,
      unlocked: currentLevel >= 12,
    },
    {
      level: 15,
      title: "Learning Accelerator",
      description: "Earn XP at 1.5x the normal rate",
      icon: <Zap className="h-4 w-4" />,
      unlocked: currentLevel >= 15,
    },
    {
      level: 20,
      title: "Master Scholar",
      description: "Access to all platform features and exclusive content",
      icon: <Trophy className="h-4 w-4" />,
      unlocked: currentLevel >= 20,
    },
  ];

  const filteredMilestones =
    selectedCategory === "all"
      ? milestones
      : selectedCategory === "unlocked"
      ? milestones.filter((m) => m.unlocked)
      : milestones.filter((m) => !m.unlocked);

  return (
    <Card className="backdrop-blur bg-background/80 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          <span>Level Milestones</span>
          <LevelBadge level={currentLevel} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setSelectedCategory}
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
            <TabsTrigger value="locked">Coming Soon</TabsTrigger>
          </TabsList>

          <div className="space-y-3">
            {filteredMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-md transition-all
                  ${
                    milestone.unlocked
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-muted/50 border border-muted"
                  }
                `}
              >
                <div
                  className={`rounded-full p-2 
                  ${
                    milestone.unlocked
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }
                `}
                >
                  {milestone.unlocked ? (
                    <Unlock className="h-4 w-4" />
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{milestone.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      Level {milestone.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
                <div
                  className={`rounded-full p-2
                  ${
                    milestone.unlocked
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }
                `}
                >
                  {milestone.icon}
                </div>
              </div>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}

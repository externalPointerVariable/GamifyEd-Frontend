import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Sparkles } from "lucide-react";
import ExperienceBar from "../components/ExperienceBar";
import LevelBadge from "../components/LevelBadge";

export default function LevelProgress({
  level,
  currentXP,
  nextLevelXP,
  rewards = [],
  className = "",
}) {
  const [showLevelUp, setShowLevelUp] = useState(false);
  const progress = Math.min(100, Math.round((currentXP / nextLevelXP) * 100));

  // Simulate level up animation when close to next level
  useEffect(() => {
    if (progress > 95) {
      const timer = setTimeout(() => {
        setShowLevelUp(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <Card
      className={`backdrop-blur bg-background/80 border-primary/20 overflow-hidden ${className}`}
    >
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LevelBadge level={level} showAnimation={showLevelUp} />
            <div className="text-sm text-muted-foreground">
              {currentXP} / {nextLevelXP} XP
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-yellow-500" />
              <span>
                {nextLevelXP - currentXP} XP to Level {level + 1}
              </span>
            </Badge>
          </div>
        </div>

        <div className="relative">
          <ExperienceBar
            progress={progress}
            width={window.innerWidth > 768 ? 600 : 300}
            height={60}
          />

          {/* Level markers */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-between px-[5%] items-center">
            <div className="flex flex-col items-center">
              <div className="h-2 w-0.5 bg-primary/30 mb-1"></div>
              <span className="text-xs text-muted-foreground">Lv.{level}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-2 w-0.5 bg-primary/30 mb-1"></div>
              <span className="text-xs text-muted-foreground">
                Lv.{level + 1}
              </span>
            </div>
          </div>
        </div>

        {rewards.length > 0 && (
          <div className="mt-2">
            <h4 className="text-sm font-medium mb-1">Next Level Rewards:</h4>
            <div className="flex flex-wrap gap-2">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {reward}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

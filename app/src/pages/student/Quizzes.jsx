import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import StudentSidebar from "../../components/StudentSidebar";

export default function StudentQuizzes() {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerateQuiz = () => {
    setIsGenerating(true);

    // You can also do an API call here if needed before redirecting

    setTimeout(() => {
      navigate("/student/quiz", {
        state: {
          topic,
          numQuestions,
        },
      });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] relative z-10">
        <StudentSidebar />
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Practice Quizzes</h1>
            <p className="text-muted-foreground">
              Generate AI-powered quizzes to test your knowledge
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Generate a New Quiz</CardTitle>
              <CardDescription>
                Our AI will create a personalized quiz based on your preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  placeholder="Enter a topic/topics e.g. Math, Science"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numQuestions">Number of Questions</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setNumQuestions(Math.max(1, numQuestions - 1))
                    }
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{numQuestions}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setNumQuestions(Math.min(20, numQuestions + 1))
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={handleGenerateQuiz}
                disabled={!topic || isGenerating}
              >
                {isGenerating ? "Redirecting..." : "Generate Quiz"}
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}

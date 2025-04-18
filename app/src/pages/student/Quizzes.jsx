import { useState } from "react";
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
  const [generatedQuiz, setGeneratedQuiz] = useState(null);

  const handleGenerateQuiz = async () => {
    setIsGenerating(true);
    try {
      // In a real implementation, this would use the AI SDK to generate a quiz
      // For demo purposes, we'll simulate a response
      setTimeout(() => {
        setGeneratedQuiz({
          title: `Quiz on ${topic}`,
          questions: [
            {
              question: "Sample question 1 about " + topic + "?",
              options: ["Option A", "Option B", "Option C", "Option D"],
              correctAnswer: "Option A",
            },
            {
              question: "Sample question 2 about " + topic + "?",
              options: ["Option A", "Option B", "Option C", "Option D"],
              correctAnswer: "Option B",
            },
            {
              question: "Sample question 3 about " + topic + "?",
              options: ["Option A", "Option B", "Option C", "Option D"],
              correctAnswer: "Option C",
            },
          ],
        });
        setIsGenerating(false);
      }, 2000);
    } catch (error) {
      console.error("Error generating quiz:", error);
      setIsGenerating(false);
    }
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

          {!generatedQuiz ? (
            <Card>
              <CardHeader>
                <CardTitle>Generate a New Quiz</CardTitle>
                <CardDescription>
                  Our AI will create a personalized quiz based on your
                  preferences
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
                  {isGenerating ? "Generating Quiz..." : "Generate Quiz"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{generatedQuiz.title}</CardTitle>
                  <CardDescription>
                    Test your knowledge with this AI-generated quiz
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {generatedQuiz.questions.map((q, i) => (
                    <div key={i} className="space-y-4">
                      <div className="font-medium">
                        {i + 1}. {q.question}
                      </div>
                      <div className="grid gap-2">
                        {q.options.map((option, j) => (
                          <div key={j} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`q${i}-option${j}`}
                              name={`question-${i}`}
                              className="h-4 w-4 rounded-full border-gray-300"
                            />
                            <Label htmlFor={`q${i}-option${j}`}>{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setGeneratedQuiz(null)}
                  >
                    Generate Another Quiz
                  </Button>
                  <Button>Submit Answers</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

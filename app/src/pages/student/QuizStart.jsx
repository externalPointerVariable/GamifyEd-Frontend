import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../components/ui/Card";
import { generateStudentQuiz } from "../../hooks/generateQuiz";
import { Button } from "../../components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/Dialog";
import { RadioGroup, RadioGroupItem } from "../../components/ui/Radiogroup";
import { Label } from "../../components/ui/Label";
import { Progress } from "../../components/ui/Progress";
import {
  X,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function QuizStart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic, numQuestions } = location.state || {};

  const [quiz, setQuiz] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (!topic || !numQuestions) {
      navigate("/student/quizzes");
      return;
    }

    const fetchQuiz = async () => {
      try {
        const response = await generateStudentQuiz(
          "University",
          [topic],
          numQuestions
        );
        const rawData = response; // Read raw data as text
        console.log("Raw Data:", rawData); // Log raw data for debugging
        const data = JSON.parse(rawData); // Parse the JSON

        // Check if data is an array
        if (Array.isArray(data)) {
          setQuiz(data);
          setLoading(false); // Set loading to false once the quiz data is fetched
        }
      } catch (error) {
        console.error("Failed to fetch or parse quiz:", error);
        navigate("/student/quizzes");
      }
    };

    fetchQuiz();
  }, [topic, numQuestions, navigate]);

  useEffect(() => {
    if (!quiz.length) return; // Ensure quiz data is available
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quiz]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleAnswerSelect = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitTest = () => {
    setIsSubmitting(true);
    const correct = answers.filter((a, i) => a === quiz[i].answer).length;
    const finalScore = Math.round((correct / quiz.length) * 100);
    setScore(finalScore);
    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleExitTest = () => navigate("/student/quizzes");

  if (loading || !quiz.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold animate-pulse">
          Generating your quiz...
        </p>
      </div>
    );
  }

  if (showResults) {
    const correctCount = answers.filter((a, i) => a === quiz[i].answer).length;
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 p-4">
        <Card className="w-full max-w-3xl backdrop-blur bg-background/95 border-primary/20 overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{topic} - Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="flex flex-col items-center justify-center py-8">
              {score >= 70 ? (
                <div className="rounded-full bg-green-500/20 p-6 mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
              ) : (
                <div className="rounded-full bg-amber-500/20 p-6 mb-4">
                  <AlertCircle className="h-16 w-16 text-amber-500" />
                </div>
              )}
              <h2 className="text-3xl font-bold mb-2">Your Score: {score}%</h2>
              <p className="text-muted-foreground mb-4">
                You answered {correctCount} out of {quiz.length} questions
                correctly.
              </p>
              <div className="w-full max-w-md mb-6">
                <Progress value={score} className="h-3" />
              </div>
              <p className="text-sm text-muted-foreground">
                {score >= 90
                  ? "Excellent work! You've mastered this material."
                  : score >= 70
                  ? "Good job! You have a solid understanding of the material."
                  : score >= 50
                  ? "You're on the right track, but might need some review."
                  : "You might need additional help with this material. Don't give up!"}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={handleExitTest}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
            >
              Return to Classroom
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20">
      <Dialog open={showExitConfirm} onOpenChange={setShowExitConfirm}>
        <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
          <DialogHeader className="relative">
            <DialogTitle>Exit Test?</DialogTitle>
            <DialogDescription>
              Are you sure you want to exit? Your progress will be lost.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="relative">
            <Button variant="outline" onClick={() => setShowExitConfirm(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleExitTest}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Exit Test
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Test header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowExitConfirm(true)}
              className="hover:bg-destructive/10"
            >
              <X className="h-5 w-5" />
            </Button>
            <h1 className="font-semibold">{test.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span
                className={`text-sm font-medium ${
                  timeLeft < 60 ? "text-destructive" : ""
                }`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
              <span className="text-sm font-medium">
                {currentQuestion + 1}/{test.questions.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Test content */}
      <main className="flex-1 container py-6 max-w-4xl">
        <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
          <CardHeader className="relative">
            <CardTitle className="text-xl">
              Question {currentQuestion + 1}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative space-y-6">
            <div className="text-lg font-medium">
              {test.questions[currentQuestion].question}
            </div>

            <RadioGroup
              value={answers[currentQuestion]?.toString() || ""}
              onValueChange={(value) =>
                handleAnswerSelect(Number.parseInt(value))
              }
              className="space-y-3"
            >
              {test.questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50"
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="relative flex justify-between">
            <Button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="gap-1"
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>

            <div className="flex gap-2">
              {currentQuestion === test.questions.length - 1 ? (
                <Button
                  onClick={handleSubmitTest}
                  disabled={isSubmitting || answers.some((a) => a === -1)}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                >
                  {isSubmitting ? "Submitting..." : "Submit Test"}
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  variant="outline"
                  className="gap-1"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>

        {/* Question navigation */}
        <div className="mt-6 grid grid-cols-10 gap-2">
          {test.questions.map((_, index) => (
            <Button
              key={index}
              variant={
                index === currentQuestion
                  ? "default"
                  : answers[index] !== -1
                  ? "outline"
                  : "ghost"
              }
              className={`h-10 w-10 p-0 ${
                answers[index] !== -1 && index !== currentQuestion
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : ""
              }`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default QuizStart;

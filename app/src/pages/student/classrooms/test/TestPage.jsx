import { DialogFooter } from "../../../../components/ui/Dialog";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/Card";
import { Progress } from "../../../../components/ui/Progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/Radiogroup";
import { Label } from "../../../../components/ui/Label";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/Dialog";

// Mock test data - in a real app, this would come from an API
const testsData = {
  1: {
    id: 1,
    title: "Algebra Quiz",
    description: "Covers linear equations, polynomials, and factoring.",
    timeLimit: 30, // minutes
    questions: [
      {
        id: 1,
        question: "Solve for x: 2x + 5 = 13",
        options: ["x = 3", "x = 4", "x = 5", "x = 6"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Factor the expression: x² - 9",
        options: ["(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x - 3)²", "(x + 3)²"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which of the following is a polynomial?",
        options: ["1/x + 2", "x² + 3x + 2", "√x + 1", "1/x²"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Simplify: (2x³)(3x²)",
        options: ["5x⁵", "6x⁵", "6x⁶", "5x⁶"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Solve the inequality: 3x - 7 > 2",
        options: ["x > 3", "x < 3", "x > 9/3", "x < 9/3"],
        correctAnswer: 0,
      },
    ],
  },
  2: {
    id: 2,
    title: "Chemistry Quiz",
    description:
      "Covers chemical reactions, balancing equations, and molecular structures.",
    timeLimit: 45, // minutes
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Which of the following is a noble gas?",
        options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "What is the pH of a neutral solution?",
        options: ["0", "7", "14", "1"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Balance this equation: __H₂ + __O₂ → __H₂O",
        options: ["1, 1, 1", "2, 1, 2", "1, 2, 2", "2, 2, 2"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which of these is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Element"],
        correctAnswer: 3,
      },
    ],
  },
};

export default function TestPage() {
  const params = useParams();
  const router = useNavigate();
  const classroomId = params.id;
  const testId = params.testId;
  const test = testsData[testId];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(test?.questions.length).fill(-1)
  );
  const [timeLeft, setTimeLeft] = useState(test?.timeLimit * 60 || 0); // in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [score, setScore] = useState(0);

  // Format time remaining
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle timer
  useEffect(() => {
    if (!showResults && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitTest();
    }
  }, [timeLeft, showResults]);

  // Handle answer selection
  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Navigate to previous question
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Submit test
  const handleSubmitTest = () => {
    setIsSubmitting(true);

    // Calculate score
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === test.questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round(
      (correctAnswers / test.questions.length) * 100
    );
    setScore(finalScore);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 1500);
  };

  // Exit test
  const handleExitTest = () => {
    router(`/student/classrooms/${classroomId}`);
  };

  if (!test) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Test not found</h1>
        <Button asChild className="mt-4">
          <a href={`/student/classrooms/${classroomId}`}>Back to Classroom</a>
        </Button>
      </div>
    );
  }

  // Show results screen
  if (showResults) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 p-4">
        <Card className="w-full max-w-3xl backdrop-blur bg-background/95 border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
          <CardHeader className="relative text-center">
            <CardTitle className="text-2xl">{test.title} - Results</CardTitle>
          </CardHeader>
          <CardContent className="relative space-y-6 text-center">
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
                You answered{" "}
                {
                  answers.filter(
                    (a, i) => a === test.questions[i].correctAnswer
                  ).length
                }{" "}
                out of {test.questions.length} questions correctly.
              </p>

              <div className="w-full max-w-md mb-6">
                <Progress value={score} className="h-3" />
              </div>

              <div className="grid gap-2">
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
            </div>
          </CardContent>
          <CardFooter className="relative flex justify-center">
            <Button
              onClick={handleExitTest}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
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
      {/* Exit confirmation dialog */}
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/Card";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";
import { Textarea } from "../../../components/ui/Textarea";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Plus,
  Settings,
  Trash,
  User,
  Users,
  Loader2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/Select";

export default function QuizzesPage() {
  const router = useNavigate();
  const [quizTitle, setQuizTitle] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    },
  ]);

  // Add this state for AI generation
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [showAIOptions, setShowAIOptions] = useState(false);

  const addClass = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
      },
    ]);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "question") {
      updatedQuestions[index].question = value;
    } else if (field.startsWith("option")) {
      const optionIndex = Number.parseInt(field.replace("option", ""));
      updatedQuestions[index].options[optionIndex] = value;
    } else if (field === "correctAnswer") {
      updatedQuestions[index].correctAnswer = Number.parseInt(value);
    }
    setQuestions(updatedQuestions);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px] py-6">
          <nav className="grid items-start gap-2">
            <Link href="/teacher/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/teacher/classes">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Classes
              </Button>
            </Link>
            <Link href="/teacher/quizzes">
              <Button
                variant="secondary"
                className="w-full justify-start gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Test Quizzes
              </Button>
            </Link>
            <Link href="/teacher/podcasts">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                AI Podcasts
              </Button>
            </Link>
            <Link href="/teacher/calendar">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Calendar
              </Button>
            </Link>
            <Link href="/teacher/settings">
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
            <h1 className="text-3xl font-bold">Create Test Quiz</h1>
            <p className="text-muted-foreground">
              Design a quiz to assess your students' understanding
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quiz Details</CardTitle>
              <CardDescription>
                Set up the basic information for your quiz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Quiz Title</Label>
                <Input
                  id="title"
                  placeholder="Enter a title for your quiz"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Assign to Class</Label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger id="class">
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math101">Math 101</SelectItem>
                    <SelectItem value="science202">Science 202</SelectItem>
                    <SelectItem value="history101">History 101</SelectItem>
                    <SelectItem value="physics101">Physics 101</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add a description or instructions for your students"
                />
              </div>
            </CardContent>
          </Card>

          {questions.map((question, qIndex) => (
            <Card key={qIndex}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle>Question {qIndex + 1}</CardTitle>
                  <CardDescription>
                    Create a multiple-choice question
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeQuestion(qIndex)}
                  disabled={questions.length === 1}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`question-${qIndex}`}>Question</Label>
                  <Textarea
                    id={`question-${qIndex}`}
                    placeholder="Enter your question here"
                    value={question.question}
                    onChange={(e) =>
                      updateQuestion(qIndex, "question", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-4">
                  <Label>Answer Options</Label>
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={`q${qIndex}-option${oIndex}`}
                        name={`question-${qIndex}-correct`}
                        checked={question.correctAnswer === oIndex}
                        onChange={() =>
                          updateQuestion(qIndex, "correctAnswer", oIndex)
                        }
                        className="h-4 w-4"
                      />
                      <Input
                        placeholder={`Option ${oIndex + 1}`}
                        value={option}
                        onChange={(e) =>
                          updateQuestion(
                            qIndex,
                            `option${oIndex}`,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center">
            <Button variant="outline" onClick={addClass} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Question
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Assistance</CardTitle>
              <CardDescription>
                Let AI help you generate questions or improve your quiz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ai-prompt">Prompt for AI</Label>
                <Textarea
                  id="ai-prompt"
                  placeholder="Describe what kind of questions you want the AI to generate (e.g., 'Generate 5 multiple-choice questions about photosynthesis for high school students')"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
              </div>
              {showAIOptions && (
                <div className="space-y-4 p-4 border rounded-md bg-muted/50">
                  <div className="space-y-2">
                    <Label htmlFor="ai-difficulty">Difficulty Level</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="ai-difficulty">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ai-question-count">
                      Number of Questions
                    </Label>
                    <Select defaultValue="5">
                      <SelectTrigger id="ai-question-count">
                        <SelectValue placeholder="Select count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 Questions</SelectItem>
                        <SelectItem value="5">5 Questions</SelectItem>
                        <SelectItem value="10">10 Questions</SelectItem>
                        <SelectItem value="15">15 Questions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => {
                        setIsGeneratingAI(true);
                        // Simulate AI generation
                        setTimeout(() => {
                          setQuizTitle(
                            "AI Generated: " +
                              aiPrompt.substring(0, 30) +
                              (aiPrompt.length > 30 ? "..." : "")
                          );
                          setQuestions([
                            {
                              question: "This is an AI-generated question 1",
                              options: [
                                "Option A",
                                "Option B",
                                "Option C",
                                "Option D",
                              ],
                              correctAnswer: 1,
                            },
                            {
                              question: "This is an AI-generated question 2",
                              options: [
                                "Option A",
                                "Option B",
                                "Option C",
                                "Option D",
                              ],
                              correctAnswer: 0,
                            },
                            {
                              question: "This is an AI-generated question 3",
                              options: [
                                "Option A",
                                "Option B",
                                "Option C",
                                "Option D",
                              ],
                              correctAnswer: 2,
                            },
                            {
                              question: "This is an AI-generated question 4",
                              options: [
                                "Option A",
                                "Option B",
                                "Option C",
                                "Option D",
                              ],
                              correctAnswer: 3,
                            },
                            {
                              question: "This is an AI-generated question 5",
                              options: [
                                "Option A",
                                "Option B",
                                "Option C",
                                "Option D",
                              ],
                              correctAnswer: 1,
                            },
                          ]);
                          setIsGeneratingAI(false);
                          setShowAIOptions(false);
                        }, 2000);
                      }}
                      disabled={!aiPrompt.trim() || isGeneratingAI}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                    >
                      {isGeneratingAI ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        "Generate Quiz"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setShowAIOptions(true)}
                disabled={!aiPrompt.trim() || showAIOptions}
              >
                Generate Complete Quiz
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  // Simulate improving existing questions
                  if (questions.length > 0) {
                    setIsGeneratingAI(true);
                    setTimeout(() => {
                      setQuestions(
                        questions.map((q) => ({
                          ...q,
                          question: "Improved: " + q.question,
                        }))
                      );
                      setIsGeneratingAI(false);
                    }, 1500);
                  }
                }}
                disabled={questions.length === 0 || isGeneratingAI}
              >
                {isGeneratingAI ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Improving...
                  </>
                ) : (
                  "Improve Existing Questions"
                )}
              </Button>
            </CardFooter>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Save as Draft</Button>
            <Button
              onClick={() => {
                if (selectedClass && quizTitle) {
                  // Navigate to class assignment page
                  router(
                    `/teacher/classes/${selectedClass}/assign?title=${encodeURIComponent(
                      quizTitle
                    )}`
                  );
                }
              }}
              disabled={!selectedClass || !quizTitle}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
            >
              Assign Quiz
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

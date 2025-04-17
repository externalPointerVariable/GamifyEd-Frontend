import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Button } from "../../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/Card"
import { Input } from "../../../../components/ui/Input"
import { Label } from "../../../../components/ui/Label"
import { Textarea } from "../../../../components/ui/Textarea"
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
  ArrowLeft,
  Loader2,
  Sparkles,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/Select"
import { Slider } from "../../../../components/ui/Slider"
import { Switch } from "../../../../components/ui/Switch"
import ThreeBackground from "../../../../components/ThreeBackground"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/Tabs"

export default function GenerateQuizPage() {
  const router = useNavigate()
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("")
  const [difficulty, setDifficulty] = useState("medium")
  const [numQuestions, setNumQuestions] = useState(10)
  const [additionalInstructions, setAdditionalInstructions] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedQuiz, setGeneratedQuiz] = useState(null)

  // For the improve existing questions tab
  const [existingQuestions, setExistingQuestions] = useState("")
  const [isImproving, setIsImproving] = useState(false)

  const handleGenerateQuiz = () => {
    setIsGenerating(true)
    // Simulate API call to generate quiz
    setTimeout(() => {
      const mockGeneratedQuiz = {
        title: `${subject}: ${topic}`,
        questions: [
          {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correctAnswer: 2,
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1,
          },
          {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: 2,
          },
          {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correctAnswer: 1,
          },
          {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: 3,
          },
        ],
      }
      setGeneratedQuiz(mockGeneratedQuiz)
      setIsGenerating(false)
    }, 3000)
  }

  const handleImproveQuestions = () => {
    setIsImproving(true)
    // Simulate API call to improve questions
    setTimeout(() => {
      setIsImproving(false)
      // In a real app, this would return improved questions
      router("/teacher/quizzes")
    }, 3000)
  }

  const handleSaveQuiz = () => {
    // In a real app, this would save the quiz to the database
    router("/teacher/quizzes")
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
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
              <Button variant="secondary" className="w-full justify-start gap-2">
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
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                <Link href="/teacher/quizzes">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">AI Quiz Generation</h1>
            </div>

            <Tabs defaultValue="generate" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
                <TabsTrigger
                  value="generate"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Generate Complete Quiz
                </TabsTrigger>
                <TabsTrigger
                  value="improve"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Improve Existing Questions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="generate" className="space-y-4 pt-4">
                {!generatedQuiz ? (
                  <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                    <CardHeader className="relative">
                      <CardTitle>Generate a New Quiz</CardTitle>
                      <CardDescription>Our AI will create a quiz based on your specifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      <div className="space-y-2">
                        <Label htmlFor="topic">Topic</Label>
                        <Input
                          id="topic"
                          placeholder="Enter a specific topic (e.g., Photosynthesis, World War II, Algebra)"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select value={subject} onValueChange={setSubject}>
                          <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mathematics">Mathematics</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="history">History</SelectItem>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="physics">Physics</SelectItem>
                            <SelectItem value="chemistry">Chemistry</SelectItem>
                            <SelectItem value="biology">Biology</SelectItem>
                            <SelectItem value="computer_science">Computer Science</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Difficulty</Label>
                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant={difficulty === "easy" ? "default" : "outline"}
                            onClick={() => setDifficulty("easy")}
                            className={
                              difficulty === "easy"
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0"
                                : ""
                            }
                          >
                            Easy
                          </Button>
                          <Button
                            type="button"
                            variant={difficulty === "medium" ? "default" : "outline"}
                            onClick={() => setDifficulty("medium")}
                            className={
                              difficulty === "medium"
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0"
                                : ""
                            }
                          >
                            Medium
                          </Button>
                          <Button
                            type="button"
                            variant={difficulty === "hard" ? "default" : "outline"}
                            onClick={() => setDifficulty("hard")}
                            className={
                              difficulty === "hard"
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0"
                                : ""
                            }
                          >
                            Hard
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="numQuestions">Number of Questions: {numQuestions}</Label>
                        </div>
                        <Slider
                          id="numQuestions"
                          min={5}
                          max={20}
                          step={1}
                          value={[numQuestions]}
                          onValueChange={(value) => setNumQuestions(value[0])}
                          className="py-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>5</span>
                          <span>20</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInstructions">Additional Instructions (Optional)</Label>
                        <Textarea
                          id="additionalInstructions"
                          placeholder="Any specific requirements or focus areas for the quiz"
                          value={additionalInstructions}
                          onChange={(e) => setAdditionalInstructions(e.target.value)}
                          className="min-h-[100px] border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Quiz Options</Label>
                        </div>
                        <div className="space-y-2 rounded-md border p-4 border-primary/20">
                          <div className="flex items-center space-x-2">
                            <Switch id="multipleChoice" defaultChecked />
                            <Label htmlFor="multipleChoice">Include multiple choice questions</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="trueFalse" />
                            <Label htmlFor="trueFalse">Include true/false questions</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="shortAnswer" />
                            <Label htmlFor="shortAnswer">Include short answer questions</Label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-4 relative">
                      <Button variant="outline" asChild>
                        <Link href="/teacher/quizzes">Cancel</Link>
                      </Button>
                      <Button
                        onClick={handleGenerateQuiz}
                        disabled={!topic || !subject || isGenerating}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Generate Quiz
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                    <CardHeader className="relative">
                      <CardTitle>Generated Quiz: {generatedQuiz.title}</CardTitle>
                      <CardDescription>Review and edit the AI-generated quiz before saving</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 relative">
                      {generatedQuiz.questions.map((question, qIndex) => (
                        <div key={qIndex} className="space-y-3 p-4 rounded-md border border-primary/20">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Question {qIndex + 1}</h3>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                          <p>{question.question}</p>
                          <div className="space-y-2 pl-4">
                            {question.options.map((option, oIndex) => (
                              <div key={oIndex} className="flex items-center gap-2">
                                <div
                                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${oIndex === question.correctAnswer ? "bg-green-500 text-white" : "bg-muted"}`}
                                >
                                  {String.fromCharCode(65 + oIndex)}
                                </div>
                                <span className={oIndex === question.correctAnswer ? "font-medium" : ""}>{option}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter className="flex justify-between relative">
                      <Button variant="outline" onClick={() => setGeneratedQuiz(null)}>
                        Generate Again
                      </Button>
                      <Button
                        onClick={handleSaveQuiz}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                      >
                        Save Quiz
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="improve" className="space-y-4 pt-4">
                <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                  <CardHeader className="relative">
                    <CardTitle>Improve Existing Questions</CardTitle>
                    <CardDescription>Paste your existing questions and our AI will enhance them</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="space-y-2">
                      <Label htmlFor="existingQuestions">Existing Questions</Label>
                      <Textarea
                        id="existingQuestions"
                        placeholder="Paste your existing quiz questions here (one per line)"
                        value={existingQuestions}
                        onChange={(e) => setExistingQuestions(e.target.value)}
                        className="min-h-[200px] border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Improvement Options</Label>
                      <div className="space-y-2 rounded-md border p-4 border-primary/20">
                        <div className="flex items-center space-x-2">
                          <Switch id="clarify" defaultChecked />
                          <Label htmlFor="clarify">Clarify wording</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="addOptions" defaultChecked />
                          <Label htmlFor="addOptions">Improve answer options</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="difficulty" defaultChecked />
                          <Label htmlFor="difficulty">Adjust difficulty</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="grammar" defaultChecked />
                          <Label htmlFor="grammar">Fix grammar and spelling</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-4 relative">
                    <Button variant="outline" asChild>
                      <Link href="/teacher/quizzes">Cancel</Link>
                    </Button>
                    <Button
                      onClick={handleImproveQuestions}
                      disabled={!existingQuestions.trim() || isImproving}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                    >
                      {isImproving ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Improving...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Improve Questions
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

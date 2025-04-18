import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Settings,
  Trophy,
  User,
} from "lucide-react";
import StudentSidebar from "../../components/StudentSidebar";

export default function Quizzes() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [numQuestions, setNumQuestions] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);

  const handleGenerateQuiz = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedQuiz({
        title: `Quiz on ${topic}`,
        questions: Array.from({ length: numQuestions }).map((_, i) => ({
          question: `Sample question ${i + 1} about ${topic}?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "Option A",
        })),
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      <div className="container mx-auto flex flex-1 gap-6 px-4 py-6 md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] relative z-10">
        <StudentSidebar />

        <main className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">Practice Quizzes</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Generate AI-powered quizzes to test your knowledge
            </p>
          </div>

          {!generatedQuiz ? (
            <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 space-y-4 shadow">
              <h2 className="text-xl font-semibold">Generate a New Quiz</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI will create a personalized quiz based on your preferences
              </p>
              <div className="space-y-2">
                <label htmlFor="topic" className="font-medium">
                  Topic
                </label>
                <input
                  id="topic"
                  type="text"
                  className="input"
                  placeholder="Enter a topic (e.g., Algebra)"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Difficulty</label>
                <div className="flex gap-4">
                  {["easy", "medium", "hard"].map((level) => (
                    <button
                      key={level}
                      className={`px-4 py-2 rounded ${
                        difficulty === level
                          ? "bg-blue-600 text-white"
                          : "border"
                      }`}
                      onClick={() => setDifficulty(level)}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="numQuestions" className="font-medium">
                  Number of Questions
                </label>
                <div className="flex items-center gap-4">
                  <button
                    className="btn-icon"
                    onClick={() =>
                      setNumQuestions(Math.max(1, numQuestions - 1))
                    }
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{numQuestions}</span>
                  <button
                    className="btn-icon"
                    onClick={() =>
                      setNumQuestions(Math.min(20, numQuestions + 1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="additional" className="font-medium">
                  Additional Instructions
                </label>
                <textarea
                  id="additional"
                  className="input min-h-[80px]"
                  placeholder="Optional: Focus areas or custom instructions"
                />
              </div>

              <button
                onClick={handleGenerateQuiz}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                disabled={!topic || isGenerating}
              >
                {isGenerating ? "Generating Quiz..." : "Generate Quiz"}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 shadow space-y-6">
                <h2 className="text-xl font-semibold">{generatedQuiz.title}</h2>
                {generatedQuiz.questions.map((q, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-medium">
                      {i + 1}. {q.question}
                    </p>
                    <div className="grid gap-2">
                      {q.options.map((option, j) => (
                        <label key={j} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={`q${i}`}
                            className="accent-blue-600"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between pt-4">
                  <button
                    className="px-4 py-2 border rounded"
                    onClick={() => setGeneratedQuiz(null)}
                  >
                    Generate Another Quiz
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Submit Answers
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

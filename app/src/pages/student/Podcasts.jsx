import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  LogOut,
  MessageSquare,
  Pause,
  Play,
  Settings,
  Trophy,
  User,
} from "lucide-react";
import StudentSidebar from "../../components/StudentSidebar";

export default function Podcasts() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPodcast, setGeneratedPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGeneratePodcast = async () => {
    setIsGenerating(true);
    try {
      setTimeout(() => {
        setGeneratedPodcast({
          title: `Podcast on ${topic}`,
          duration: `${duration} minutes`,
          description: `This AI-generated podcast covers key concepts about ${topic} in an engaging and informative way.`,
        });
        setIsGenerating(false);
      }, 2000);
    } catch (error) {
      console.error("Error generating podcast:", error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="container grid flex-1 gap-6 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] relative z-10">
        <StudentSidebar />
        <main className="flex flex-col gap-6 py-6 px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">AI Podcasts</h1>
            <p className="text-muted-foreground">
              Convert study materials into audio content for easy learning
            </p>
          </div>

          {!generatedPodcast ? (
            <div className="rounded-lg border p-6 space-y-6 shadow-sm bg-white dark:bg-gray-900">
              <div>
                <h2 className="text-xl font-semibold">
                  Generate a New Podcast
                </h2>
                <p className="text-sm text-muted-foreground">
                  Our AI will create an educational podcast based on your
                  preferences
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium mb-1"
                  >
                    Topic
                  </label>
                  <input
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., World War II, Algebra, Solar System"
                    className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="duration"
                    className="block text-sm font-medium mb-1"
                  >
                    Duration (minutes)
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setDuration(Math.max(5, duration - 5))}
                    >
                      -
                    </button>
                    <span>{duration}</span>
                    <button
                      type="button"
                      className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setDuration(Math.min(30, duration + 5))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium mb-1"
                  >
                    Study Material (Optional)
                  </label>
                  <textarea
                    id="content"
                    className="w-full min-h-[150px] px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
                    placeholder="Paste your notes, textbook excerpts, or other study materials here"
                  ></textarea>
                </div>
              </div>
              <button
                onClick={handleGeneratePodcast}
                disabled={!topic || isGenerating}
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isGenerating ? "Generating Podcast..." : "Generate Podcast"}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-900">
                <h2 className="text-xl font-semibold">
                  {generatedPodcast.title}
                </h2>
                <p className="text-muted-foreground">
                  {generatedPodcast.description}
                </p>

                <div className="mt-6 flex flex-col items-center space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 w-full text-center">
                    <div className="text-4xl mb-2">🎙️</div>
                    <p className="text-muted-foreground">
                      Duration: {generatedPodcast.duration}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  <div className="w-full">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="0"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>{generatedPodcast.duration}</span>
                    </div>
                  </div>

                  <div className="flex justify-between w-full mt-4">
                    <button
                      onClick={() => setGeneratedPodcast(null)}
                      className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Generate Another Podcast
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Download Audio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

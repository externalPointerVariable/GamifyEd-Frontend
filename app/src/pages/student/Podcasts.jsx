import { useState, useRef, useEffect } from "react";
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
import { Pause, Play } from "lucide-react";
import StudentSidebar from "../../components/StudentSidebar";
import generatePodcast from "../../hooks/generatePodcast";

export default function StudentPodcasts() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPodcast, setGeneratedPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const handleGeneratePodcast = async () => {
    setIsGenerating(true);
    try {
      // Pass the topic to the hook if needed
      const response = await generatePodcast(topic);
      const data = await response.json();
      if (data && data.length > 0) {
        // The API returns an array; we extract the first podcast.
        setGeneratedPodcast(data[0]);
      }
    } catch (error) {
      console.error("Error generating podcast:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // When a podcast is generated, control audio play/pause based on isPlaying.
  useEffect(() => {
    if (generatedPodcast && audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, generatedPodcast]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <StudentSidebar />
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">AI Podcasts</h1>
            <p className="text-muted-foreground">
              Convert topics into audio content for easy learning
            </p>
          </div>

          {!generatedPodcast ? (
            <Card>
              <CardHeader>
                <CardTitle>Generate a New Podcast</CardTitle>
                <CardDescription>
                  Our AI will create an educational podcast based on your
                  preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    placeholder="Enter a subject or topic (e.g., World War II, Algebra, Solar System)"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={handleGeneratePodcast}
                  disabled={!topic || isGenerating}
                >
                  {isGenerating ? "Generating Podcast..." : "Generate Podcast"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  {/* Using "name" instead of "title" */}
                  <CardTitle>{generatedPodcast.name}</CardTitle>
                  <CardDescription>
                    {generatedPodcast.content.slice(0,-20)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        onClick={() => setIsPlaying((prev) => !prev)}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setGeneratedPodcast(null);
                      setIsPlaying(false);
                      setDuration(0);
                    }}
                  >
                    Generate Another Podcast
                  </Button>
                  <Button
                    as="a"
                    variant="default"
                    href={generatedPodcast.podcasturl}
                    download
                  >
                    Download Audio
                  </Button>
                </CardFooter>
              </Card>
              {generatedPodcast && (
                <audio
                  ref={audioRef}
                  src={generatedPodcast.podcasturl}
                  onLoadedMetadata={(e) => setDuration(e.target.duration)}
                />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
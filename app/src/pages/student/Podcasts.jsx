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
import { Pause, Play } from "lucide-react";
import { Slider } from "../../components/ui/Slider";
import StudentSidebar from "../../components/StudentSidebar";
import generatePodcast from "../../hooks/generatePodcast";

export default function StudentPodcasts() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPodcast, setGeneratedPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGeneratePodcast = async () => {
    setIsGenerating(true);
    try {
      const response  = await generatePodcast();
      setTopic(response.name);
    } catch (error) {
      console.error("Error generating podcast:", error);
      setIsGenerating(false);
    }
  };

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
                <div className="space-y-2"></div>
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
                  <CardTitle>{generatedPodcast.title}</CardTitle>
                  <CardDescription>
                    {generatedPodcast.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Slider defaultValue={[0]} max={100} step={1} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0:00</span>
                        <span>{generatedPodcast.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setGeneratedPodcast(null)}
                  >
                    Generate Another Podcast
                  </Button>
                  <Button>Download Audio</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

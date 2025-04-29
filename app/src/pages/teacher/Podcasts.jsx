import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Plus, Play, Pause, Clock, MoreHorizontal } from "lucide-react";
import ThreeBackground from "../../components/ThreeBackground";
import { Input } from "../../components/ui/Input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/Tabs";
import { Textarea } from "../../components/ui/Textarea";
import { Label } from "../../components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/Select";
import { Slider } from "../../components/ui/Slider";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/Dropdown";
import TeacherSidebar from "../../components/TeacherSidebar";

export default function TeacherPodcasts() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState(15);
  const [voice, setVoice] = useState("neutral");
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [playingId, setPlayingId] = useState(null);

  // Sample podcast data
  const podcasts = [
    {
      id: 1,
      title: "Introduction to Calculus",
      subject: "Mathematics",
      duration: "15:24",
      createdAt: "2025-03-15",
      shared: 12,
      class: "Math 101",
      description:
        "An overview of calculus fundamentals including limits, derivatives, and integrals.",
    },
    {
      id: 2,
      title: "World War II Overview",
      subject: "History",
      duration: "20:15",
      createdAt: "2025-03-18",
      shared: 8,
      class: "History 101",
      description:
        "A comprehensive look at the causes, major events, and aftermath of World War II.",
    },
    {
      id: 3,
      title: "Understanding Gravity",
      subject: "Physics",
      duration: "18:32",
      createdAt: "2025-03-20",
      shared: 5,
      class: "Physics 101",
      description:
        "Exploring Newton's law of universal gravitation and Einstein's theory of general relativity.",
    },
    {
      id: 4,
      title: "Cell Biology Basics",
      subject: "Biology",
      duration: "22:10",
      createdAt: "2025-03-22",
      shared: 7,
      class: "Science 202",
      description:
        "An introduction to cell structure, function, and the fundamental processes of cellular biology.",
    },
  ];

  // Filter podcasts based on search query
  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGeneratePodcast = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // In a real app, you would add the new podcast to the list
    }, 2000);
  };

  const togglePlay = (id) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] realtive z-10">
        <TeacherSidebar />
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Podcasts</h1>
              <p className="text-muted-foreground">
                Create and manage educational audio content
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0">
                  <Plus className="h-4 w-4" />
                  Generate Podcast
                </Button>
              </DialogTrigger>
              <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:via-violet-500/10 dark:to-indigo-500/10 rounded-lg pointer-events-none"></div>
                <DialogHeader className="relative">
                  <DialogTitle>Generate AI Podcast</DialogTitle>
                  <DialogDescription>
                    Create an educational podcast for your students.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 relative">
                  <div className="grid gap-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Input
                      id="topic"
                      placeholder="Enter a subject or topic (e.g., World War II, Algebra, Solar System)"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="class">Class</Label>
                    <Select>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math101">Math 101</SelectItem>
                        <SelectItem value="science202">Science 202</SelectItem>
                        <SelectItem value="history101">History 101</SelectItem>
                        <SelectItem value="physics101">Physics 101</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="duration">
                        Duration (minutes): {duration}
                      </Label>
                    </div>
                    <Slider
                      id="duration"
                      min={5}
                      max={30}
                      step={5}
                      value={[duration]}
                      onValueChange={(value) => setDuration(value[0])}
                      className="py-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5 min</span>
                      <span>30 min</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="voice">Voice Style</Label>
                    <Select value={voice} onValueChange={setVoice}>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                        <SelectValue placeholder="Select voice style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="neutral">Neutral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">
                      Additional Content (Optional)
                    </Label>
                    <Textarea
                      id="content"
                      placeholder="Paste your notes, textbook excerpts, or other content to include in the podcast"
                      className="min-h-[100px] border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>
                <DialogFooter className="relative">
                  <Button
                    onClick={handleGeneratePodcast}
                    disabled={!topic.trim() || isGenerating}
                    className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0"
                  >
                    {isGenerating ? "Generating..." : "Generate Podcast"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Search podcasts..."
                className="border-primary/20 focus-visible:ring-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
              >
                All Podcasts
              </TabsTrigger>
              <TabsTrigger
                value="recent"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
              >
                Recently Created
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-600 data-[state=active]:text-white"
              >
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredPodcasts.map((podcast) => (
                  <Card
                    key={podcast.id}
                    className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:via-violet-500/10 dark:to-indigo-500/10 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="pb-2 relative">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">
                          {podcast.title}
                        </CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Podcast</DropdownMenuItem>
                            <DropdownMenuItem>
                              Share with Class
                            </DropdownMenuItem>
                            <DropdownMenuItem>Download Audio</DropdownMenuItem>
                            <DropdownMenuItem>Delete Podcast</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 text-purple-500 border-purple-500/20"
                        >
                          {podcast.subject}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-primary/10 border-primary/20"
                        >
                          {podcast.class}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-sm text-muted-foreground mb-4">
                        {podcast.description}
                      </p>

                      <div className="rounded-lg bg-muted/50 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0 hover:opacity-90"
                            onClick={() => togglePlay(podcast.id)}
                          >
                            {playingId === podcast.id ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                          <div>
                            <div className="h-1.5 w-48 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-violet-600"
                                style={{
                                  width:
                                    playingId === podcast.id ? "45%" : "0%",
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>
                                {playingId === podcast.id ? "3:25" : "0:00"}
                              </span>
                              <span>{podcast.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {podcast.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span>
                            Created:{" "}
                            {new Date(podcast.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span>Shared: {podcast.shared} times</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="relative">
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <Button
                          variant="outline"
                          className="border-purple-500/20 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                        >
                          Edit
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0">
                          Share
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredPodcasts
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .slice(0, 2)
                  .map((podcast) => (
                    <Card
                      key={podcast.id}
                      className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:via-violet-500/10 dark:to-indigo-500/10 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2 relative">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">
                            {podcast.title}
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Podcast</DropdownMenuItem>
                              <DropdownMenuItem>
                                Share with Class
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Download Audio
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Delete Podcast
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-purple-500/10 text-purple-500 border-purple-500/20"
                          >
                            {podcast.subject}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 border-primary/20"
                          >
                            {podcast.class}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-sm text-muted-foreground mb-4">
                          {podcast.description}
                        </p>

                        <div className="rounded-lg bg-muted/50 p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0 hover:opacity-90"
                              onClick={() => togglePlay(podcast.id)}
                            >
                              {playingId === podcast.id ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                            <div>
                              <div className="h-1.5 w-48 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-purple-500 to-violet-600"
                                  style={{
                                    width:
                                      playingId === podcast.id ? "45%" : "0%",
                                  }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>
                                  {playingId === podcast.id ? "3:25" : "0:00"}
                                </span>
                                <span>{podcast.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {podcast.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <span>
                              Created:{" "}
                              {new Date(podcast.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <span>Shared: {podcast.shared} times</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="relative">
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <Button
                            variant="outline"
                            className="border-purple-500/20 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            Edit
                          </Button>
                          <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0">
                            Share
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="shared" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredPodcasts
                  .filter((podcast) => podcast.shared > 0)
                  .sort((a, b) => b.shared - a.shared)
                  .map((podcast) => (
                    <Card
                      key={podcast.id}
                      className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-violet-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:via-violet-500/10 dark:to-indigo-500/10 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                      <CardHeader className="pb-2 relative">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">
                            {podcast.title}
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Podcast</DropdownMenuItem>
                              <DropdownMenuItem>
                                Share with Class
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Download Audio
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Delete Podcast
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-purple-500/10 text-purple-500 border-purple-500/20"
                          >
                            {podcast.subject}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 border-primary/20"
                          >
                            {podcast.class}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-sm text-muted-foreground mb-4">
                          {podcast.description}
                        </p>

                        <div className="rounded-lg bg-muted/50 p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0 hover:opacity-90"
                              onClick={() => togglePlay(podcast.id)}
                            >
                              {playingId === podcast.id ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                            <div>
                              <div className="h-1.5 w-48 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-purple-500 to-violet-600"
                                  style={{
                                    width:
                                      playingId === podcast.id ? "45%" : "0%",
                                  }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>
                                  {playingId === podcast.id ? "3:25" : "0:00"}
                                </span>
                                <span>{podcast.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {podcast.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <span>
                              Created:{" "}
                              {new Date(podcast.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <span>Shared: {podcast.shared} times</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="relative">
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <Button
                            variant="outline"
                            className="border-purple-500/20 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            Edit
                          </Button>
                          <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0">
                            Share
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

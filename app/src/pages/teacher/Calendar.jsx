import TeacherSidebar from "../../components/TeacherSidebar";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import {
  BookOpen,
  CalendarIcon,
  MessageSquare,
  Users,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ThreeBackground from "../../components/ThreeBackground";
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
import { Label } from "../../components/ui/Label";
import { Input } from "../../components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/Select";
import { Textarea } from "../../components/ui/Textarea";

export default function TeacherCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  // Calendar navigation
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // Get month name and year
  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      );
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Math Quiz",
      date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 10),
      time: "10:00 AM",
      type: "quiz",
      class: "Math 101",
      description: "Algebra fundamentals quiz",
    },
    {
      id: 2,
      title: "History Podcast",
      date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 15),
      time: "2:00 PM",
      type: "podcast",
      class: "History 101",
      description: "Share podcast about World War II",
    },
    {
      id: 3,
      title: "Science Quiz",
      date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 20),
      time: "11:30 AM",
      type: "quiz",
      class: "Science 202",
      description: "Physics fundamentals quiz",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 25),
      time: "4:00 PM",
      type: "meeting",
      class: "All Classes",
      description: "Quarterly parent-teacher conference",
    },
  ];

  // Get events for a specific date
  const getEventsForDate = (date) => {
    if (!date) return [];
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Check if a date has events
  const hasEvents = (date) => {
    if (!date) return false;
    return getEventsForDate(date).length > 0;
  };

  // Get events for selected date
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const handleCreateEvent = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false);
      setEventTitle("");
      setEventType("");
      // In a real app, you would add the new event to the list
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col relative">
      <ThreeBackground />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] realtive z-10">
        <TeacherSidebar />
        <main className="flex flex-col gap-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Calendar</h1>
              <p className="text-muted-foreground">
                Schedule and manage your classes and events
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                  <Plus className="h-4 w-4" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent className="backdrop-blur bg-background/95 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <DialogHeader className="relative">
                  <DialogTitle>Add New Event</DialogTitle>
                  <DialogDescription>
                    Create a new event for your calendar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 relative">
                  <div className="grid gap-2">
                    <Label htmlFor="eventTitle">Event Title</Label>
                    <Input
                      id="eventTitle"
                      placeholder="Enter event title"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quiz">Quiz</SelectItem>
                        <SelectItem value="podcast">Podcast</SelectItem>
                        <SelectItem value="assignment">Assignment</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="eventDate">Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="eventTime">Time</Label>
                      <Input
                        id="eventTime"
                        type="time"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="eventClass">Class</Label>
                    <Select>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math101">Math 101</SelectItem>
                        <SelectItem value="science202">Science 202</SelectItem>
                        <SelectItem value="history101">History 101</SelectItem>
                        <SelectItem value="physics101">Physics 101</SelectItem>
                        <SelectItem value="allClasses">All Classes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="eventDescription">Description</Label>
                    <Textarea
                      id="eventDescription"
                      placeholder="Enter event description"
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>
                <DialogFooter className="relative">
                  <Button
                    onClick={handleCreateEvent}
                    disabled={!eventTitle.trim() || !eventType || isCreating}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                  >
                    {isCreating ? "Creating..." : "Create Event"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
              <CardHeader className="pb-2 relative">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {monthName} {year}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevMonth}
                      className="h-8 w-8"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextMonth}
                      className="h-8 w-8"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, i) => (
                      <div
                        key={i}
                        className="text-sm font-medium text-muted-foreground py-1"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, i) => (
                    <div
                      key={i}
                      className={`
                        aspect-square p-1 relative
                        ${!day ? "text-muted-foreground/30" : ""}
                        ${
                          day &&
                          selectedDate &&
                          day.getDate() === selectedDate.getDate() &&
                          day.getMonth() === selectedDate.getMonth() &&
                          day.getFullYear() === selectedDate.getFullYear()
                            ? "bg-primary/10 rounded-md"
                            : ""
                        }
                      `}
                      onClick={() => day && setSelectedDate(day)}
                    >
                      {day && (
                        <>
                          <div
                            className={`
                            h-full w-full flex items-center justify-center rounded-md
                            ${hasEvents(day) ? "font-medium" : ""}
                            ${
                              day.getDate() === new Date().getDate() &&
                              day.getMonth() === new Date().getMonth() &&
                              day.getFullYear() === new Date().getFullYear()
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                                : "hover:bg-muted cursor-pointer"
                            }
                          `}
                          >
                            {day.getDate()}
                          </div>
                          {hasEvents(day) && (
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                              {getEventsForDate(day)
                                .slice(0, 3)
                                .map((event, j) => (
                                  <div
                                    key={j}
                                    className={`
                                    h-1 w-1 rounded-full
                                    ${
                                      event.type === "quiz"
                                        ? "bg-blue-500"
                                        : event.type === "podcast"
                                        ? "bg-purple-500"
                                        : event.type === "meeting"
                                        ? "bg-amber-500"
                                        : "bg-green-500"
                                    }
                                  `}
                                  />
                                ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between relative">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-muted-foreground">Quiz</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs text-muted-foreground">
                      Podcast
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs text-muted-foreground">
                      Meeting
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-muted-foreground">Other</span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-lg">
                    {selectedDate ? formatDate(selectedDate) : "Select a date"}
                  </CardTitle>
                  {selectedDate && (
                    <CardDescription>
                      {selectedDateEvents.length} event
                      {selectedDateEvents.length !== 1 ? "s" : ""}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="relative">
                  {selectedDate ? (
                    selectedDateEvents.length > 0 ? (
                      <div className="space-y-4">
                        {selectedDateEvents.map((event) => (
                          <div
                            key={event.id}
                            className="flex items-start gap-3 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all"
                          >
                            <div
                              className={`
                              rounded-full p-2 mt-0.5
                              ${
                                event.type === "quiz"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : event.type === "podcast"
                                  ? "bg-purple-500/20 text-purple-500"
                                  : event.type === "meeting"
                                  ? "bg-amber-500/20 text-amber-500"
                                  : "bg-green-500/20 text-green-500"
                              }
                            `}
                            >
                              {event.type === "quiz" ? (
                                <BookOpen className="h-4 w-4" />
                              ) : event.type === "podcast" ? (
                                <MessageSquare className="h-4 w-4" />
                              ) : event.type === "meeting" ? (
                                <Users className="h-4 w-4" />
                              ) : (
                                <CalendarIcon className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{event.title}</h3>
                                <Badge variant="outline">{event.time}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {event.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge
                                  variant="outline"
                                  className="bg-primary/10 border-primary/20"
                                >
                                  {event.class}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-6 text-center">
                        <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">
                          No events scheduled for this day
                        </p>
                        <Button
                          size="sm"
                          className="mt-4 gap-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          Add Event
                        </Button>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Select a date to view events
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="backdrop-blur bg-background/80 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-lg pointer-events-none"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    {events
                      .filter((event) => new Date(event.date) >= new Date())
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .slice(0, 3)
                      .map((event) => (
                        <div
                          key={event.id}
                          className="flex items-start gap-3 p-3 rounded-md bg-muted/50 border border-muted hover:border-primary/20 transition-all"
                        >
                          <div
                            className={`
                            rounded-full p-2 mt-0.5
                            ${
                              event.type === "quiz"
                                ? "bg-blue-500/20 text-blue-500"
                                : event.type === "podcast"
                                ? "bg-purple-500/20 text-purple-500"
                                : event.type === "meeting"
                                ? "bg-amber-500/20 text-amber-500"
                                : "bg-green-500/20 text-green-500"
                            }
                          `}
                          >
                            {event.type === "quiz" ? (
                              <BookOpen className="h-4 w-4" />
                            ) : event.type === "podcast" ? (
                              <MessageSquare className="h-4 w-4" />
                            ) : event.type === "meeting" ? (
                              <Users className="h-4 w-4" />
                            ) : (
                              <CalendarIcon className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{event.title}</h3>
                              <Badge variant="outline">
                                {event.date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {event.time} • {event.class}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

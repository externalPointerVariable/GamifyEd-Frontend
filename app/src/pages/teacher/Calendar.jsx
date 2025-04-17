import { useState } from "react"
import {
  ChevronLeft, ChevronRight, Plus,
} from "lucide-react"

export default function TeacherCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    const daysInMonth = lastDayOfMonth.getDate()
    const startingDayOfWeek = firstDayOfMonth.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null)
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
    }
    return days
  }

  const calendarDays = generateCalendarDays()

  const events = [
    { id: 1, title: "Math Quiz", date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 10), time: "10:00 AM", type: "quiz", description: "Algebra fundamentals quiz" },
    { id: 2, title: "History Podcast", date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 15), time: "2:00 PM", type: "podcast", description: "Listen to podcast about World War II" },
    { id: 3, title: "Science Quiz", date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 20), time: "11:30 AM", type: "quiz", description: "Physics fundamentals quiz" },
    { id: 4, title: "Study Group", date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 25), time: "4:00 PM", type: "other", description: "Virtual study group for upcoming exams" },
  ]

  const getEventsForDate = (date) => {
    if (!date) return []
    return events.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    )
  }

  const hasEvents = (date) => {
    if (!date) return false
    return getEventsForDate(date).length > 0
  }

  const formatDate = (date) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  }

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : []

  return (
    <div className="flex flex-col min-h-screen px-4 py-6 gap-6 bg-white dark:bg-black text-black dark:text-white">
      <div>
        <h1 className="text-3xl font-bold mb-1">Learning Calendar</h1>
        <p className="text-muted-foreground text-sm">Schedule and track your learning activities</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">{monthName} {year}</h2>
            <div className="flex gap-2">
              <button onClick={prevMonth}><ChevronLeft /></button>
              <button onClick={nextMonth}><ChevronRight /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-sm text-center mb-2 font-medium text-zinc-500 dark:text-zinc-400">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, idx) => (
              <div
                key={idx}
                className={`aspect-square relative p-1 rounded-md
                  ${!day ? "opacity-30" : "hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"}
                  ${day && selectedDate && day.toDateString() === selectedDate.toDateString() ? "bg-blue-100 dark:bg-blue-900" : ""}
                `}
                onClick={() => day && setSelectedDate(day)}
              >
                {day && (
                  <>
                    <div className="flex justify-center items-center h-full">
                      <span className={`${hasEvents(day) ? "font-bold" : ""}`}>
                        {day.getDate()}
                      </span>
                    </div>
                    {hasEvents(day) && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                        {getEventsForDate(day).slice(0, 3).map((event, j) => (
                          <div key={j} className={`
                            h-1 w-1 rounded-full
                            ${event.type === "quiz" ? "bg-blue-500" : event.type === "podcast" ? "bg-purple-500" : "bg-green-500"}
                          `}></div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                Quiz
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                Podcast
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Other
              </div>
            </div>
            <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
              <Plus className="h-4 w-4" />
              Add Event
            </button>
          </div>
        </div>

        <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">
            {selectedDate ? formatDate(selectedDate) : "Select a date"}
          </h3>
          {selectedDate && (
            <p className="text-sm text-muted-foreground mb-4">
              {selectedDateEvents.length} event{selectedDateEvents.length !== 1 ? "s" : ""}
            </p>
          )}
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map(event => (
                <div key={event.id} className="p-3 rounded-md bg-zinc-100 dark:bg-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{event.title}</span>
                    <span className="text-xs px-2 py-0.5 bg-zinc-300 dark:bg-zinc-700 rounded">{event.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          ) : selectedDate ? (
            <p className="text-muted-foreground mt-4">No events scheduled for this day.</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

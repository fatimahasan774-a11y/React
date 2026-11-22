const stats = [
  { icon: '📊', label: 'Average Grade', value: '88%' },
  { icon: '📚', label: 'Courses', value: '3' },
  { icon: '⏰', label: 'Study Hours', value: '45h' },
  { icon: '✍️', label: 'Assignments', value: '12' },
];

const courses = [
  { id: 1, name: 'React Fundamentals', progress: 75, next: 'Components & Props', teacher: 'Sarah Wilson' },
  { id: 2, name: 'JavaScript Advanced', progress: 45, next: 'Async/Await', teacher: 'Mike Johnson' },
  { id: 3, name: 'UI/UX Design', progress: 90, next: 'Color Theory', teacher: 'Emily Chen' },
];

const assignments = [
  { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', due: '2024-03-20', status: 'pending' },
  { id: 2, title: 'API Integration', course: 'JavaScript Advanced', due: '2024-03-18', status: 'completed' },
  { id: 3, title: 'Design System', course: 'UI/UX Design', due: '2024-03-25', status: 'in-progress' },
];

const announcements = [
  { id: 1, title: 'New Course Available', text: 'Check out our new TypeScript course!', time: '2 hours ago' },
  { id: 2, title: 'Maintenance Notice', text: 'Platform updates scheduled for tonight', time: '5 hours ago' },
];

const statusStyle = {
  pending: 'bg-red-100 text-red-600',
  completed: 'bg-green-100 text-green-600',
  'in-progress': 'bg-yellow-100 text-yellow-700',
};

// Progress color: red (low), yellow (medium), green (high)
const getProgressColor = (progress) => {
  if (progress >= 80) return { bar: 'bg-green-500', text: 'text-green-600' };
  if (progress >= 50) return { bar: 'bg-yellow-500', text: 'text-yellow-600' };
  return { bar: 'bg-red-500', text: 'text-red-600' };
};

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-5">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Welcome back, Student!</h1>
            <p className="text-sm text-gray-500">
              Here's what's happening with your courses today.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative text-xl">
              🔔
              <span className="absolute -top-0.5 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center">
              S
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="text-2xl font-bold text-gray-800">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Course Progress */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-5 self-start">
            <h2 className="font-semibold text-gray-800 mb-4">Course Progress</h2>
            <div className="space-y-4">
              {courses.map((c) => {
                const color = getProgressColor(c.progress);
                return (
                  <div key={c.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-800">{c.name}</span>
                      <span className={`font-semibold ${color.text}`}>{c.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                      <div
                        className={`h-2 rounded-full transition-all ${color.bar}`}
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Next: {c.next}</span>
                      <span>{c.teacher}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Upcoming Assignments */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="font-semibold text-gray-800 mb-4">Upcoming Assignments</h2>
              <div className="space-y-4">
                {assignments.map((a) => (
                  <div key={a.id} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{a.title}</p>
                      <p className="text-xs text-gray-500">{a.course}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle[a.status]}`}>
                        {a.status}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">Due {a.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="font-semibold text-gray-800 mb-4">Announcements</h2>
              <div className="space-y-4">
                {announcements.map((n) => (
                  <div key={n.id} className="border-l-4 border-blue-500 pl-3">
                    <p className="text-sm font-medium text-gray-800">{n.title}</p>
                    <p className="text-xs text-gray-500">{n.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
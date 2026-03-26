'use client';

export default function DashboardWireframePage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Dashboard Wireframe</h1>
        <p className="text-gray-600">Mid-fidelity wireframe for dashboard page</p>
      </div>

      {/* Page Container */}
      <div className="max-w-7xl">
        {/* Title & Date Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-500 text-sm">Wednesday, March 26, 2026</p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { title: 'Total Interns', value: '8', change: '+2', trend: 'up' },
            { title: 'Reports Pending', value: '3', change: '-1', trend: 'down' },
            { title: 'Open Issues', value: '12', change: '+3', trend: 'up' },
            { title: 'Avg Score', value: '89%', change: '+2.4%', trend: 'up' },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                {stat.title}
              </p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <div className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? '↑' : '↓'} {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Column Content Area */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* Left - Activity Feed */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent GitHub Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">🔧</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Fix memory leak in pipeline</p>
                      <p className="text-xs text-gray-500 mt-1">metawatt/leads-api • Marcus Rodriguez • 2 hours ago</p>
                      <div className="mt-2 inline-block px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        In Progress
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="text-sm text-blue-600 font-medium mt-4 inline-block">
              View all issues →
            </a>
          </div>

          {/* Right - Chart */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Overview</h3>
            <div className="h-48 bg-gray-50 border border-gray-200 rounded p-4 relative">
              {/* Chart axes */}
              <div className="absolute inset-4 flex flex-col justify-between text-xs text-gray-500">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span className="text-right">Week 1</span>
              </div>
              {/* Chart */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <polyline
                  points="5%,70% 20%,60% 35%,45% 50%,40% 65%,42% 80%,55% 95%,65%"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <polygon
                  points="5%,70% 20%,60% 35%,45% 50%,40% 65%,42% 80%,55% 95%,65% 95%,100% 5%,100%"
                  fill="#DBEAFE"
                  opacity="0.8"
                />
              </svg>
            </div>
            <div className="mt-4 text-xs text-gray-500">Week 1 - Week 6 Performance Trend</div>
          </div>
        </div>

        {/* Intern Status Summary */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Intern Status Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Sarah Chen', role: 'Frontend Intern', status: 'Submitted', score: 92 },
              { name: 'Marcus Rodriguez', role: 'Backend Intern', status: 'Pending', score: 88 },
              { name: 'Emily Watson', role: 'Full-Stack Intern', status: 'Reviewed', score: 95 },
              { name: 'James Kim', role: 'DevOps Intern', status: 'Submitted', score: 81 },
              { name: 'Aisha Patel', role: 'Frontend Intern', status: 'Submitted', score: 90 },
              { name: 'David Johnson', role: 'Backend Intern', status: 'Pending', score: 76 },
            ].map((intern, i) => (
              <div key={i} className="p-4 bg-white border border-gray-300 rounded-lg hover:border-blue-300 transition cursor-pointer">
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {intern.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{intern.name}</p>
                    <p className="text-xs text-gray-500">{intern.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      intern.status === 'Submitted' ? 'bg-green-100 text-green-700' :
                      intern.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {intern.status}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{intern.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

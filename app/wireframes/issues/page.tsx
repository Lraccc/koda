'use client';

export default function IssuesWireframePage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Issue Tracking Wireframe</h1>
        <p className="text-gray-600">Mid-fidelity wireframe for issues page</p>
      </div>

      {/* Page Container */}
      <div className="max-w-7xl">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Issue Tracking</h2>
          <p className="text-gray-500">Track and manage intern work items across repositories</p>
        </div>

        {/* Filters */}
        <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-3 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Assignee Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assignee</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Assignees</option>
                <option>Sarah Chen</option>
                <option>Marcus Rodriguez</option>
                <option>Unassigned</option>
              </select>
            </div>

            {/* Repository Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Repository</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Repositories</option>
                <option>metawatt/api</option>
                <option>metawatt/web</option>
                <option>metawatt/docs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Issues Table */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-4 py-3 text-center font-semibold text-gray-700 w-12">#</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Issue</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Repository</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Assignee</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Updated</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#2401', title: 'Fix memory leak in pipeline', repo: 'metawatt/api', assignee: 'Marcus Rodriguez', status: 'In Progress', updated: '2 hours ago' },
                { id: '#2398', title: 'Update documentation for API', repo: 'metawatt/docs', assignee: 'Sarah Chen', status: 'Open', updated: '5 hours ago' },
                { id: '#2395', title: 'Add dark mode support', repo: 'metawatt/web', assignee: 'Emily Watson', status: 'In Progress', updated: '1 day ago' },
                { id: '#2390', title: 'Optimize database queries', repo: 'metawatt/api', assignee: 'James Kim', status: 'Open', updated: '2 days ago' },
                { id: '#2385', title: 'Fix responsive layout issues', repo: 'metawatt/web', assignee: 'Aisha Patel', status: 'Closed', updated: '3 days ago' },
                { id: '#2380', title: 'Add unit tests for auth module', repo: 'metawatt/api', assignee: 'David Johnson', status: 'Open', updated: '4 days ago' },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-blue-50 transition cursor-pointer group`}
                >
                  <td className="px-4 py-4 text-center">
                    <button className="text-gray-400 group-hover:text-blue-600 font-bold">+</button>
                  </td>
                  <td className="px-6 py-4 font-medium text-blue-600 hover:underline">{row.id} • {row.title}</td>
                  <td className="px-6 py-4 text-gray-600 text-xs font-medium">{row.repo}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                        {row.assignee.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-gray-700 text-xs">{row.assignee}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        row.status === 'Open'
                          ? 'bg-red-100 text-red-700'
                          : row.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{row.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Expanded Row Example */}
          <div className="bg-gray-50 border-t border-gray-300 p-6">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Issue Details (#2401)</h4>
              <p className="text-sm text-gray-700 leading-6 mb-4">
                We've identified a memory leak in the pipeline processing module that causes the service to consume excessive memory over time. This appears to happen when processing large batches of data. Need to investigate the event listeners and clean up properly.
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-4">
              <h5 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">Timeline</h5>
              <div className="flex gap-4 items-start">
                {['Scheduled', 'In Progress', 'Testing', 'Resolved'].map((step, i) => (
                  <div key={i} className="flex flex-col items-center" style={{ flex: 1 }}>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 ${
                      i <= 1 ? 'bg-blue-100 border-blue-500' : 'bg-gray-100 border-gray-300'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${i <= 1 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                    </div>
                    <span className="text-xs text-gray-600 text-center">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Labels */}
            <div>
              <h5 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Labels</h5>
              <div className="flex gap-2 flex-wrap">
                {['bug', 'performance', 'high-priority'].map((label, i) => (
                  <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded font-medium">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

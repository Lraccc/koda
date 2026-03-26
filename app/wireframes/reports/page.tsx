'use client';

export default function ReportsWireframePage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Reports & Performance Wireframe</h1>
        <p className="text-gray-600">Mid-fidelity wireframe for reports page</p>
      </div>

      {/* Page Container */}
      <div className="max-w-7xl">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Reports & Performance</h2>
          <p className="text-gray-500">Review intern reports and performance metrics</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-6 border-b-2 border-gray-300">
            {['All Reports (12)', 'Pending Review (3)', 'Reviewed (9)'].map((tab, i) => (
              <button
                key={i}
                className={`px-4 py-3 font-medium text-sm border-b-2 transition ${
                  i === 0
                    ? 'text-blue-600 border-b-blue-600'
                    : 'text-gray-600 border-b-transparent hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Report Table */}
          <div className="mb-8 bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Intern Name</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Period</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Submitted</th>
                  <th className="px-6 py-3 text-center font-semibold text-gray-700">Score</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Sarah Chen', period: 'Q1 2024', submitted: 'Mar 20, 2026', score: 92, status: 'Reviewed' },
                  { name: 'Marcus Rodriguez', period: 'Q1 2024', submitted: 'Pending', score: '-', status: 'Pending' },
                  { name: 'Emily Watson', period: 'Q1 2024', submitted: 'Mar 18, 2026', score: 95, status: 'Reviewed' },
                  { name: 'James Kim', period: 'Q1 2024', submitted: 'Mar 19, 2026', score: 81, status: 'Reviewed' },
                  { name: 'Aisha Patel', period: 'Q1 2024', submitted: 'Mar 21, 2026', score: 90, status: 'Pending' },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } border-b border-gray-200 hover:bg-blue-50 transition cursor-pointer`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                    <td className="px-6 py-4 text-gray-600">{row.period}</td>
                    <td className="px-6 py-4 text-gray-600">{row.submitted}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-bold text-gray-900">{row.score}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Reviewed'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Performance Overview Chart */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Performance Overview</h3>
            <div className="space-y-4">
              {[
                { name: 'Sarah Chen', score: 92 },
                { name: 'Marcus Rodriguez', score: 88 },
                { name: 'Emily Watson', score: 95 },
                { name: 'James Kim', score: 81 },
                { name: 'Aisha Patel', score: 90 },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-32 text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all"
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right font-bold text-gray-900">{item.score}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

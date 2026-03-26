'use client';

export default function InternsWireframePage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Intern Management Wireframe</h1>
        <p className="text-gray-600">Mid-fidelity wireframe for intern management page</p>
      </div>

      {/* Page Container */}
      <div className="max-w-7xl">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Intern Management</h2>
          <p className="text-gray-500">Manage and monitor all interns in your organization</p>
        </div>

        {/* Filters Section */}
        <div className="mb-6 p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            {/* Search Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by name or GitHub..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">GitHub</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Period</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Report Status</th>
                <th className="px-6 py-3 text-center font-semibold text-gray-700">Issues</th>
                <th className="px-6 py-3 text-center font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sarah Chen', github: '@sarachen', period: 'Q1 2024', status: 'Submitted', issues: 3 },
                { name: 'Marcus Rodriguez', github: '@mrodriguez', period: 'Q1 2024', status: 'Pending', issues: 5 },
                { name: 'Emily Watson', github: '@ewatson', period: 'Q1 2024', status: 'Reviewed', issues: 2 },
                { name: 'James Kim', github: '@jkim', period: 'Q1 2024', status: 'Submitted', issues: 4 },
                { name: 'Aisha Patel', github: '@apatel', period: 'Q1 2024', status: 'Submitted', issues: 1 },
                { name: 'David Johnson', github: '@djohnson', period: 'Q1 2024', status: 'Pending', issues: 6 },
                { name: 'Lisa Nguyen', github: '@lnguyen', period: 'Q1 2024', status: 'Submitted', issues: 2 },
                { name: 'Tom Anderson', github: '@tanderson', period: 'Q1 2024', status: 'Reviewed', issues: 0 },
              ].map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-blue-50 transition cursor-pointer`}>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-gray-600">{row.github}</td>
                  <td className="px-6 py-4 text-gray-600">{row.period}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      row.status === 'Submitted' ? 'bg-green-100 text-green-700' :
                      row.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-900 font-medium">{row.issues}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

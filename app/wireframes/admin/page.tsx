'use client';

import { useState } from 'react';

export default function AdminWireframePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">User Management Wireframe</h1>
        <p className="text-gray-600">Mid-fidelity wireframe for admin/user management page</p>
      </div>

      {/* Page Container */}
      <div className="max-w-7xl">
        {/* Title Section with Action Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">User Management</h2>
            <p className="text-gray-500">Manage system users and their roles</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            + Add User
          </button>
        </div>

        {/* User Management Table */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-6 py-3 text-left font-semibold text-gray-700">User</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">GitHub</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Role</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Joined</th>
                <th className="px-6 py-3 text-center font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { avatar: 'CM', name: 'Carl Mendoza', github: '@cmendoza', role: 'Coordinator', status: 'Active', joined: 'Mar 01, 2024' },
                { avatar: 'SC', name: 'Sarah Chen', github: '@sarachen', role: 'Intern', status: 'Active', joined: 'Mar 15, 2024' },
                { avatar: 'MR', name: 'Marcus Rodriguez', github: '@mrodriguez', role: 'Intern', status: 'Pending', joined: 'Mar 16, 2024' },
                { avatar: 'EW', name: 'Emily Watson', github: '@ewatson', role: 'Intern', status: 'Active', joined: 'Mar 15, 2024' },
                { avatar: 'JK', name: 'James Kim', github: '@jkim', role: 'Team Lead', status: 'Active', joined: 'Mar 10, 2024' },
                { avatar: 'AP', name: 'Aisha Patel', github: '@apatel', role: 'Intern', status: 'Active', joined: 'Mar 15, 2024' },
                { avatar: 'DJ', name: 'David Johnson', github: '@djohnson', role: 'Intern', status: 'Pending', joined: 'Mar 17, 2024' },
                { avatar: 'LN', name: 'Lisa Nguyen', github: '@lnguyen', role: 'Intern', status: 'Active', joined: 'Mar 15, 2024' },
                { avatar: 'TA', name: 'Tom Anderson', github: '@tanderson', role: 'Intern', status: 'Active', joined: 'Mar 15, 2024' },
                { avatar: 'JM', name: 'John Miller', github: '@jmiller', role: 'Admin', status: 'Active', joined: 'Feb 28, 2024' },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-blue-50 transition`}
                >
                  {/* User + Avatar */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                        {row.avatar}
                      </div>
                      <div className="font-medium text-gray-900">{row.name}</div>
                    </div>
                  </td>
                  {/* GitHub */}
                  <td className="px-6 py-4 text-gray-600 text-sm">{row.github}</td>
                  {/* Role */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        row.role === 'Admin'
                          ? 'bg-red-100 text-red-700'
                          : row.role === 'Coordinator'
                          ? 'bg-green-100 text-green-700'
                          : row.role === 'Team Lead'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {row.role}
                    </span>
                  </td>
                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        row.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  {/* Joined Date */}
                  <td className="px-6 py-4 text-gray-600 text-sm">{row.joined}</td>
                  {/* Actions */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center">
                      {row.status === 'Pending' ? (
                        <>
                          <button className="text-xs font-medium text-blue-600 hover:text-blue-800">Resend</button>
                          <span className="text-gray-300">|</span>
                          <button className="text-xs font-medium text-red-600 hover:text-red-800">Revoke</button>
                        </>
                      ) : (
                        <>
                          <button className="text-xs font-medium text-blue-600 hover:text-blue-800">Edit</button>
                          <span className="text-gray-300">|</span>
                          <button className="text-xs font-medium text-red-600 hover:text-red-800">Remove</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add User Modal (Preview) */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
              {/* Modal Header */}
              <div className="border-b border-gray-300 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">Add New User</h3>
                <p className="text-sm text-gray-500 mt-1">Create a new user account with assigned role</p>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-4 space-y-4">
                {/* GitHub Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Username</label>
                  <input
                    type="text"
                    placeholder="e.g., @octocat"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Role Selection Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a role...</option>
                    <option>Admin</option>
                    <option>Coordinator</option>
                    <option>Team Lead</option>
                    <option>Intern</option>
                  </select>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-300 px-6 py-4 flex gap-3 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            💡 This modal is interactive - click "Add User" button above to see the modal preview
          </p>
        </div>
      </div>
    </div>
  );
}

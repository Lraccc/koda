'use client';

import Link from 'next/link';

export default function WireframesPage() {
  const wireframes = [
    {
      name: 'Dashboard',
      path: '/wireframes/dashboard',
      description: 'Overview page with stat cards, activity feed, and intern status summary',
      icon: '📊',
    },
    {
      name: 'Intern Management',
      path: '/wireframes/interns',
      description: 'Table interface with search, filters, and action controls',
      icon: '👥',
    },
    {
      name: 'Reports & Performance',
      path: '/wireframes/reports',
      description: 'Tab navigation, report review table, and performance metrics chart',
      icon: '📈',
    },
    {
      name: 'Issue Tracking',
      path: '/wireframes/issues',
      description: 'Filterable issue list with expandable rows and progress timeline',
      icon: '🐛',
    },
    {
      name: 'User Management',
      path: '/wireframes/admin',
      description: 'Admin user directory with role/status management and add user modal',
      icon: '⚙️',
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Page Wireframes</h1>
          <p className="text-gray-600 text-lg">
            Mid-fidelity wireframes of all major application pages
          </p>
        </div>

        {/* Wireframe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {wireframes.map((wireframe, idx) => (
            <Link
              key={idx}
              href={wireframe.path}
              className="p-6 bg-white border border-gray-300 rounded-lg hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{wireframe.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {wireframe.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-5">{wireframe.description}</p>
              <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition">
                View →
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 About These Wireframes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Design Approach</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>✓ <strong>Mid Fidelity:</strong> Clear layouts with realistic spacing and typography</li>
                <li>✓ <strong>Color Coding:</strong> Badges and indicators show status distinctions</li>
                <li>✓ <strong>Interactive Elements:</strong> Buttons, modals, and expandable sections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>✓ Design specification for Figma mockups</li>
                <li>✓ Layout validation and component structure</li>
                <li>✓ Stakeholder communication and approval</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Info */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            💡 <strong>Tip:</strong> These wireframes show accurate page layouts and component hierarchies. Click any card above to view the detailed wireframe.
          </p>
        </div>
      </div>
    </div>
  );
}

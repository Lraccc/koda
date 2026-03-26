'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function WireframeKitPage() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Low Fidelity Wireframe Kit</h1>
        <p className="text-gray-600">Basic wireframe components for layout and structure planning</p>
      </div>

      <Tabs defaultValue="shapes" className="space-y-8">
        <TabsList className="bg-gray-200 border border-gray-400">
          <TabsTrigger value="shapes">Basic Shapes</TabsTrigger>
          <TabsTrigger value="blocks">Content Blocks</TabsTrigger>
          <TabsTrigger value="layouts">Layouts</TabsTrigger>
          <TabsTrigger value="ui">UI Elements</TabsTrigger>
        </TabsList>

        {/* Basic Shapes Tab */}
        <TabsContent value="shapes" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Basic Shapes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Rectangle */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <div className="w-32 h-20 border-2 border-dashed border-gray-600"></div>
              </div>

              {/* Circle */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-dashed border-gray-600 rounded-full"></div>
              </div>

              {/* Square */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-600"></div>
              </div>

              {/* Triangle */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <div className="w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-gray-600"></div>
              </div>

              {/* Horizontal Line */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <div className="w-32 h-1 bg-gray-600"></div>
              </div>

              {/* Vertical Line */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <div className="w-1 h-24 bg-gray-600"></div>
              </div>

              {/* Diagonal Line */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <svg width="80" height="80" className="border border-gray-400">
                  <line x1="10" y1="10" x2="70" y2="70" stroke="#374151" strokeWidth="2" />
                </svg>
              </div>

              {/* X Shape */}
              <div className="p-6 bg-gray-100 border-2 border-gray-400 flex items-center justify-center">
                <svg width="80" height="80" className="border border-gray-400">
                  <line x1="10" y1="10" x2="70" y2="70" stroke="#374151" strokeWidth="2" />
                  <line x1="70" y1="10" x2="10" y2="70" stroke="#374151" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Content Blocks Tab */}
        <TabsContent value="blocks" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Content Blocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Text Block */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="space-y-3">
                  <div className="h-4 bg-gray-400 w-full"></div>
                  <div className="h-4 bg-gray-400 w-5/6"></div>
                  <div className="h-4 bg-gray-400 w-4/5"></div>
                  <div className="h-4 bg-gray-400 w-3/4"></div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Text</p>
              </div>

              {/* Image Block */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="w-full h-32 bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">IMG</span>
                </div>
                <p className="text-xs text-gray-600 mt-3">Image</p>
              </div>

              {/* Button Block */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="w-full h-10 bg-gray-500 border-2 border-gray-700 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">BTN</span>
                </div>
                <p className="text-xs text-gray-600 mt-3">Button</p>
              </div>

              {/* Input Field */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="h-8 bg-white border-2 border-gray-500 mb-3"></div>
                <p className="text-xs text-gray-600">Input Field</p>
              </div>

              {/* Checkbox */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-600"></div>
                  <div className="h-4 bg-gray-400 w-20"></div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Checkbox</p>
              </div>

              {/* Radio Button */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
                  <div className="h-4 bg-gray-400 w-20"></div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Radio</p>
              </div>

              {/* Avatar */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="w-16 h-16 bg-gray-400 border-2 border-gray-600 rounded-full mx-auto"></div>
                <p className="text-xs text-gray-600 mt-3 text-center">Avatar</p>
              </div>

              {/* List Item */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-gray-400 flex-shrink-0"></div>
                    <div className="h-4 bg-gray-400 flex-1"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-gray-400 flex-shrink-0"></div>
                    <div className="h-4 bg-gray-400 flex-1"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">List</p>
              </div>

              {/* Card */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="border-2 border-gray-500 p-3">
                  <div className="h-4 bg-gray-400 w-2/3 mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-3 bg-gray-400 w-full"></div>
                    <div className="h-3 bg-gray-400 w-5/6"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Card</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Layouts Tab */}
        <TabsContent value="layouts" className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Common Layouts</h2>

            {/* Hero + Grid */}
            <div className="mb-12">
              <p className="text-sm font-bold text-gray-700 mb-3">Hero Banner + Card Grid</p>
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="h-24 bg-gray-300 border-2 border-dashed border-gray-500 mb-4"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-gray-300 border-2 border-dashed border-gray-500"></div>
                  <div className="h-16 bg-gray-300 border-2 border-dashed border-gray-500"></div>
                  <div className="h-16 bg-gray-300 border-2 border-dashed border-gray-500"></div>
                </div>
              </div>
            </div>

            {/* Sidebar + Content */}
            <div className="mb-12">
              <p className="text-sm font-bold text-gray-700 mb-3">Sidebar + Main Content</p>
              <div className="p-4 bg-gray-100 border-2 border-gray-400 flex gap-4">
                <div className="w-32 h-48 bg-gray-300 border-2 border-dashed border-gray-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-400 w-1/2 mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-400 w-full"></div>
                    <div className="h-4 bg-gray-400 w-full"></div>
                    <div className="h-4 bg-gray-400 w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Header + Table */}
            <div className="mb-12">
              <p className="text-sm font-bold text-gray-700 mb-3">Header + Data Table</p>
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="h-6 bg-gray-400 w-1/4 mb-4"></div>
                <div className="border-2 border-gray-500">
                  <div className="grid grid-cols-4 gap-0 border-b-2 border-gray-500">
                    <div className="h-8 bg-gray-300 border-r-2 border-gray-500"></div>
                    <div className="h-8 bg-gray-300 border-r-2 border-gray-500"></div>
                    <div className="h-8 bg-gray-300 border-r-2 border-gray-500"></div>
                    <div className="h-8 bg-gray-300"></div>
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="grid grid-cols-4 gap-0 border-b-2 border-gray-400">
                      <div className="h-8 bg-white border-r-2 border-gray-400"></div>
                      <div className="h-8 bg-white border-r-2 border-gray-400"></div>
                      <div className="h-8 bg-white border-r-2 border-gray-400"></div>
                      <div className="h-8 bg-white"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Header + Content + Sidebar */}
            <div className="mb-12">
              <p className="text-sm font-bold text-gray-700 mb-3">Header + Main + Right Sidebar</p>
              <div className="bg-gray-100 border-2 border-gray-400 p-0">
                <div className="h-12 bg-gray-300 border-b-2 border-gray-500"></div>
                <div className="flex">
                  <div className="flex-1 p-4">
                    <div className="h-6 bg-gray-400 w-1/3 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 w-full"></div>
                      <div className="h-4 bg-gray-400 w-full"></div>
                      <div className="h-4 bg-gray-400 w-2/3"></div>
                    </div>
                  </div>
                  <div className="w-40 bg-gray-200 border-l-2 border-gray-500 p-4">
                    <div className="h-4 bg-gray-400 mb-3 w-full"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-400 w-full"></div>
                      <div className="h-3 bg-gray-400 w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Dialog */}
            <div className="mb-12">
              <p className="text-sm font-bold text-gray-700 mb-3">Modal Dialog</p>
              <div className="relative">
                <div className="absolute inset-0 bg-black/10 border-2 border-gray-400"></div>
                <div className="relative mx-auto w-96 bg-white border-2 border-gray-500 shadow">
                  <div className="h-8 bg-gray-300 border-b-2 border-gray-500"></div>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 w-1/4"></div>
                      <div className="h-8 bg-white border-2 border-gray-500"></div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <div className="flex-1 h-8 bg-gray-400 border-2 border-gray-600"></div>
                      <div className="flex-1 h-8 bg-gray-600 border-2 border-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-12">
              <p className="text-sm font-bold text-gray-700 mb-3">Tabbed Interface</p>
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="flex gap-2 border-b-2 border-gray-400 mb-4">
                  <div className="px-4 h-8 bg-gray-400 border-b-2 border-gray-600"></div>
                  <div className="px-4 h-8 bg-gray-300 border-b-2 border-gray-400"></div>
                  <div className="px-4 h-8 bg-gray-300 border-b-2 border-gray-400"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 w-full"></div>
                  <div className="h-4 bg-gray-400 w-full"></div>
                  <div className="h-4 bg-gray-400 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* UI Elements Tab */}
        <TabsContent value="ui" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">UI Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Buttons */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="space-y-2 mb-3">
                  <div className="h-10 bg-gray-500 border-2 border-gray-700"></div>
                  <div className="h-10 bg-white border-2 border-gray-600"></div>
                  <div className="h-10 bg-gray-300 border-2 border-gray-400"></div>
                </div>
                <p className="text-xs text-gray-600">Buttons</p>
              </div>

              {/* Badge */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="px-2 h-6 bg-gray-400 border-2 border-gray-600"></div>
                  <div className="px-2 h-6 bg-gray-400 border-2 border-gray-600"></div>
                  <div className="px-2 h-6 bg-gray-400 border-2 border-gray-600"></div>
                </div>
                <p className="text-xs text-gray-600">Badges</p>
              </div>

              {/* Progress Bar */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="h-3 bg-gray-300 border-2 border-gray-500 mb-3 overflow-hidden">
                  <div className="h-full w-2/3 bg-gray-600"></div>
                </div>
                <p className="text-xs text-gray-600">Progress</p>
              </div>

              {/* Dropdown */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="h-10 bg-white border-2 border-gray-600 flex items-center justify-between px-2 mb-3">
                  <span className="text-xs">Select</span>
                  <span className="text-lg">▼</span>
                </div>
                <p className="text-xs text-gray-600">Dropdown</p>
              </div>

              {/* Toggle Switch */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-6 bg-gray-500 border-2 border-gray-700 rounded-full flex items-center">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto mr-1"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Toggle</p>
              </div>

              {/* Slider */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="h-2 bg-gray-300 border-2 border-gray-500 rounded-full relative mb-3">
                  <div className="w-6 h-6 bg-gray-600 border-2 border-gray-800 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-xs text-gray-600">Slider</p>
              </div>

              {/* Tooltip */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="inline-block">
                  <div className="h-8 bg-gray-400 px-2 border-2 border-gray-600 flex items-center">
                    <span className="text-xs text-white">Hover</span>
                  </div>
                  <div className="mt-1 bg-gray-600 text-white text-xs px-2 py-1 border-2 border-gray-700">Tooltip</div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Tooltip</p>
              </div>

              {/* Alert */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="p-3 border-2 border-gray-600 bg-white mb-3">
                  <div className="h-3 bg-gray-400 w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-400 w-full"></div>
                </div>
                <p className="text-xs text-gray-600">Alert</p>
              </div>

              {/* Notification */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="p-3 bg-gray-300 border-2 border-gray-600 mb-3 flex gap-2">
                  <div className="w-4 h-4 bg-gray-600 flex-shrink-0"></div>
                  <div className="space-y-1 flex-1">
                    <div className="h-3 bg-gray-600 w-2/3"></div>
                    <div className="h-2 bg-gray-500 w-full"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Notification</p>
              </div>

              {/* Chart / Graph */}
              <div className="p-4 bg-gray-100 border-2 border-gray-400">
                <div className="mb-2">
                  <p className="text-xs font-bold text-gray-700 mb-2">Chart Title</p>
                </div>
                <div className="relative h-40 bg-white border-2 border-gray-500 p-2">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 pl-1">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                  </div>
                  {/* Chart area */}
                  <div className="ml-10 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 border-l-2 border-b-2 border-gray-400"></div>
                    {/* Data visualization - simple area chart */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      {/* Chart line */}
                      <polyline
                        points="0,100 20,80 40,60 60,50 80,55 100,70"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Chart area fill */}
                      <polygon
                        points="0,100 20,80 40,60 60,50 80,55 100,70 100,100 0,100"
                        fill="#D1D5DB"
                        opacity="0.5"
                      />
                    </svg>
                    {/* X-axis labels */}
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
                      <span>W1</span>
                      <span>W2</span>
                      <span>W3</span>
                      <span>W4</span>
                      <span>W5</span>
                      <span>W6</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-8">Chart / Graph</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

import React, { useState } from 'react';
import {Bell, Home, Users, FolderKanban, Target, FileText, TrendingUp, LogOut, Lightbulb } from 'lucide-react';

// Simplified UI components
const Button = ({ children, variant = 'primary', ...props }) => (
  <button className={`px-4 py-2 rounded ${variant === 'ghost' ? 'hover:bg-gray-100' : 'bg-blue-500 text-white'}`} {...props}>
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input className="w-full px-3 py-2 border rounded-md" {...props} />
);

const Select = ({ children, ...props }) => (
  <select className="w-full px-3 py-2 border rounded-md" {...props}>
    {children}
  </select>
);

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-gray-50/40 p-6">
          <nav className="space-y-2">
            <button className="w-full justify-center flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <img
                alt="Avatar"
                className="rounded-full"
                height="74"
                src="https://i.pinimg.com/736x/4e/f2/8e/4ef28e630a68e0234594639eb24896ac.jpg"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width="74"
              />
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <Home className="mr-2 h-4 w-4" />
              Home
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground">
              <FileText className="mr-2 h-4 w-4" />
              Basic Info
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <Users className="mr-2 h-4 w-4" />
              Team
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <FolderKanban className="mr-2 h-4 w-4" />
              Projects
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <Target className="mr-2 h-4 w-4" />
              Outcome
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <FileText className="mr-2 h-4 w-4" />
              IP Details
            </button>
            <button className="w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
              <TrendingUp className="mr-2 h-4 w-4" />
              Impact
            </button>
          </nav>

          <div className="mt-8 bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-green-600" />
              <span className="font-medium">Thoughts Time</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              You don't build a business, you build people, then people build the business.
            </p>
          </div>

          <button className="mt-8 w-full justify-start flex items-center px-4 py-2 text-sm font-medium rounded-md">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Hello Matt,</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-10 w-10 rounded-full bg-gray-200" />
          </div>
        </div>
          <form className="mx-auto max-w-4xl space-y-8">
            {/* Name Section */}
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium">Mr/Mrs</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Mr/Mrs" />
              </div>
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="First Name" />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Last Name" />
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <label className="text-sm font-medium">Gender*</label>
                <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Date of Birth*</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="MM/DD/YYYY" type="date" />
              </div>
              <div>
                <label className="text-sm font-medium">Mobile No*</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="10Digit Mobile Number" />
              </div>
              <div>
                <label className="text-sm font-medium">E-Mail*</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="@gmail.com" type="email" />
              </div>
            </div>

            <h3 className="text-lg font-semibold">ADDITIONAL INFORMATION:</h3>

            {/* Location */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">State*</label>
                <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">City*</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="City" />
              </div>
            </div>

            {/* Professional Details */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Profession</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Profession" />
              </div>
              <div>
                <label className="text-sm font-medium">Category*</label>
                <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="cat1">Category 1</option>
                  <option value="cat2">Category 2</option>
                </select>
              </div>
            </div>

            {/* ID Details */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">PAN No:</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="PAN Number" />
              </div>
              <div>
                <label className="text-sm font-medium">Aadhar Card No*</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Aadhar Card Number" />
              </div>
            </div>

            {/* Education */}
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium">Educational Qualifications*</label>
                <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="qual1">Qualification 1</option>
                  <option value="qual2">Qualification 2</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Degree*</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Example:B.Tech Civil" />
              </div>
              <div>
                <label className="text-sm font-medium">University Name:</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="University Name" />
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;


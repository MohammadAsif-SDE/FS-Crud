import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Users, FolderKanban, Target, TrendingUp, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: FileText, label: 'Basic Info', path: '/basic-info' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: Target, label: 'Outcome', path: '/outcome' },
    { icon: FileText, label: 'IP Details', path: '/ip-details' },
    { icon: TrendingUp, label: 'Impact', path: '/impact' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col">
      <div className="flex justify-center py-8">
        <div className="h-24 w-24 rounded-full bg-gray-200" />
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm ${
                location.pathname === item.path
                  ? 'bg-gray-100 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-6">
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <span role="img" aria-label="lightbulb" className="text-2xl">💡</span>
          </div>
          <p className="text-sm text-green-700">
            You don't build a business, you build people, then people build the business.
          </p>
        </div>
        <Link
          to="/logout"
          className="flex items-center px-6 py-3 mt-4 text-sm text-gray-600 hover:bg-gray-50"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;


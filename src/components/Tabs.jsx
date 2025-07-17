import React from 'react';
import { NavLink } from 'react-router-dom';

const tabList = [
  { name: 'Leaderboard', path: '/' },
  { name: 'Claim History', path: '/history' },
  { name: 'User Management', path: '/users' },
];

const Tabs = () => (
  <nav className="w-full flex justify-center mb-6 sm:mb-8 overflow-x-auto">
    <div className="inline-flex rounded-xl bg-yellow-100 shadow px-2 sm:px-4 py-1 sm:py-2 border border-yellow-200 min-w-fit">
      {tabList.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          end
          className={({ isActive }) =>
            `px-3 sm:px-6 py-1 sm:py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base ${
              isActive ? 'bg-yellow-400 text-white shadow' : 'text-yellow-700 hover:bg-yellow-200'
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default Tabs;

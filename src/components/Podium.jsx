import { FaUserCircle } from 'react-icons/fa';
import React from 'react';
const podiumColors = [
  'bg-gradient-to-b from-yellow-300 to-yellow-100 border-yellow-400',
  'bg-gradient-to-b from-gray-300 to-white border-gray-400',
  'bg-gradient-to-b from-yellow-800 to-yellow-400 border-yellow-700',
];

const crownEmojis = ['👑', '🥈', '🥉'];

const Podium = ({ users = [] }) => {
  const topThree = users.slice(0, 3);
  return (
    <div className="flex justify-center gap-4 mb-6">
      {topThree.map((user, idx) => (
        <div
          key={user.name}
          className={`flex flex-col items-center p-4 rounded-2xl shadow-lg w-32 h-40 relative  ${podiumColors[idx]}`}
        >
          <div className="w-16 h-16 rounded-full bg-white border-2 border-yellow-400 flex items-center justify-center mb-2 overflow-hidden">
            <FaUserCircle className="text-4xl text-yellow-500" />
          </div>
          <div className="font-bold text-lg text-center truncate w-full">
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </div>
          <div className="text-yellow-700 font-semibold text-center">{user.totalPoints} pts</div>
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 text-4xl ${
              idx === 0 ? 'text-yellow-500' : idx === 1 ? 'text-gray-400' : 'text-yellow-800'
            }`}
          >
            {crownEmojis[idx]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Podium;

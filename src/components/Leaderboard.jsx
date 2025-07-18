import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../api/api';
import { FaUserCircle } from 'react-icons/fa';
import Podium from './Podium';
import Pagination from './Pagination';
import Loading from './Loading';

const ITEMS_PER_PAGE = 10;

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    setLoading(true);
    const res = await getLeaderboard();
    setLeaderboard(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 3000);
    return () => clearInterval(interval);
  }, []);

  // Pagination logic
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedUsers = leaderboard.slice(startIdx, endIdx);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col gap-6 mt-6">
      <h2 className="flex justify-center mb-2">
        <img src="public\\bg.png" alt="" className="w-58" />
      </h2>
      <Podium users={leaderboard} />
      <ul className="divide-y divide-gray-200 bg-gray-50 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 bg-amber-100">
          <div className="flex">
            <li className="px-4 py-3 text-xl font-semibold">Rank</li>
            <li className="px-4 py-3 text-xl  font-semibold">Name</li>
          </div>
          <div className="px-4 py-3 text-xl font-semibold whitespace-nowrap"> Total Points</div>
        </div>
        {paginatedUsers.map((user) => (
          <li
            key={user.name}
            className={`flex items-center justify-between px-4 py-3 sm:px-6 transition hover:bg-blue-50 ${
              user.rank <= 3 ? 'font-semibold text-blue-700' : ''
            }`}
          >
            <span className="w-8 text-center text-lg">{user.rank}</span>
            <span className="flex items-center gap-2 flex-1 ml-2 pl-8">
              <FaUserCircle className="text-2xl " />
              <span className="truncate">{user.name}</span>
            </span>
            <span className="text-right min-w-[60px] font-mono px-8">{user.totalPoints} pts</span>
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={leaderboard.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Leaderboard;

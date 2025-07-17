import React, { useEffect, useState } from 'react';
import { getHistory } from '../api/api';
import Pagination from './Pagination';
import moment from 'moment';

const ITEMS_PER_PAGE = 10;

const HistoryList = () => {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const res = await getHistory();
    setHistory(res.data);
  };

  // Pagination logic
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedHistory = history.slice(startIdx, endIdx);

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col gap-4 mt-6">
      <h2 className="text-xl font-bold text-blue-600 mb-2 text-center">Claim History</h2>
      <ul className="divide-y divide-gray-200 bg-gray-50 rounded-lg overflow-hidden">
        <div className="flex justify-between py-3 px-2 bg-yellow-100">
          <li className="text-xl font-semibold ">Name</li>
          <li className="text-xl font-semibold">Points</li>
          <li className="text-xl font-semibold ">CreatedAt</li>
        </div>

        {paginatedHistory.map((h) => (
          <li
            key={h._id}
            className="flex  md:flex-row md:items-center justify-between px-4 py-3 transition hover:bg-blue-50"
          >
            <span className="font-semibold text-gray-700">
              {h.userId.name.charAt(0).toUpperCase() + h.userId.name.slice(1)}
            </span>
            <span className="text-blue-500 font-mono">+{h.points} pts</span>
            <span className="text-gray-400 text-sm sm:text-right">
              {moment(h.createdAt).format(' MMMM Do YYYY, h:mm:ss a')}
            </span>
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={history.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HistoryList;

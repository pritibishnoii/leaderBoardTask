import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs';
import UserSelect from './components/UserSelect';
import Leaderboard from './components/Leaderboard';
import HistoryList from './components/HistoryList';
import { claimPoints } from './api/api';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [lastClaimed, setLastClaimed] = useState(null);

  const handleClaim = async () => {
    if (!selectedUser) return alert('Select a user first');
    const res = await claimPoints(selectedUser);
    setLastClaimed(res.data);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 flex flex-col items-center py-4 sm:py-8 font-sans">
        <div className="w-full max-w-full sm:max-w-2xl rounded-3xl p-2 sm:p-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full px-4 sm:px-8 py-2 text-lg sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2 whitespace-nowrap ">
              Leaderboard App
            </div>
          </div>
          <Tabs />
          <Routes>
            <Route path="/" element={<Leaderboard />} />
            <Route path="/history" element={<HistoryList />} />
            <Route
              path="/users"
              element={
                <div className="w-full flex flex-col items-center">
                  <UserSelect selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                  <button
                    onClick={handleClaim}
                    className="mt-4 mb-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow transition"
                  >
                    Claim
                  </button>
                  {lastClaimed && (
                    <p className="text-green-600 font-semibold mb-2">
                      {lastClaimed.user.name} earned {lastClaimed.points} pts!
                    </p>
                  )}
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

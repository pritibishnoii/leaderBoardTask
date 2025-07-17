import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from '../api/api';

const UserSelect = ({ selectedUser, setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data.users);
  };

  const handleAddUser = async () => {
    if (newUser.trim()) {
      await createUser(newUser);
      setNewUser('');
      fetchUsers();
    }
  };

  return (
    <div className="w-full max-w-full sm:max-w-md mx-auto p-2 sm:p-6 bg-white rounded-lg shadow-md flex flex-col gap-4 items-center">
      <label
        className="w-full text-left font-semibold text-gray-700 mb-1 text-sm sm:text-base"
        htmlFor="user-select"
      >
        Select User
      </label>
      <select
        id="user-select"
        onChange={(e) => setSelectedUser(e.target.value)}
        value={selectedUser}
        className="w-full px-2 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <div className="w-full flex flex-col sm:flex-row gap-2 mt-2">
        <input
          type="text"
          placeholder="New user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="flex-1 px-2 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-semibold shadow-sm text-sm sm:text-base"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserSelect;

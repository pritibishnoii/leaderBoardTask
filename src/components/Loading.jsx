import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-md mx-auto">
      {/*  circle  */}
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      {/*  text */}
      <h1 className="text-2xl text-indigo-900 mt-2">Loading...</h1>
    </div>
  );
};

export default Loading;

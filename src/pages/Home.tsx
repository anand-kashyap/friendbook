import React, { useContext, useEffect } from 'react';
import friendContext from '../context/friend/friendContext';

function Home() {
  const { friends, addFriend } = useContext(friendContext);

  useEffect(() => {
    console.log({ friends });
  }, [friends]);

  return (
    <div className="h-screen p-12 bg-gray-400 font-sans tracking-wider">
      <div className="flex items-center">
        <div className="p-6 font-bold bg-white text-lg rounded-2xl min-w-[280px] max-w-160 shadow-xl">Works!!</div>
      </div>
    </div>
  );
}

export default Home;

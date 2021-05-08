import React from 'react';
import SearchIcon from '../assets/icons/search.svg';
import Card, { CardHeader } from '../components/Card';
import FriendList from '../components/Friend/FriendList';

const Home = () => {
  return (
    <main className="grid h-full place-content-center bg-red-100 font-sans tracking-wide">
      <Card hasHeader>
        <CardHeader>
          <h1>Friends List</h1>
          <button>
            <img src={SearchIcon} alt="search-icon" className="h-5 w-5" />
          </button>
        </CardHeader>
        <div className="text-sm">
          <input
            type="text"
            className="w-full outline-none py-2 h-12 px-6 border-b-2 border-gray-300"
            placeholder="Enter your friend's name"
          />
          <FriendList />
        </div>
      </Card>
    </main>
  );
};

export default Home;

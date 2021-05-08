import Card, { CardHeader } from '@comps/Card';
import FriendList from '@comps/Friend/FriendList';
import ImgButton from '@comps/ImgButton';
import SearchIcon from '@icons/search.svg';
import React from 'react';

const Home = () => {
  return (
    <main className="grid h-full place-content-center bg-red-100 font-sans tracking-wide">
      <Card hasHeader>
        <CardHeader>
          <h1>Friends List</h1>
          <ImgButton imgPath={SearchIcon} alt="search-icon" />
        </CardHeader>
        <div className="text-sm">
          <input
            type="text"
            className="w-full outline-none py-2 h-12 px-6 border-b-2 border-gray-300"
            placeholder="Enter your friend's name"
            // onKeyUp={() => }
          />
          <FriendList />
        </div>
      </Card>
    </main>
  );
};

export default Home;

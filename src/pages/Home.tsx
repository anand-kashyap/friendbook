import Card, { CardHeader } from '@comps/Card';
import { AddFriend, FindFriend, FriendList } from '@comps/Friend';
import ImgButton from '@comps/ImgButton';
import { LeftAltIcon, SearchIcon } from '@icons/index';
import React, { useState } from 'react';

const Home = () => {
  const [searching, setSearching] = useState(false);

  return (
    <main className="grid h-full place-content-center bg-red-100 font-sans tracking-wide">
      <Card hasHeader>
        <CardHeader>
          {!searching && (
            <>
              <h1>Friends List</h1>
              <ImgButton imgPath={SearchIcon} alt="search-icon" onClick={() => setSearching(!searching)} />
            </>
          )}
          {searching && (
            <>
              <ImgButton
                imgPath={LeftAltIcon}
                alt="close-icon"
                className="h-9 w-8 bg-white p-2 rounded-l-lg border-r border-gray-300"
                onClick={() => setSearching(false)}
              />
              <FindFriend className="flex-grow rounded-l-none" onEscape={() => setSearching(false)} />
            </>
          )}
        </CardHeader>
        <div className="text-sm">
          {!searching && <AddFriend />}
          <FriendList />
        </div>
      </Card>
    </main>
  );
};

export default Home;

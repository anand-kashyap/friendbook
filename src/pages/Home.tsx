import Card, { CardHeader } from '@comps/Card';
import FriendList from '@comps/Friend/FriendList';
import ImgButton from '@comps/ImgButton';
import friendContext from '@context/friend/friendContext';
import SearchIcon from '@icons/search.svg';
import React, { useContext, useState } from 'react';

const Home = () => {
  const { addFriend } = useContext(friendContext);
  const [userInput, setUserInput] = useState('');

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
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyUp={e => {
              const isEnterKey = e.key === 'Enter',
                isValidString = userInput.trim().length > 0,
                shouldAddFriend = isEnterKey && isValidString;
              if (shouldAddFriend) {
                addFriend(userInput);
                setUserInput('');
              }
            }}
          />
          <FriendList />
        </div>
      </Card>
    </main>
  );
};

export default Home;

import friendContext from '@context/friend/friendContext';
import React, { useContext, useState } from 'react';

const AddFriend = () => {
  const { addFriend } = useContext(friendContext),
    [userInput, setUserInput] = useState('');

  return (
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
  );
};

export default AddFriend;

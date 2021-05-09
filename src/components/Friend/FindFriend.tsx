import friendContext from '@context/friend/friendContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

type FindFriendProps = {
  className?: string;
  onEscape?: () => any;
};

const FindFriend = ({ className = '', onEscape }: FindFriendProps) => {
  const { findFriend, resetSearch, friends } = useContext(friendContext),
    [allFriends, setAllFriends] = useState(friends);

  const txtFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAllFriends(friends);
    txtFieldRef.current?.focus();

    return () => {
      resetSearch(allFriends);
    };
  }, []);

  return (
    <input
      type="text"
      ref={txtFieldRef}
      onKeyUp={e => {
        if (e.key === 'Escape' && onEscape) {
          return onEscape();
        }
        const searchTerm = e.currentTarget.value.trim();
        findFriend(searchTerm, allFriends);
      }}
      className={`outline-none py-2 h-9 text-sm px-2 rounded-lg ${className}`}
      placeholder="Search friend by name"
    />
  );
};

export default FindFriend;

import friendContext from '@context/friend/friendContext';
import { Friend as IFriend } from '@context/friend/types';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Friend from './Friend';
import Pagination from './Pagination';

function FriendList() {
  const { friends } = useContext(friendContext),
    [limit] = useState(4),
    [currentPage, setCurrentPage] = useState(1),
    [currentPageFriends, setCurrentPageFriends] = useState<IFriend[]>([]);

  useEffect(() => {
    if (friends.length > limit) {
      calcCurrentPageFriends(currentPage, limit);
    } else {
      setCurrentPageFriends(friends);
    }
  }, [currentPage, friends, limit]);

  const calcCurrentPageFriends = (currentPage: number, limit: number) => {
    const startIndex = currentPage * limit - limit;
    setCurrentPageFriends(friends.slice(startIndex, startIndex + limit));
  };

  return (
    <Fragment>
      {currentPageFriends.map((friend, i) => (
        <Friend friend={friend} index={i + limit * (currentPage - 1)} key={i} />
      ))}
      {friends.length > limit && (
        <Pagination totalItems={friends.length} setPage={setCurrentPage} currentPage={currentPage} />
      )}
    </Fragment>
  );
}

export default FriendList;

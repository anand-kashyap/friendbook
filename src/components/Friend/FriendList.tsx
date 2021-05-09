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
        <Friend
          friend={friend}
          isLast={i + 1 === currentPageFriends.length}
          index={i + limit * (currentPage - 1)}
          key={i}
        />
      ))}
      <Pagination totalItems={friends.length} limit={limit} setPage={setCurrentPage} currentPage={currentPage} />
      {currentPageFriends.length < 1 && <p className="px-6 py-3 "> No friends to show. </p>}
    </Fragment>
  );
}

export default FriendList;

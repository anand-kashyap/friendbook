import friendContext from '@context/friend/friendContext';
import { LeftIcon, RightIcon } from '@icons/index';
import React, { useContext } from 'react';
import ImgButton from '../ImgButton';
import Friend from './Friend';

function FriendList() {
  const { friends } = useContext(friendContext);

  return (
    <React.Fragment>
      {friends.map((friend, i) => (
        <Friend friend={friend} isLast={i === friends.length - 1} index={i} key={i} />
      ))}
      {friends.length > 4 && (
        <div>
          <ImgButton imgPath={LeftIcon} alt="arrow-left-icon" />
          <ImgButton imgPath={RightIcon} alt="arrow-right-icon" />
        </div>
      )}
    </React.Fragment>
  );
}

export default FriendList;

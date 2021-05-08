import { Friend as IFriend } from '@context/friend/types';
import { DelIcon } from '@icons/index';
import React from 'react';
import GoldStarComp from '../../assets/icons/gold-star.svg?component';
import StarComp from '../../assets/icons/star.svg?component';
import ImgButton from '../ImgButton';

type FriendProps = { friend: IFriend; isLast?: boolean; index: number; toggleFavourite: () => void };

const Friend = ({ friend, index, isLast = false, toggleFavourite }: FriendProps) => {
  return (
    <div className={`flex justify-between px-6 py-3 border-b-2 ${isLast ? 'border-transparent' : 'border-gray-300'}`}>
      <div className="details">
        <p>{friend.name}</p>
        <p className="font-light text-xs tracking-wider">is your friend</p>
      </div>
      <div className="flex gap-3">
        <button className="h-6 w-6" onClick={() => toggleFavourite()}>
          {friend.isFavourite ? <GoldStarComp /> : <StarComp />}
        </button>
        <ImgButton imgPath={DelIcon} alt="delete-icon" />
      </div>
    </div>
  );
};

export default Friend;

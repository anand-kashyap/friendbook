import React, { useContext } from 'react';
import LeftIcon from '../../assets/icons/arrow-left.svg';
import RightIcon from '../../assets/icons/arrow-right.svg';
import DelIcon from '../../assets/icons/delete.svg';
import StarIcon from '../../assets/icons/star.svg';
import friendContext from '../../context/friend/friendContext';
import ImgButton from '../ImgButton';

function FriendList() {
  const { friends, addFriend } = useContext(friendContext);
  // todo - add tsconfig path, svg as component setup?
  return (
    <React.Fragment>
      {friends.map(({ name, isFavourite }, i) => (
        <div
          className={`flex justify-between px-6 py-3 border-b-2 ${
            i === friends.length - 1 ? 'border-transparent' : 'border-gray-300'
          }`}
          key={i}
        >
          <div className="details">
            <p>{name}</p>
            <p className="font-light text-xs tracking-wider">is your friend</p>
          </div>
          <div className="flex gap-3">
            <ImgButton imgPath={StarIcon} alt="favourite-icon" />
            <ImgButton imgPath={DelIcon} alt="delete-icon" />
          </div>
        </div>
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

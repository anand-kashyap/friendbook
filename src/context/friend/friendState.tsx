import React, { useReducer } from 'react';
import FriendContext from './friendContext';
import FriendReducer from './friendReducer';
import { FriendActionTypes } from './types';

const FriendProvider = (props: React.PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(FriendReducer, [
    { name: 'Rahul Gupta', isFavourite: true },
    { name: 'Shivangi Sharma', isFavourite: false },
    { name: 'Akash Singh', isFavourite: false },
  ]);

  const addFriend = (friendName: string) => {
    dispatch({ type: FriendActionTypes.ADD_FRIEND, payload: friendName });
  };

  const deleteFriend = (index: number) => {
    dispatch({ type: FriendActionTypes.DELETE_FRIEND, payload: index });
  };

  const findFriend = (friendName: string) => {
    dispatch({ type: FriendActionTypes.FIND_FRIEND, payload: friendName });
  };

  const toggleFavourite = (index: number, setFav: boolean) => {
    dispatch({ type: FriendActionTypes.TOGGLE_FAVOURITE, payload: { index, setFav } });
  };

  return (
    <FriendContext.Provider value={{ friends: state, addFriend, deleteFriend, findFriend, toggleFavourite }}>
      {props.children}
    </FriendContext.Provider>
  );
};

export { FriendProvider };

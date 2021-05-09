import React, { useReducer } from 'react';
import FriendContext from './friendContext';
import FriendReducer from './friendReducer';
import { Friend, FriendActionTypes } from './types';

const FriendProvider = (props: React.PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(FriendReducer, [
    { name: 'Rahul Gupta', isFavourite: true },
    { name: 'Shivangi Sharma', isFavourite: false },
    { name: 'Akash Singh', isFavourite: false },
  ]);

  const { ADD_FRIEND, DELETE_FRIEND, FIND_FRIEND, TOGGLE_FAVOURITE, RESET_FIND_FRIEND } = FriendActionTypes;

  const addFriend = (friendName: string) => {
    dispatch({ type: ADD_FRIEND, payload: friendName });
  };

  const deleteFriend = (index: number) => {
    dispatch({ type: DELETE_FRIEND, payload: index });
  };

  const findFriend = (friendName: string, friendArr: Friend[]) => {
    dispatch({ type: FIND_FRIEND, payload: { friendName, friendArr } });
  };

  const toggleFavourite = (index: number, setFav: boolean) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: { index, setFav } });
  };

  const resetSearch = (allFriends: Friend[]) => {
    dispatch({ type: RESET_FIND_FRIEND, payload: allFriends });
  };

  return (
    <FriendContext.Provider
      value={{ friends: state, addFriend, deleteFriend, resetSearch, findFriend, toggleFavourite }}
    >
      {props.children}
    </FriendContext.Provider>
  );
};

export { FriendProvider };

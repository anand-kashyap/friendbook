import { sortFavonTop } from 'src/utils';
import { Friend, FriendActionTypes } from './types';

export default (state: any, action: { type: FriendActionTypes; payload: any }) => {
  const { type, payload } = action;

  const tState = state as Friend[];

  switch (type) {
    case FriendActionTypes.ADD_FRIEND: {
      const nState = [...state],
        newfriend: Friend = {
          name: payload,
          isFavourite: false,
        };
      nState.push(newfriend);
      return nState;
    }

    case FriendActionTypes.DELETE_FRIEND: {
      return tState.filter((friend, index) => index !== (payload as number));
    }

    case FriendActionTypes.FIND_FRIEND: {
      const { friendName, friendArr } = payload;
      return (friendArr as Friend[]).filter(({ name }) => name.toLowerCase().includes(friendName.toLowerCase()));
    }
    case FriendActionTypes.RESET_FIND_FRIEND: {
      return sortFavonTop(payload);
    }

    case FriendActionTypes.TOGGLE_FAVOURITE: {
      const { index, setFav } = payload,
        nState = [...state] as Friend[];
      nState[index].isFavourite = setFav;

      return sortFavonTop(nState);
    }

    default: {
      return state;
    }
  }
};

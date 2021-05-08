import { Friend, FriendActionTypes } from './types';

const sortByName = (f1: Friend, f2: Friend) => {
  const n1 = f1.name.toLowerCase(),
    n2 = f2.name.toLowerCase();

  let comparison = 0;
  if (n1 > n2) {
    comparison = 1;
  } else if (n1 < n2) {
    comparison = -1;
  }
  return comparison;
};

export default (state: any, action: { type: FriendActionTypes; payload: string }) => {
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

    case FriendActionTypes.DELETE_FRIEND:
      return tState.filter(({ name }) => name !== payload);

    case FriendActionTypes.FIND_FRIEND:
      return tState.find(({ name }) => name === payload);

    case FriendActionTypes.TOGGLE_FAVOURITE:
      const index = +payload;
      const nState = [...tState] as Friend[];
      nState[index].isFavourite = !nState[index].isFavourite;

      const nonFavourites: Friend[] = [];
      const favourites = nState.filter(f => {
        if (!f.isFavourite) {
          nonFavourites.push(f);
        }
        return f.isFavourite;
      });

      return favourites.sort(sortByName).concat(nonFavourites.sort(sortByName));

    default:
      return state;
  }
};
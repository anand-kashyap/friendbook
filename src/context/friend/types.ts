type Friend = {
  name: string;
  isFavourite: boolean;
};

type FriendActionFunc = (friendName: string) => void;

type FriendContextType = {
  friends: Friend[];
  addFriend: FriendActionFunc;
  deleteFriend: FriendActionFunc;
  findFriend: FriendActionFunc;
  toggleFavourite: (index: number) => void;
};

enum FriendActionTypes {
  ADD_FRIEND,
  DELETE_FRIEND,
  FIND_FRIEND,
  TOGGLE_FAVOURITE,
}

export type { Friend, FriendContextType };
export { FriendActionTypes };

import { Friend } from '@context/friend/types';

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

const sortFavonTop = (friendArr: Friend[]) => {
  const nonFavourites: Friend[] = [],
    favourites = friendArr.filter(f => {
      if (!f.isFavourite) {
        nonFavourites.push(f);
      }
      return f.isFavourite;
    });

  return favourites.sort(sortByName).concat(nonFavourites.sort(sortByName));
};

export { sortFavonTop };

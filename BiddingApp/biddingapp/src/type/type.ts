export type currentUserPropType = {
  name: string;
  image: string;
};

export type userPropType = {
  currentUser: currentUserPropType;
  setcurrentUser: React.Dispatch<React.SetStateAction<currentUserPropType>>;
};

export type productItemsPropType = {
  element: productElementPropType;
};

export type productElementPropType = {
  features: string;
  location: string;
  sold: boolean;
  currentBid: number;
  image: string;
};

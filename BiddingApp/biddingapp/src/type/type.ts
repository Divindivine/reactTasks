export type currentUserPropType = {
  name: string;
  image: string;
};

export type userPropType = {
  currentUser: currentUserPropType;
  setcurrentUser: React.Dispatch<React.SetStateAction<currentUserPropType>>;

  // setcurrentUser: React.Dispatch<
  //   React.SetStateAction<{
  //     name: string;
  //     image: string;
  //   }>
  // >;
};

export type productItemsPropType = {
  element: {
    features: string;
    location: string;
    sold: boolean;
    currentBid: number;
    image: string;
  };
};

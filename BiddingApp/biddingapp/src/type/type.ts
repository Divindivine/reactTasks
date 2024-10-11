export type eachCurrentUserPropType = {
  element: currentUserPropType
}

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
  id: number;
  features: string;
  location: string;
  sold: boolean;
  currentBid: number;
  image: string;
};

export type bidsPropType = {
  name: string;
  photo: String;
  bid: number;
}[];

export type auctionListType = {
  id: number;
  bids:bidsPropType
}[]

export type auctionElementType = {
  id: number;
  bids:bidsPropType
}

export type biddersListPropType = {
  auctionList:auctionListType;
  currentProduct:productElementPropType
}

export type specificProductDetailPropType = {
  currentProduct:productElementPropType;
  bid:number;
}

export type LoginUserDataType = {
  email: string;
  password: string;
};

export type userDataType = {
  user_name: string;
  email: string;
  password: string;
};

export type ValidationErrorType = {
  user_name?: string;
  email?: string;
  password?: string;
};

export type LoginFormPropType = {
  setWantSign: React.Dispatch<React.SetStateAction<boolean>>;
};

export type currentUserType = {
  id: number;
  user_name: string;
  email: string;
  password: string;
}

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieCategoryPropType = {
  movieClicked: (movie: MovieType) => void;
};

export type SpecificMovieDetailPropType = {
  setViewMovieDetail: React.Dispatch<React.SetStateAction<boolean>>;
  clickedMovie: MovieType;
  currentUser: currentUserType;
};

export type FavoritesDataType = {
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  user_id: number;
  id: number;
};

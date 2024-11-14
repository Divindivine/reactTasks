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


export type NowPlayingMovieType = {
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
  vote_count: number
}
export type objectPropType = objectElementPropType[];

export type objectElementPropType = {
  q: string;
  ans: (name: string, subject: string, mark: number) => string | number;
  students: string[];
  subjects: string[];
  marks: number[];
  argument1: string;
  argument2: string;
};

export type cardPropType = {
  index: number;
  element: objectElementPropType;
};

export type questionsPropType = {
  element: objectElementPropType;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type selectPropType = {
  element: objectElementPropType;
  setstudent: React.Dispatch<React.SetStateAction<string>>;
  setsubject: React.Dispatch<React.SetStateAction<string>>;
  setmark: React.Dispatch<React.SetStateAction<number>>;
};

export type answerTypeProp = {
  isOpen: boolean;
  index: number;
  element: objectPropType[number];
  student: string;
  subject: string;
  mark: number;
};
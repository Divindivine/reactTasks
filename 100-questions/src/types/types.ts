export type questionPropType = {
  q: string;
  ans: (name: string, subject: string, mark: number) => string | number;
  students: string[];
  subjects: string[];
  marks: number[];
  argument1: string;
  argument2: string;
}[];

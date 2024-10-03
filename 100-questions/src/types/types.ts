export type questionPropType = {
  arg0?: () => string | number;
  arg1?:
    | ((name: string) => string | number)
    | ((name: number) => string | number);
  arg2?:
    | ((name: string, mark: number) => string | number)
    | ((name: string, subject: string) => string | number);
  q: string;
  students?:string[];
  subjects?:string[];
  marks?:number[];
  placeholder1?: string;
  placeholder2?: string;
}[];

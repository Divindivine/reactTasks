import { questionPropType } from "../types/types";
import { function1 } from "../utils/Functions";
import { function2 } from "../utils/Functions";
import { function3 } from "../utils/Functions";
import { function4 } from "../utils/Functions";
import { function5 } from "../utils/Functions";
import { function6 } from "../utils/Functions";
import { function7 } from "../utils/Functions";
import { function8 } from "../utils/Functions";
import { function9 } from "../utils/Functions";
import { function10 } from "../utils/Functions";
import { function11 } from "../utils/Functions";
import { function12 } from "../utils/Functions";
import { function13 } from "../utils/Functions";
import { function14 } from "../utils/Functions";
import { function15 } from "../utils/Functions";
import { function16 } from "../utils/Functions";
import { function17 } from "../utils/Functions";
import { function18 } from "../utils/Functions";
import { function19 } from "../utils/Functions";
import { function20 } from "../utils/Functions";
import { function21 } from "../utils/Functions";
import { function22 } from "../utils/Functions";
import { function23 } from "../utils/Functions";
import { function24 } from "../utils/Functions";
import { function25 } from "../utils/Functions";
import { function26 } from "../utils/Functions";
import { function27 } from "../utils/Functions";
import { function28 } from "../utils/Functions";
import { function29 } from "../utils/Functions";
import { function30 } from "../utils/Functions";
import { function31 } from "../utils/Functions";
import { function32 } from "../utils/Functions";
import { function33 } from "../utils/Functions";
import { function34 } from "../utils/Functions";
import { function35 } from "../utils/Functions";
import { function36 } from "../utils/Functions";
import { function37 } from "../utils/Functions";
import { function38 } from "../utils/Functions";
import { function39 } from "../utils/Functions";
import { function40 } from "../utils/Functions";
import { function41 } from "../utils/Functions";
import { function42 } from "../utils/Functions";
import { function43 } from "../utils/Functions";
import { function44 } from "../utils/Functions";
import { function45 } from "../utils/Functions";
import { function46 } from "../utils/Functions";
import { function47 } from "../utils/Functions";
import { function48 } from "../utils/Functions";
import { function49 } from "../utils/Functions";
import { function50 } from "../utils/Functions";
import { function51 } from "../utils/Functions";
import { function52 } from "../utils/Functions";
import { function53 } from "../utils/Functions";
import { function54 } from "../utils/Functions";
import { function55 } from "../utils/Functions";
import { function56 } from "../utils/Functions";
import { function57 } from "../utils/Functions";
import { function58 } from "../utils/Functions";
import { function59 } from "../utils/Functions";
import { function60 } from "../utils/Functions";
import { function61 } from "../utils/Functions";
import { function62 } from "../utils/Functions";
import { function63 } from "../utils/Functions";
import { function64 } from "../utils/Functions";
import { function65 } from "../utils/Functions";
import { function66 } from "../utils/Functions";
import { function67 } from "../utils/Functions";
import { function68 } from "../utils/Functions";
import { function69 } from "../utils/Functions";
import { function70 } from "../utils/Functions";
import { function71 } from "../utils/Functions";
import { function72 } from "../utils/Functions";
import { function73 } from "../utils/Functions";
import { function74 } from "../utils/Functions";
import { function75 } from "../utils/Functions";
import { function76 } from "../utils/Functions";
import { function77 } from "../utils/Functions";
import { function78 } from "../utils/Functions";
import { function79 } from "../utils/Functions";
import { function80 } from "../utils/Functions";
import { function81 } from "../utils/Functions";
import { function82 } from "../utils/Functions";
import { function83 } from "../utils/Functions";
import { function84 } from "../utils/Functions";
import { function85 } from "../utils/Functions";
import { function86 } from "../utils/Functions";
import { function87 } from "../utils/Functions";
import { function88 } from "../utils/Functions";
import { function89 } from "../utils/Functions";
import { function90 } from "../utils/Functions";
import { function91 } from "../utils/Functions";
import { function92 } from "../utils/Functions";
import { function93 } from "../utils/Functions";
import { function94 } from "../utils/Functions";
import { function95 } from "../utils/Functions";
import { function96 } from "../utils/Functions";
import { function97 } from "../utils/Functions";
import { function98 } from "../utils/Functions";
import { function99 } from "../utils/Functions";
import { function100 } from "../utils/Functions";
import names from "./Names";
import subjects from "./Subjects";
import marks from "./Marks";

const questions: questionPropType = [
  {
    q: "1. Write a function to print the name of the class: 'class A'.",
    ans: (name: string, subject: string, mark: number) =>
      function1(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "2. Write a function to print the teacher's name: 'Mary'.",
    ans: (name: string, subject: string, mark: number) =>
      function2(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "3. Write a function to print the names of all the students in the class.",
    ans: (name: string, subject: string, mark: number) =>
      function3(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "4. Write a function to print the IDs of all the students in the class.",
    ans: (name: string, subject: string, mark: number) =>
      function4(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "5. Write a function to print the subject names for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function5(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "6. Write a function to print the marks of a specific student in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function6(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "7. Write a function to calculate and print the average marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function7(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "8. Write a function to calculate and print the total marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function8(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "9. Write a function to calculate and print the average marks for all students in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function9(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "10. Write a function to calculate and print the total marks for all students in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function10(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "11. Write a function to find and print the student with the highest marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function11(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "12. Write a function to find and print the student with the lowest marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function12(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "13. Write a function to find and print the student with the highest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      function13(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "14. Write a function to find and print the student with the lowest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      function14(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "15. Write a function to find and print the subject with the highest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function15(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "16. Write a function to find and print the subject with the lowest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function16(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "17. Write a function to calculate and print the overall average marks for the class.",
    ans: (name: string, subject: string, mark: number) =>
      function17(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "18. Write a function to calculate and print the overall total marks for the class.",
    ans: (name: string, subject: string, mark: number) =>
      function18(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "19. Write a function to calculate and print the average marks for each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function19(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "20. Write a function to calculate and print the total marks for each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function20(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "21. Write a function to find and print the subject with the highest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      function21(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "22. Write a function to find and print the subject with the lowest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      function22(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "23. Write a function to find and print the student(s) with the highest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function23(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "24. Write a function to find and print the student(s) with the lowest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function24(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "25. Write a function to find and print the student(s) with the highest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      function25(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "26. Write a function to find and print the student(s) with the lowest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      function26(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "27. Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function27(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "28. Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function28(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "29. Write a function to calculate and print the number of students who scored above a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function29(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "30. Write a function to calculate and print the number of students who scored below a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function30(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "31. Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function31(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "32. Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function32(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "33. Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function33(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "34. Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function34(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "35. Write a function to find and print the student(s) with the highest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      function35(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "36. Write a function to find and print the student(s) with the lowest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      function36(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "37. Write a function to find and print the subject(s) with the highest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      function37(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "38. Write a function to find and print the subject(s) with the lowest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      function38(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "39. Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function39(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "40. Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      function40(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "41. Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function41(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "42. Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function42(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },

  {
    q: "43. Write a function to find and print the subject(s) in which all students scored above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function43(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "44. Write a function to find and print the subject(s) in which all students scored below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function44(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "45. Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function45(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "46. Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function46(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "47. Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function47(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "48. Write a function to find and print the student(s) who scored the lowest marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function48(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "49. Write a function to calculate and print the average marks for each student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function49(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "50. Write a function to calculate and print the total marks for each student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function50(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "51. Write a function to find and print the student(s) who scored the highest marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function51(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "52. Write a function to find and print the student(s) who scored the lowest marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function52(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "53. Write a function to find and print the subject(s) in which the highest marks were scored.",
    ans: (name: string, subject: string, mark: number) =>
      function53(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "54. Write a function to find and print the subject(s) in which the lowest marks were scored.",
    ans: (name: string, subject: string, mark: number) =>
      function54(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "55. Write a function to find and print the student(s) who scored above the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function55(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "56. Write a function to find and print the student(s) who scored below the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function56(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "57. Write a function to find and print the subject(s) in which the average marks are above the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function57(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "58. Write a function to find and print the subject(s) in which the average marks are below the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function58(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "59. Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function59(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "60. Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function60(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "61. Write a function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function61(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "62. Write a function to find and print the subject(s) in which the lowest percentage of students scored below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      function62(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "63. Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function63(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "64. Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function64(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "65. Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function65(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "66. Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function66(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "67. Write a function to find and print the student(s) who scored above the class average marks in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function67(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "68. Write a function to find and print the student(s) who scored below the class average marks in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function68(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "69. Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function69(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "70. Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function70(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "71. Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function71(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "72. Write a function to find and print the subject(s) in which the majority of students scored below the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      function72(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "73. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function73(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "subject",
  },
  {
    q: "74. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function74(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "subject",
  },
  {
    q: "75. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function75(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "76. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function76(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "77. Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function77(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "78. Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function78(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "79. Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function79(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "80. Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function80(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "81. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function81(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "82. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function82(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "83. Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function83(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "84. Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function84(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "85. Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function85(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "86. Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      function86(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "87. Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function87(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "88. Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      function88(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "89. Write a function to find and print the student(s) who scored above the average marks of the class in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function89(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "90. Write a function to find and print the student(s) who scored below the average marks of the class in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function90(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "91. Write a function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function91(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "92. Write a function to find and print the student(s) who scored below the average marks of the class in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function92(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "93. Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class.",
    ans: (name: string, subject: string, mark: number) =>
      function93(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "94. Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class.",
    ans: (name: string, subject: string, mark: number) =>
      function94(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "95. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function95(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "96. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function96(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "97. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function97(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "98. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      function98(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "99. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function99(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "100. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      function100(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
];

export default questions;



import { questionPropType } from "../../types/types";
import { function1 } from "../functions/Functions";
import { function2 } from "../functions/Functions";
import { function3 } from "../functions/Functions";
import { function4 } from "../functions/Functions";
import { function5 } from "../functions/Functions";
import { function6 } from "../functions/Functions";
import { function7 } from "../functions/Functions";
import { function8 } from "../functions/Functions";
import { function9 } from "../functions/Functions";
import { function10 } from "../functions/Functions";
import { function11 } from "../functions/Functions";
import { function12 } from "../functions/Functions";
import { function13 } from "../functions/Functions";
import { function14 } from "../functions/Functions";
import { function15 } from "../functions/Functions";
import { function16 } from "../functions/Functions";
import { function17 } from "../functions/Functions";
import { function18 } from "../functions/Functions";
import { function19 } from "../functions/Functions";
import { function20 } from "../functions/Functions";
import { function21 } from "../functions/Functions";
import { function22 } from "../functions/Functions";
import { function23 } from "../functions/Functions";
import { function24 } from "../functions/Functions";
import { function25 } from "../functions/Functions";
import { function26 } from "../functions/Functions";
import { function27 } from "../functions/Functions";
import { function28 } from "../functions/Functions";
import { function29 } from "../functions/Functions";
import { function30 } from "../functions/Functions";
import { function31 } from "../functions/Functions";
import { function32 } from "../functions/Functions";
import { function33 } from "../functions/Functions";
import { function34 } from "../functions/Functions";
import { function35 } from "../functions/Functions";
import { function36 } from "../functions/Functions";
import { function37 } from "../functions/Functions";
import { function38 } from "../functions/Functions";
import { function39 } from "../functions/Functions";
import { function40 } from "../functions/Functions";
import { function41 } from "../functions/Functions";
import { function42 } from "../functions/Functions";
import { function43 } from "../functions/Functions";
import { function44 } from "../functions/Functions";
import { function45 } from "../functions/Functions";
import { function46 } from "../functions/Functions";
import { function47 } from "../functions/Functions";
import { function48 } from "../functions/Functions";
import { function49 } from "../functions/Functions";
import { function50 } from "../functions/Functions";
import { function51 } from "../functions/Functions";
import { function52 } from "../functions/Functions";
import { function53 } from "../functions/Functions";
import { function54 } from "../functions/Functions";
import { function55 } from "../functions/Functions";
import { function56 } from "../functions/Functions";
import { function57 } from "../functions/Functions";
import { function58 } from "../functions/Functions";
import { function59 } from "../functions/Functions";
import { function60 } from "../functions/Functions";
import { function61 } from "../functions/Functions";
import { function62 } from "../functions/Functions";
import { function63 } from "../functions/Functions";
import { function64 } from "../functions/Functions";
import { function65 } from "../functions/Functions";
import { function66 } from "../functions/Functions";
import { function67 } from "../functions/Functions";
import { function68 } from "../functions/Functions";
import { function69 } from "../functions/Functions";
import { function70 } from "../functions/Functions";
import { function71 } from "../functions/Functions";
import { function72 } from "../functions/Functions";
import { function73 } from "../functions/Functions";
import { function74 } from "../functions/Functions";
import { function75 } from "../functions/Functions";
import { function76 } from "../functions/Functions";
import { function77 } from "../functions/Functions";
import { function78 } from "../functions/Functions";
import { function79 } from "../functions/Functions";
import { function80 } from "../functions/Functions";
import { function81 } from "../functions/Functions";
import { function82 } from "../functions/Functions";
import { function83 } from "../functions/Functions";
import { function84 } from "../functions/Functions";
import { function85 } from "../functions/Functions";
import { function86 } from "../functions/Functions";
import { function87 } from "../functions/Functions";
import { function88 } from "../functions/Functions";
import { function89 } from "../functions/Functions";
import { function90 } from "../functions/Functions";
import { function91 } from "../functions/Functions";
import { function92 } from "../functions/Functions";
import { function93 } from "../functions/Functions";
import { function94 } from "../functions/Functions";
import { function95 } from "../functions/Functions";
import { function96 } from "../functions/Functions";
import { function97 } from "../functions/Functions";
import { function98 } from "../functions/Functions";
import { function99 } from "../functions/Functions";
import { function100 } from "../functions/Functions";
import names from "./Names";
import subjects from "./Subjects";
import marks from "./Marks";

const questions: questionPropType = [
  {
    q: "1. Write a function to print the name of the class: 'class A'.",
    arg0: function1,
  },
  {
    q: "2. Write a function to print the teacher's name: 'Mary'.",
    arg0: function2,
  },
  {
    q: "3. Write a function to print the names of all the students in the class.",
    arg0: function3,
  },
  {
    q: "4. Write a function to print the IDs of all the students in the class.",
    arg0: function4,
  },
  {
    q: "5. Write a function to print the subject names for a specific student.",
    arg1: (name: string) => function5(name),
    students: names,
    placeholder1: "Student Name",
  },
  {
    q: "6. Write a function to print the marks of a specific student in all subjects.",
    arg1: (name: string) => function6(name),
    students: names,
    placeholder1: "Student Name",
  },
  {
    q: "7. Write a function to calculate and print the average marks for a specific student.",
    arg1: (name: string) => function7(name),
    students: names,
    placeholder1: "Student Name",
  },
  {
    q: "8. Write a function to calculate and print the total marks for a specific student.",
    arg1: (name: string) => function8(name),
    students: names,
    placeholder1: "Student Name",
  },
  {
    q: "9. Write a function to calculate and print the average marks for all students in a specific subject.",
    arg1: (name: string) => function9(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "10. Write a function to calculate and print the total marks for all students in a specific subject.",
    arg1: (subject: string) => function10(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "11. Write a function to find and print the student with the highest marks in a specific subject.",
    arg1: (subject: string) => function11(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "12. Write a function to find and print the student with the lowest marks in a specific subject.",
    arg1: (subject: string) => function12(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "13. Write a function to find and print the student with the highest total marks.",
    arg0: function13,
  },
  {
    q: "14. Write a function to find and print the student with the lowest total marks.",
    arg0: function14,
  },
  {
    q: "15. Write a function to find and print the subject with the highest average marks.",
    arg0: function15,
  },
  {
    q: "16. Write a function to find and print the subject with the lowest average marks.",
    arg0: function16,
  },
  {
    q: "17. Write a function to calculate and print the overall average marks for the class.",
    arg0: function17,
  },
  {
    q: "18. Write a function to calculate and print the overall total marks for the class.",
    arg0: function18,
  },
  {
    q: "19. Write a function to calculate and print the average marks for each subject.",
    arg0: function19,
  },
  {
    q: "20. Write a function to calculate and print the total marks for each subject.",
    arg0: function20,
  },
  {
    q: "21. Write a function to find and print the subject with the highest total marks.",
    arg0: function21,
  },
  {
    q: "22. Write a function to find and print the subject with the lowest total marks.",
    arg0: function22,
  },
  {
    q: "23. Write a function to find and print the student(s) with the highest average marks.",
    arg0: function23,
  },
  {
    q: "24. Write a function to find and print the student(s) with the lowest average marks.",
    arg0: function24,
  },
  {
    q: "25. Write a function to find and print the student(s) with the highest total marks.",
    arg0: function25,
  },
  {
    q: "26. Write a function to find and print the student(s) with the lowest total marks.",
    arg0: function26,
  },
  {
    q: "27. Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.",
    arg2: (subject: string, mark: number) => function27(subject, mark),
    subjects: subjects,
    marks: marks,
    placeholder1: "Subject Name",
    placeholder2: "Mark",
  },
  {
    q: "28. Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.",
    arg2: (subject: string, mark: number) => function28(subject, mark),
    subjects:subjects,
    marks:marks,
    placeholder1: "Subject Name",
    placeholder2: "Mark",
  },
  {
    q: "29. Write a function to calculate and print the number of students who scored above a certain mark in all subjects.",
    arg1: (mark: number) => function29(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "30. Write a function to calculate and print the number of students who scored below a certain mark in all subjects.",
    arg1: (mark: number) => function30(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "31. Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.",
    arg2: (subject: string, mark: number) => function31(subject, mark),
    subjects:subjects,
    marks:marks,
    placeholder1: "Subject Name",
    placeholder2: "Mark",
  },
  {
    q: "32. Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.",
    arg2: (subject: string, mark: number) => function32(subject, mark),
    subjects:subjects,
    marks:marks,
    placeholder1: "Subject Name",
    placeholder2: "Mark",
  },
  {
    q: "33. Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.",
    arg1: (mark: number) => function33(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "34. Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.",
    arg1: (mark: number) => function34(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "35. Write a function to find and print the student(s) with the highest percentage of marks.",
    arg0: function35,
  },
  {
    q: "36. Write a function to find and print the student(s) with the lowest percentage of marks.",
    arg0: function36,
  },
  {
    q: "37. Write a function to find and print the subject(s) with the highest percentage of marks.",
    arg0: function37,
  },
  {
    q: "38. Write a function to find and print the subject(s) with the lowest percentage of marks.",
    arg0: function38,
  },
  {
    q: "39. Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.",
    arg1: (subject: string) => function39(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "40. Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.",
    arg1: (subject: string) => function40(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "41. Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.",
    arg1: (name: string) => function41(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "42. Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.",
    arg1: (name: string) => function42(name),
    students:names,
    placeholder1: "Student Name",
  },

  {
    q: "43. Write a function to find and print the subject(s) in which all students scored above a certain mark.",
    arg1: (mark: number) => function43(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "44. Write a function to find and print the subject(s) in which all students scored below a certain mark.",
    arg1: (mark: number) => function44(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "45. Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.",
    arg1: (mark: number) => function45(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "46. Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.",
    arg1: (mark: number) => function46(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "47. Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
    arg0: function47,
  },
  {
    q: "48. Write a function to find and print the student(s) who scored the lowest marks in at least one subject.",
    arg0: function48,
  },
  {
    q: "49. Write a function to calculate and print the average marks for each student in each subject.",
    arg0: function49,
  },
  {
    q: "50. Write a function to calculate and print the total marks for each student in each subject.",
    arg0: function50,
  },
  {
    q: "51. Write a function to find and print the student(s) who scored the highest marks in each subject.",
    arg0: function51,
  },
  {
    q: "52. Write a function to find and print the student(s) who scored the lowest marks in each subject.",
    arg0: function52,
  },
  {
    q: "53. Write a function to find and print the subject(s) in which the highest marks were scored.",
    arg0: function53,
  },
  {
    q: "54. Write a function to find and print the subject(s) in which the lowest marks were scored.",
    arg0: function54,
  },
  {
    q: "55. Write a function to find and print the student(s) who scored above the class average marks.",
    arg0: function55,
  },
  {
    q: "56. Write a function to find and print the student(s) who scored below the class average marks.",
    arg0: function56,
  },
  {
    q: "57. Write a function to find and print the subject(s) in which the average marks are above the class average marks.",
    arg0: function57,
  },
  {
    q: "58. Write a function to find and print the subject(s) in which the average marks are below the class average marks.",
    arg0: function58,
  },
  {
    q: "59. Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.",
    arg1: (mark: number) => function59(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "60. Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.",
    arg1: (mark: number) => function60(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "61. Write a function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark.",
    arg1: (mark: number) => function61(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "62. Write a function to find and print the subject(s) in which the lowest percentage of students scored below a certain mark.",
    arg1: (mark: number) => function62(mark),
    marks:marks,
    placeholder1: "Mark",
  },
  {
    q: "63. Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.",
    arg1: (subject: string) => function63(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "64. Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.",
    arg1: (subject: string) => function64(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "65. Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.",
    arg0: function65,
  },
  {
    q: "66. Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.",
    arg0: function66,
  },
  {
    q: "67. Write a function to find and print the student(s) who scored above the class average marks in all subjects.",
    arg0: function67,
  },
  {
    q: "68. Write a function to find and print the student(s) who scored below the class average marks in all subjects.",
    arg0: function68,
  },
  {
    q: "69. Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.",
    arg0: function69,
  },
  {
    q: "70. Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects.",
    arg0: function70,
  },
  {
    q: "71. Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.",
    arg0: function71,
  },
  {
    q: "72. Write a function to find and print the subject(s) in which the majority of students scored below the class average marks.",
    arg0: function72,
  },
  {
    q: "73. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.",
    arg2: (name: string, subject: string) => function73(name, subject),
    students:names,
    subjects:subjects,
    placeholder1: "Student Name",
    placeholder2: "Subject Name",
  },
  {
    q: "74. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in each subject.",
    arg2: (name: string, subject: string) => function74(name, subject),
    students:names,
    subjects:subjects,
    placeholder1: "Student Name",
    placeholder2: "Subject Name",
  },
  {
    q: "75. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.",
    arg1: (name: string) => function75(name),
    placeholder1: "Student Name",
  },
  {
    q: "76. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject.",
    arg1: (name: string) => function76(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "77. Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.",
    arg1: (name: string) => function77(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "78. Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.",
    arg1: (name: string) => function78(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "79. Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.",
    arg1: (name: string) => function79(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "80. Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.",
    arg1: (name: string) => function80(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "81. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    arg1: (name: string) => function81(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "82. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    arg1: (name: string) => function82(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "83. Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.",
    arg1: (name: string) => function83(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "84. Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.",
    arg1: (name: string) => function84(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "85. Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.",
    arg1: (subject: string) => function85(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "86. Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.",
    arg1: (subject: string) => function86(subject),
    subjects:subjects,
    placeholder1: "Subject Name",
  },
  {
    q: "87. Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.",
    arg0: function87,
  },
  {
    q: "88. Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject.",
    arg0: function88,
  },
  {
    q: "89. Write a function to find and print the student(s) who scored above the average marks of the class in all subjects.",
    arg0: function89,
  },
  {
    q: "90. Write a function to find and print the student(s) who scored below the average marks of the class in all subjects.",
    arg0: function90,
  },
  {
    q: "91. Write a function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.",
    arg0: function91,
  },
  {
    q: "92. Write a function to find and print the student(s) who scored below the average marks of the class in the majority of subjects.",
    arg0: function92,
  },
  {
    q: "93. Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class.",
    arg0: function93,
  },
  {
    q: "94. Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class.",
    arg0: function94,
  },
  {
    q: "95. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    arg1: (name: string) => function95(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "96. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    arg1: (name: string) => function96(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "97. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    arg1: (name: string) => function97(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "98. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    arg1: (name: string) => function98(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "99. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    arg1: (name: string) => function99(name),
    students:names,
    placeholder1: "Student Name",
  },
  {
    q: "100. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    arg1: (name: string) => function100(name),
    students:names,
    placeholder1: "Student Name",
  },
];

export default questions;


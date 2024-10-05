import { objectPropType } from "../type/type";
import { getAverageOfEachStudentInEachSubject, getAverageOfEachSubject, getAverageOfSubject, getBestStudent, getClassAverage, getClassName, getClassTotalMark, getHighAverageSubject, getHighestAverageOfStudent, getHighestInEachSubject, getHighestMarkInSubject, getHighestMarkStudent, getHighestMarkSubject, getLowAverageSubject, getLowesAverageOfStudent, getLowesMarkSubject, getLowestInEachSubject, getLowestMarkInSubject, getLowestMarkStudent, getPercentageAboveCertainMarkInSubject, getPercentageAboveCertainMarkInSubjects, getPercentageBelowCertainMarkInSubject, getPercentageBelowCertainMarkInSubjects, getPercentageOfAboveClassAverageInAtleastOneSubject, getPercentageOfAboveClassAverageInEachSubject, getPercentageOfBelowClassAverageInAtleastOneSubject, getPercentageOfBelowClassAverageInEachSubject, getPercentageOfStudentsAboveAverageOfSpecificStudent, getPercentageOfStudentsAboveAverageOfSpecificStudentInAll, getPercentageOfStudentsBelowAverageOfSpecificStudent, getPercentageOfStudentsBelowAverageOfSpecificStudentInAll, getPercentageStudentAboveAverageOfSpecificInMajority, getPercentageStudentBelowAverageOfSpecificInMajority, getPercentageStudentsAboveClassAverageInAll, getPercentageStudentsAboveClassAverageInAtleastOne, getPercentageStudentsAboveClassAverageInEach, getPercentageStudentsBelowClassAverageInAll, getPercentageStudentsBelowClassAverageInAtleastOne, getPercentageStudentsBelowClassAverageInEach, getStudentAboveCertainMarkInSubject, getStudentAboveCertainMarkInSubjects, getStudentAboveClassAverageInMajority, getStudentAverage, getStudentBelowCertainMarkInSubject, getStudentBelowCertainMarkInSubjects, getStudentBelowClassAverageInMajority, getStudentId, getStudentMarks, getStudentPercentageAboveClassAverageInEach, getStudentPercentageBelowClassAverageInEach, getStudentTotalMark, getStudentWithHighPercentageMark, getStudentWithHighPercentageinSubject, getStudentWithLowPercentageMark, getStudentWithLowPercentageinSubject, getStudentsAboveClassAverage, getStudentsBelowClassAverage, getStudentsBelowInAtleastOneSubject, getStudentsHighestInAtleastOneSubject, getStudentsNames, getStudentsWithAboveClassAverageInEverySubject, getStudentsWithAboveClassAverageInMajority, getStudentsWithBelowClassAverageInEverySubject, getStudentsWithBelowClassAverageInMajority, getSubjectAboveCertainMark, getSubjectAboveCertainMarkAverage, getSubjectAboveClassAverageInMajority, getSubjectAverageAboveClassAverage, getSubjectAverageAboveStudentAverage, getSubjectAverageBelowClassAverage, getSubjectAverageBelowStudentAverage, getSubjectBelowCertainMark, getSubjectBelowCertainMarkAverage, getSubjectBelowClassAverageInMajority, getSubjectOfStudent, getSubjectTotalMark, getSubjectWithAboveClassAverageInMajority, getSubjectWithBelowClassAverageInMajority, getSubjectWithHighPercentageMark, getSubjectWithHighPercentageOfStudentAboveCertainMark, getSubjectWithHighPercentageOfStudentBelowCertainMark, getSubjectWithHighestMark, getSubjectWithLowPercentageMark, getSubjectWithLowestMark, getSubjectWithLowestPercentageOfStudentAboveCertainMark, getSubjectWithLowestPercentageOfStudentBelowCertainMark, getSubjectsMoreStudentsAboveSpecificStudentAverage, getSubjectsMoreStudentsBelowSpecificStudentAverage, getSubjectsWithHighestPercentageMarkOfStudent, getSubjectsWithHighestPercentageOfAboveAverageOfStudent, getSubjectsWithHighestPercentageOfBelowAverageOfStudent, getSubjectsWithLowestPercentageMarkOfStudent, getSubjectsWithLowestPercentageOfAboveAverageOfStudent, getSubjectsWithLowestPercentageOfBelowAverageOfStudent, getTeachersName, getTotalMarkOfEachSubject, getTotalOfEachStudentInEachSubject, getWorstStudent } from "../utils/Functions";
import marks from "./Marks";
import names from "./Names";
import subjects from "./Subjects";

const questions: objectPropType = [
  {
    q: "1. Write a function to print the name of the class: 'class A'.",
    ans: (name: string, subject: string, mark: number) =>
      getClassName(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "2. Write a function to print the teacher's name: 'Mary'.",
    ans: (name: string, subject: string, mark: number) =>
      getTeachersName(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "3. Write a function to print the names of all the students in the class.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsNames(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "4. Write a function to print the IDs of all the students in the class.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentId(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "5. Write a function to print the subject names for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectOfStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "6. Write a function to print the marks of a specific student in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentMarks(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "7. Write a function to calculate and print the average marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "8. Write a function to calculate and print the total marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentTotalMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "9. Write a function to calculate and print the average marks for all students in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getAverageOfSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "10. Write a function to calculate and print the total marks for all students in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectTotalMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "11. Write a function to find and print the student with the highest marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getHighestMarkInSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "12. Write a function to find and print the student with the lowest marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getLowestMarkInSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "13. Write a function to find and print the student with the highest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      getBestStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "14. Write a function to find and print the student with the lowest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      getWorstStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "15. Write a function to find and print the subject with the highest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getHighAverageSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "16. Write a function to find and print the subject with the lowest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getLowAverageSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "17. Write a function to calculate and print the overall average marks for the class.",
    ans: (name: string, subject: string, mark: number) =>
      getClassAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "18. Write a function to calculate and print the overall total marks for the class.",
    ans: (name: string, subject: string, mark: number) =>
      getClassTotalMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "19. Write a function to calculate and print the average marks for each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getAverageOfEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "20. Write a function to calculate and print the total marks for each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getTotalMarkOfEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "21. Write a function to find and print the subject with the highest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithHighestMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "22. Write a function to find and print the subject with the lowest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithLowestMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "23. Write a function to find and print the student(s) with the highest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getHighestAverageOfStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "24. Write a function to find and print the student(s) with the lowest average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getLowesAverageOfStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "25. Write a function to find and print the student(s) with the highest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      getHighestMarkStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "26. Write a function to find and print the student(s) with the lowest total marks.",
    ans: (name: string, subject: string, mark: number) =>
      getLowestMarkStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "27. Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentAboveCertainMarkInSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "28. Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentBelowCertainMarkInSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "29. Write a function to calculate and print the number of students who scored above a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentAboveCertainMarkInSubjects(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "30. Write a function to calculate and print the number of students who scored below a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentBelowCertainMarkInSubjects(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "31. Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageAboveCertainMarkInSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "32. Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageBelowCertainMarkInSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "mark",
  },
  {
    q: "33. Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageAboveCertainMarkInSubjects(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "34. Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageBelowCertainMarkInSubjects(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "35. Write a function to find and print the student(s) with the highest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentWithHighPercentageMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "36. Write a function to find and print the student(s) with the lowest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentWithLowPercentageMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "37. Write a function to find and print the subject(s) with the highest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithHighPercentageMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "38. Write a function to find and print the subject(s) with the lowest percentage of marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithLowPercentageMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "39. Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentWithHighPercentageinSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "40. Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentWithLowPercentageinSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "41. Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsWithHighestPercentageMarkOfStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "42. Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsWithLowestPercentageMarkOfStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },

  {
    q: "43. Write a function to find and print the subject(s) in which all students scored above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAboveCertainMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "44. Write a function to find and print the subject(s) in which all students scored below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectBelowCertainMark(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "45. Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAboveCertainMarkAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "46. Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectBelowCertainMarkAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "47. Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsHighestInAtleastOneSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "48. Write a function to find and print the student(s) who scored the lowest marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsBelowInAtleastOneSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "49. Write a function to calculate and print the average marks for each student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getAverageOfEachStudentInEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "50. Write a function to calculate and print the total marks for each student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getTotalOfEachStudentInEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "51. Write a function to find and print the student(s) who scored the highest marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getHighestInEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "52. Write a function to find and print the student(s) who scored the lowest marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getLowestInEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "53. Write a function to find and print the subject(s) in which the highest marks were scored.",
    ans: (name: string, subject: string, mark: number) =>
      getHighestMarkSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "54. Write a function to find and print the subject(s) in which the lowest marks were scored.",
    ans: (name: string, subject: string, mark: number) =>
      getLowesMarkSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "55. Write a function to find and print the student(s) who scored above the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsAboveClassAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "56. Write a function to find and print the student(s) who scored below the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsBelowClassAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "57. Write a function to find and print the subject(s) in which the average marks are above the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAverageAboveClassAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "58. Write a function to find and print the subject(s) in which the average marks are below the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAverageBelowClassAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "59. Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithHighPercentageOfStudentAboveCertainMark(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "60. Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithHighPercentageOfStudentBelowCertainMark(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "61. Write a function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithLowestPercentageOfStudentAboveCertainMark(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "62. Write a function to find and print the subject(s) in which the lowest percentage of students scored below a certain mark.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithLowestPercentageOfStudentBelowCertainMark(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "mark",
    argument2: "",
  },
  {
    q: "63. Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfAboveClassAverageInEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "64. Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfBelowClassAverageInEachSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "65. Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfAboveClassAverageInAtleastOneSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "66. Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfBelowClassAverageInAtleastOneSubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "67. Write a function to find and print the student(s) who scored above the class average marks in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsWithAboveClassAverageInEverySubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "68. Write a function to find and print the student(s) who scored below the class average marks in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsWithBelowClassAverageInEverySubject(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "69. Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsWithAboveClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "70. Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentsWithBelowClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "71. Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithAboveClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "72. Write a function to find and print the subject(s) in which the majority of students scored below the class average marks.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectWithBelowClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "73. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentPercentageAboveClassAverageInEach(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "subject",
  },
  {
    q: "74. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentPercentageBelowClassAverageInEach(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "subject",
  },
  {
    q: "75. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfStudentsAboveAverageOfSpecificStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "76. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfStudentsBelowAverageOfSpecificStudent(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "77. Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfStudentsAboveAverageOfSpecificStudentInAll(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "78. Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageOfStudentsBelowAverageOfSpecificStudentInAll(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "79. Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAverageAboveStudentAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "80. Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAverageBelowStudentAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "81. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsWithHighestPercentageOfAboveAverageOfStudent(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "82. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsWithHighestPercentageOfBelowAverageOfStudent(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "83. Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsWithLowestPercentageOfAboveAverageOfStudent(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "84. Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsWithLowestPercentageOfBelowAverageOfStudent(
        name,
        subject,
        mark
      ),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "85. Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentsAboveClassAverageInEach(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "86. Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentsBelowClassAverageInEach(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "subject",
    argument2: "",
  },
  {
    q: "87. Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentsAboveClassAverageInAtleastOne(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "88. Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentsBelowClassAverageInAtleastOne(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "89. Write a function to find and print the student(s) who scored above the average marks of the class in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentsAboveClassAverageInAll(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "90. Write a function to find and print the student(s) who scored below the average marks of the class in all subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentsBelowClassAverageInAll(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "91. Write a function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentAboveClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "92. Write a function to find and print the student(s) who scored below the average marks of the class in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getStudentBelowClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "93. Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectAboveClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "94. Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectBelowClassAverageInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "",
    argument2: "",
  },
  {
    q: "95. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentAboveAverageOfSpecificInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "96. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentBelowAverageOfSpecificInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "97. Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentAboveAverageOfSpecificInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "98. Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
    ans: (name: string, subject: string, mark: number) =>
      getPercentageStudentBelowAverageOfSpecificInMajority(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "99. Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsMoreStudentsAboveSpecificStudentAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
  {
    q: "100. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
    ans: (name: string, subject: string, mark: number) =>
      getSubjectsMoreStudentsBelowSpecificStudentAverage(name, subject, mark),
    students: names,
    subjects: subjects,
    marks: marks,
    argument1: "student",
    argument2: "",
  },
];

export default questions;

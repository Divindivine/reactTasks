import classObj from "../data/Data";

const subjects = () => {
  let arr: string[] = [];
  classObj.students[0].marks.forEach((sub) => {
    arr.push(sub.subject);
  });
  return arr;
};

const students = () => {
  let arr: string[] = [];
  classObj.students.map((student) => {
    arr.push(student.name);
  });
  return arr;
};

const studentTotalMark = () => {
  type obje = {
    name: string;
    total: number;
  }[];

  let arr: obje = [];

  classObj.students.map((student) => {
    let mark = 0;
    student.marks.forEach((obj) => {
      mark += obj.mark;
    });
    arr.push({ name: student.name, total: mark });
  });
  arr.sort((a, b) => a.total - b.total);
  return arr;
};

export const getClassName = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  return classObj.name;
};

export const getTeachersName = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  return classObj.teacherName;
};

export const getStudentsNames = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let names = "";
  let nameArr = students();
  nameArr.forEach((name) => {
    names += name + ",";
  });
  return names;
};

export const getStudentId = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let id = "";
  classObj.students.map((student) => {
    id += student.id + ",";
  });
  return id;
};

export const getSubjectOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let subject = "";
  classObj.students.map((student) => {
    if (student.name === studentName) {
      student.marks.forEach((obj) => {
        subject += obj.subject + ",";
      });
    }
  });
  return subject;
};

export const getStudentMarks = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let result = "";
  classObj.students.map((student) => {
    if (student.name === studentName) {
      student.marks.forEach((obj) => {
        result += obj.subject + ":" + obj.mark + ",";
      });
    }
  });
  return result;
};

export const getStudentAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mark = 0;
  let index = 0;
  let result = 0;
  classObj.students.map((student) => {
    if (student.name === studentName) {
      student.marks.forEach((obj) => {
        mark += obj.mark;
        index = index + 1;
      });
    }
  });
  result = mark / index;
  return result;
};

export const getStudentTotalMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mark = 0;
  classObj.students.map((student) => {
    if (student.name === studentName) {
      student.marks.forEach((obj) => {
        mark += obj.mark;
      });
    }
  });
  return mark;
};

export const getAverageOfSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mark = 0;
  let number = 0;
  let result = 0;
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === subjectName) {
        mark += obj.mark;
        number += 1;
      }
    });
  });
  result = mark / number;
  return result;
};

export const getSubjectTotalMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mark = 0;
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === subjectName) {
        mark += obj.mark;
      }
    });
  });
  return mark;
};

export const getHighestMarkInSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let prevmark = 0;
  let newmark = 0;
  let name = "";
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === subjectName) {
        prevmark = obj.mark;
        if (newmark < prevmark) {
          newmark = prevmark;
          name = student.name;
        }
      }
    });
  });
  return name;
};

export const getLowestMarkInSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let prevmark = 0;
  let newmark = 0;
  let name = "";
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === subjectName) {
        prevmark = obj.mark;
        if (newmark === 0) {
          newmark = prevmark;
          name = student.name;
        }
        if (newmark > prevmark) {
          newmark = prevmark;
          name = student.name;
        }
      }
    });
  });
  return name;
};

const markSortStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    mark: number;
    name: string;
  }[];

  let arr: obj = [];
  classObj.students.map((student) => {
    let mark = getStudentTotalMark(student.name, subjectName, markScored);
    let name = student.name;
    let item = { mark: mark, name: name };
    arr.push(item);
  });
  arr.sort((a, b) => a.mark - b.mark);
  return arr;
};

export const getBestStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let data = markSortStudent(studentName, subjectName, markScored);
  return data[data.length - 1].name;
};

export const getWorstStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let data = markSortStudent(studentName, subjectName, markScored);
  return data[0].name;
};

const subjectAverage = () => {
  let arr = getTotalMarksBySubject();
  type subjectMark = {
    subject: string;
    mark: number;
  }[];

  let newArr: subjectMark = [];

  arr.forEach((element) => {
    newArr.push({
      subject: element.subject,
      mark: element.mark / classObj.students.length,
    });
  });
  newArr.sort((a, b) => a.mark - b.mark);
  return newArr;
};

export const getHighAverageSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = subjectAverage();
  return arr[arr.length - 1].subject;
};

export const getLowAverageSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = subjectAverage();
  return arr[0].subject;
};

const getTotalMarksBySubject = () => {
  type subjectMark = {
    subject: string;
    mark: number;
  }[];

  let arr: subjectMark = [];

  let subs = subjects();

  subs.forEach((sub) => {
    arr.push({ subject: sub, mark: 0 });
  });

  classObj.students.forEach((student) => {
    student.marks.forEach((sub) => {
      arr.forEach((subject) => {
        if (sub.subject === subject.subject) {
          subject.mark += sub.mark;
        }
      });
    });
  });
  arr.sort((a, b) => a.mark - b.mark);
  return arr;
};

export const getClassAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  let totalSubjects = subjects();
  let total = 0;
  arr.forEach((element) => {
    total += element.mark;
  });

  return total / (classObj.students.length * totalSubjects.length);
};

export const getClassTotalMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  let total = 0;
  arr.forEach((element) => {
    total += element.mark;
  });
  return total;
};

export const getAverageOfEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let string = "";
  let obj = subjectAverage();
  obj.forEach((element) => {
    string += element.subject + ":" + element.mark + ",";
  });
  return string;
};

export const getTotalMarkOfEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let string = "";
  let obj = getTotalMarksBySubject();
  obj.forEach((element) => {
    string += element.subject + ":" + element.mark + ",";
  });
  return string;
};

export const getSubjectWithHighestMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return arr[arr.length - 1].subject;
};

export const getSubjectWithLowestMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return arr[0].subject;
};

const averageMarkStudent = () => {
  type obj = {
    name: string;
    average: number;
  }[];

  let arr: obj = [];

  const total = studentTotalMark();
  const totalSub = subjects();

  total.forEach((element) => {
    arr.push({ name: element.name, average: element.total / totalSub.length });
  });
  arr.sort((a, b) => a.average - b.average);
  return arr;
};

export const getHighestAverageOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = averageMarkStudent();
  return arr[arr.length - 1].name;
};

export const getLowesAverageOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = averageMarkStudent();
  return arr[0].name;
};

export const getHighestMarkStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = studentTotalMark();
  return arr[arr.length - 1].name;
};

export const getLowestMarkStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = studentTotalMark();
  return arr[0].name;
};

export const getStudentAboveCertainMarkInSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark > markScored) {
          counter += 1;
        }
      }
    });
  });
  return counter;
};

export const getStudentBelowCertainMarkInSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark < markScored) {
          counter += 1;
        }
      }
    });
  });
  return counter;
};

export const getStudentAboveCertainMarkInSubjects = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  let incr = 0;
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > markScored) {
        counter = 1;
      } else {
        counter = 0;
      }
    });
    if (counter === 1) {
      incr += 1;
    }
  });
  return incr;
};

export const getStudentBelowCertainMarkInSubjects = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  let incr = 0;
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < markScored) {
        counter = 1;
      } else {
        counter = 0;
      }
    });
    if (counter === 1) {
      incr += 1;
    }
  });
  return incr;
};

export const getPercentageAboveCertainMarkInSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = getStudentAboveCertainMarkInSubject(
    studentName,
    subjectName,
    markScored
  );
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

export const getPercentageBelowCertainMarkInSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = getStudentBelowCertainMarkInSubject(
    studentName,
    subjectName,
    markScored
  );
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

export const getPercentageAboveCertainMarkInSubjects = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = getStudentAboveCertainMarkInSubjects(
    studentName,
    subjectName,
    markScored
  );
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

export const getPercentageBelowCertainMarkInSubjects = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = getStudentBelowCertainMarkInSubjects(
    studentName,
    subjectName,
    markScored
  );
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

export const getStudentWithHighPercentageMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = studentTotalMark();
  return `${arr[arr.length - 1].name}: ${
    (arr[arr.length - 1].total * 100) / 250
  }%`;
};

export const getStudentWithLowPercentageMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = studentTotalMark();
  return `${arr[0].name}: ${(arr[0].total * 100) / 250}%`;
};

export const getSubjectWithHighPercentageMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return `${arr[arr.length - 1].subject}: ${
    (arr[arr.length - 1].mark * 100) / 200
  }%`;
};

export const getSubjectWithLowPercentageMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return `${arr[0].subject}: ${(arr[0].mark * 100) / 200}%`;
};

export const getStudentWithHighPercentageinSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let name = getHighestMarkInSubject(studentName, subjectName, markScored);
  let mark = 0;
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (student.name === name) {
        if (element.subject === subjectName) {
          mark = element.mark;
        }
      }
    });
  });
  return `${name}: ${(mark * 100) / 50}%`;
};

export const getStudentWithLowPercentageinSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let name = getLowestMarkInSubject(studentName, subjectName, markScored);
  let mark = 0;
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (student.name === name) {
        if (element.subject === subjectName) {
          mark = element.mark;
        }
      }
    });
  });
  return `${name}: ${(mark * 100) / 50}%`;
};

export const getSubjectsWithHighestPercentageMarkOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let prev = 0;
  let curr = 0;
  let sub = "";

  classObj.students.forEach((student) => {
    if (student.name === studentName) {
      student.marks.forEach((element) => {
        curr = element.mark;
        if (prev < curr) {
          prev = curr;
          sub = element.subject;
        }
      });
    }
  });
  return `${sub}: ${(prev * 100) / 50}%`;
};

export const getSubjectsWithLowestPercentageMarkOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let prev = 0;
  let curr = 0;
  let sub = "";

  classObj.students.forEach((student) => {
    if (student.name === studentName) {
      student.marks.forEach((element) => {
        curr = element.mark;
        if (prev > curr) {
          prev = curr;
          sub = element.subject;
        }
        if (prev === 0) {
          prev = curr;
          sub = element.subject;
        }
      });
    }
  });
  return `${sub}: ${(prev * 100) / 50}%`;
};

export const getSubjectAboveCertainMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let filteredSubs = "";
  let subs = subjects();
  subs.forEach((sub) => {
    let flag = 0;
    classObj.students.forEach((student) => {
      student.marks.forEach((element) => {
        if (sub === element.subject) {
          if (element.mark < markScored) {
            flag = 1;
          }
        }
      });
    });
    if (flag === 0) {
      filteredSubs += sub + ",";
    }
  });
  return filteredSubs;
};

export const getSubjectBelowCertainMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let filteredSubs = "";
  let subs = subjects();
  subs.forEach((sub) => {
    let flag = 0;
    classObj.students.forEach((student) => {
      student.marks.forEach((element) => {
        if (sub === element.subject) {
          if (element.mark > markScored) {
            flag = 1;
          }
        }
      });
    });
    if (flag === 0) {
      filteredSubs += sub + ",";
    }
  });
  return filteredSubs;
};

export const getSubjectAboveCertainMarkAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let filterdSubs = "";
  let flag = 0;
  let studentAverage = averageMarkStudent();
  let subs = subjects();
  subs.forEach((subject) => {
    studentAverage.forEach((elem) => {
      if (elem.average < markScored) {
        flag = 1;
      }
    });
    if (flag === 0) {
      filterdSubs += subject + ",";
    }
  });
  return filterdSubs;
};

export const getSubjectBelowCertainMarkAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let filterdSubs = "";
  let flag = 0;
  let studentAverage = averageMarkStudent();
  let subs = subjects();
  subs.forEach((subject) => {
    studentAverage.forEach((elem) => {
      if (elem.average > markScored) {
        flag = 1;
      }
    });

    if (flag === 0) {
      filterdSubs += subject + ",";
    }
  });
  return filterdSubs;
};

export const getStudentsHighestInAtleastOneSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let names = "";
  const totalSubjects = subjects();
  let arr: string[] = [];
  let temp = "";
  totalSubjects.forEach((subject) => {
    temp = getHighestMarkInSubject(studentName, subject, markScored);
    arr.push(temp);
  });
  const filtered = arr.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  filtered.forEach((name) => {
    names += name + ",";
  });
  return names;
};

export const getStudentsBelowInAtleastOneSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let names = "";
  const totalSubjects = subjects();
  let arr: string[] = [];
  let temp = "";
  totalSubjects.forEach((subject) => {
    temp = getLowestMarkInSubject(studentName, subject, markScored);
    arr.push(temp);
  });
  const filtered = arr.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  filtered.forEach((name) => {
    names += name + ",";
  });
  return names;
};

export const getAverageOfEachStudentInEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  type obj = {
    name: string;
    subject: string;
    average: number;
  }[];

  let arr: obj = [];
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      arr.push({
        name: student.name,
        subject: element.subject,
        average: element.mark,
      });
    });
  });
  arr.forEach((element) => {
    str += element.name + ":" + element.subject + ":" + element.average + "   ";
  });
  return str;
};

export const getTotalOfEachStudentInEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  type obj = {
    name: string;
    subject: string;
    total: number;
  }[];

  let arr: obj = [];
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      arr.push({
        name: student.name,
        subject: element.subject,
        total: element.mark,
      });
    });
  });
  arr.forEach((element) => {
    str += element.name + ":" + element.subject + ":" + element.total + "   ";
  });
  return str;
};

export const getHighestInEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = element + ":" + " ";
    temp += getHighestMarkInSubject(studentName, element, markScored);
    arr.push(temp);
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getLowestInEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = element + ":" + " ";
    temp += getLowestMarkInSubject(studentName, element, markScored);
    arr.push(temp);
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getHighestMarkSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let prev = 0;
  let curr = 0;
  let sub = "";
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      curr = element.mark;
      if (prev < curr) {
        prev = curr;
        sub = element.subject + ":" + prev;
      }
    });
  });
  return sub;
};

export const getLowesMarkSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let prev = 0;
  let curr = 0;
  let sub = "";
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      curr = element.mark;
      if (prev === 0) {
        prev = curr;
        sub = element.subject + ":" + prev;
      }
      if (prev > curr) {
        prev = curr;
        sub = element.subject + ":" + prev;
      }
    });
  });
  return sub;
};

export const getStudentsAboveClassAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  const totalStudents = students();
  let str = "";
  let arr: string[] = [];
  totalStudents.forEach((student) => {
    let temp = getStudentAverage(student, subjectName, markScored);
    if (temp > classAverage) {
      arr.push(student);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getStudentsBelowClassAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  const totalStudents = students();
  let str = "";
  let arr: string[] = [];
  totalStudents.forEach((student) => {
    let temp = getStudentAverage(student, subjectName, markScored);
    if (temp < classAverage) {
      arr.push(student);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectAverageAboveClassAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  const totalSubs = subjects();

  let str = "";
  let arr: string[] = [];

  totalSubs.forEach((sub) => {
    let temp = getAverageOfSubject(studentName, sub, markScored);
    if (temp > classAverage) {
      arr.push(sub);
    }
  });
  arr.forEach((elem) => {
    str += elem;
  });
  return str;
};

export const getSubjectAverageBelowClassAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  const totalSubs = subjects();

  let str = "";
  let arr: string[] = [];

  totalSubs.forEach((sub) => {
    let temp = getAverageOfSubject(studentName, sub, markScored);
    if (temp < classAverage) {
      arr.push(sub);
    }
  });
  arr.forEach((elem) => {
    str += elem + ",";
  });
  return str;
};

export const getSubjectWithHighPercentageOfStudentAboveCertainMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const totalSubjects = subjects();
  totalSubjects.forEach((sub) => {
    arr.push({ subject: sub, counter: 0 });
  });

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > markScored) {
        arr.forEach((elem) => {
          if (elem.subject === element.subject) {
            elem.counter += 1;
          }
        });
      }
    });
  });
  arr.sort((a, b) => a.counter - b.counter);
  return arr[arr.length - 1].subject;
};

export const getSubjectWithHighPercentageOfStudentBelowCertainMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const totalSubjects = subjects();
  totalSubjects.forEach((sub) => {
    arr.push({ subject: sub, counter: 0 });
  });

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < markScored) {
        arr.forEach((elem) => {
          if (elem.subject === element.subject) {
            elem.counter += 1;
          }
        });
      }
    });
  });
  arr.sort((a, b) => a.counter - b.counter);
  return arr[arr.length - 1].subject;
};

export const getSubjectWithLowestPercentageOfStudentAboveCertainMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const totalSubjects = subjects();
  totalSubjects.forEach((sub) => {
    arr.push({ subject: sub, counter: 0 });
  });

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > markScored) {
        arr.forEach((elem) => {
          if (elem.subject === element.subject) {
            elem.counter += 1;
          }
        });
      }
    });
  });
  arr.sort((a, b) => a.counter - b.counter);
  return arr[0].subject;
};

export const getSubjectWithLowestPercentageOfStudentBelowCertainMark = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const totalSubjects = subjects();
  totalSubjects.forEach((sub) => {
    arr.push({ subject: sub, counter: 0 });
  });

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < markScored) {
        arr.forEach((elem) => {
          if (elem.subject === element.subject) {
            elem.counter += 1;
          }
        });
      }
    });
  });
  arr.sort((a, b) => a.counter - b.counter);
  return arr[0].subject;
};

export const getPercentageOfAboveClassAverageInEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark > classAverage) {
          counter += 1;
        }
      }
    });
  });
  return (counter * 100) / classObj.students.length + "%";
};

export const getPercentageOfBelowClassAverageInEachSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark < classAverage) {
          counter += 1;
        }
      }
    });
  });
  return (counter * 100) / classObj.students.length + "%";
};

export const getPercentageOfAboveClassAverageInAtleastOneSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < classAverage) {
        counter += 1;
      }
    });
    if (counter >= 1) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / classObj.students.length + "%";
};

export const getPercentageOfBelowClassAverageInAtleastOneSubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter >= 1) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / classObj.students.length + "%";
};

export const getStudentsWithAboveClassAverageInEverySubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter === student.marks.length) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / classObj.students.length + "%";
};

export const getStudentsWithBelowClassAverageInEverySubject = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < classAverage) {
        counter += 1;
      }
    });
    if (counter === student.marks.length) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / classObj.students.length + "%";
};

export const getStudentsWithAboveClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter > student.marks.length / 2) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / classObj.students.length + "%";
};

export const getStudentsWithBelowClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < classAverage) {
        counter += 1;
      }
    });
    if (counter > student.marks.length / 2) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / classObj.students.length + "%";
};

export const getSubjectWithAboveClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const classAverage = getClassAverage(studentName, subjectName, markScored);
  const totalSubjects = subjects();
  totalSubjects.forEach((sub) => {
    let counter = 0;
    classObj.students.forEach((student) => {
      student.marks.forEach((element) => {
        if (element.subject === sub) {
          if (element.mark > classAverage) {
            counter += 1;
          }
        }
      });
    });
    arr.push({ subject: sub, counter: counter });
  });
  arr.sort((a, b) => a.counter - b.counter);
  return arr[arr.length - 1].subject;
};

export const getSubjectWithBelowClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const classAverage = getClassAverage(studentName, subjectName, markScored);
  const totalSubjects = subjects();
  totalSubjects.forEach((sub) => {
    let counter = 0;
    classObj.students.forEach((student) => {
      student.marks.forEach((element) => {
        if (element.subject === sub) {
          if (element.mark > classAverage) {
            counter += 1;
          }
        }
      });
    });
    arr.push({ subject: sub, counter: counter });
  });
  arr.sort((a, b) => a.counter - b.counter);
  return arr[0].subject;
};

export const getStudentPercentageAboveClassAverageInEach = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let counter = 0;

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark > particularAverage) {
          counter += 1;
        }
      }
    });
  });
  return (counter * 100) / 4 + "%";
};

export const getStudentPercentageBelowClassAverageInEach = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let counter = 0;

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark < particularAverage) {
          counter += 1;
        }
      }
    });
  });
  return (counter * 100) / 4 + "%";
};

export const getPercentageOfStudentsAboveAverageOfSpecificStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let counter = 0;
  let mainCounter = 0;

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > particularAverage) {
        counter += 1;
      }
    });
    if (counter > 1) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / 4 + "%";
};

export const getPercentageOfStudentsBelowAverageOfSpecificStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let counter = 0;
  let mainCounter = 0;

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < particularAverage) {
        counter += 1;
      }
    });
    if (counter > 1) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / 4 + "%";
};

export const getPercentageOfStudentsAboveAverageOfSpecificStudentInAll = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let counter = 0;
  let mainCounter = 0;

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > particularAverage) {
        counter += 1;
      }
    });
    if (counter === student.marks.length) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / 4 + "%";
};

export const getPercentageOfStudentsBelowAverageOfSpecificStudentInAll = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let counter = 0;
  let mainCounter = 0;

  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < particularAverage) {
        counter += 1;
      }
    });
    if (counter === student.marks.length) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / 4 + "%";
};

export const getSubjectAverageAboveStudentAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = getAverageOfSubject(studentName, element, markScored);
    if (temp > particularAverage) {
      arr.push(element);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectAverageBelowStudentAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = getAverageOfSubject(studentName, element, markScored);
    if (temp < particularAverage) {
      arr.push(element);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectsWithHighestPercentageOfAboveAverageOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  const subAverage = subjectAverage();
  let filterdArray: string[] = [];
  subAverage.forEach((element) => {
    if (element.mark > particularAverage) {
      filterdArray.push(element.subject);
    }
  });
  filterdArray.map((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectsWithHighestPercentageOfBelowAverageOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  const subAverage = subjectAverage();
  let filterdArray: string[] = [];
  subAverage.forEach((element) => {
    if (element.mark < particularAverage) {
      filterdArray.push(element.subject);
    }
  });
  filterdArray.map((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectsWithLowestPercentageOfAboveAverageOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  const newArray: string[] = [];
  const subAverage = subjectAverage();
  let filterdArray: string[] = [];
  subAverage.forEach((element) => {
    if (element.mark < particularAverage) {
      filterdArray.push(element.subject);
    }
  });
  subAverage.forEach((element) => {
    if (filterdArray.includes(element.subject)) {
      //do nothing
    } else {
      newArray.push(element.subject);
    }
  });
  newArray.map((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectsWithLowestPercentageOfBelowAverageOfStudent = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = getStudentAverage(
    studentName,
    subjectName,
    markScored
  );
  const newArray: string[] = [];
  const subAverage = subjectAverage();
  let filterdArray: string[] = [];
  subAverage.forEach((element) => {
    if (element.mark > particularAverage) {
      filterdArray.push(element.subject);
    }
  });
  subAverage.forEach((element) => {
    if (filterdArray.includes(element.subject)) {
      //do nothing
    } else {
      newArray.push(element.subject);
    }
  });
  newArray.map((element) => {
    str += element + ",";
  });
  return str;
};

export const getPercentageStudentsAboveClassAverageInEach = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark > classAverage) {
          counter += 1;
        }
      }
    });
  });
  return (counter * 100) / 4 + "%";
};

export const getPercentageStudentsBelowClassAverageInEach = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.subject === subjectName) {
        if (element.mark < classAverage) {
          counter += 1;
        }
      }
    });
  });
  return (counter * 100) / 4 + "%";
};

export const getPercentageStudentsAboveClassAverageInAtleastOne = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  let mainCounter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter >= 1) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / 4 + "%";
};

export const getPercentageStudentsBelowClassAverageInAtleastOne = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  let mainCounter = 0;
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < classAverage) {
        counter += 1;
      }
    });
    if (counter >= 1) {
      mainCounter += 1;
    }
    counter = 0;
  });
  return (mainCounter * 100) / 4 + "%";
};

export const getPercentageStudentsAboveClassAverageInAll = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter === student.marks.length) {
      arr.push(student.name);
    }
    counter = 0;
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getPercentageStudentsBelowClassAverageInAll = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark < classAverage) {
        counter += 1;
      }
    });
    if (counter === student.marks.length) {
      arr.push(student.name);
    }
    counter = 0;
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getStudentAboveClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter >= student.marks.length / 2) {
      arr.push(student.name);
    }
    counter = 0;
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getStudentBelowClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = getClassAverage(studentName, subjectName, markScored);
  classObj.students.forEach((student) => {
    student.marks.forEach((element) => {
      if (element.mark > classAverage) {
        counter += 1;
      }
    });
    if (counter <= student.marks.length / 2) {
      arr.push(student.name);
    }
    counter = 0;
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

export const getSubjectAboveClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = getHighAverageSubject(studentName, subjectName, markScored);
  return ans;
};

export const getSubjectBelowClassAverageInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = getLowAverageSubject(studentName, subjectName, markScored);
  return ans;
};

export const getPercentageStudentAboveAverageOfSpecificInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let sum = 0;
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = getStudentPercentageAboveClassAverageInEach(
      studentName,
      element,
      markScored
    );
    let charToRemove = "%";
    let newStr = temp.replace(charToRemove, "");
    arr.push(newStr);
  });
  arr.map((element) => {
    sum += Number(element);
  });
  return sum / 4 + "%";
};

export const getPercentageStudentBelowAverageOfSpecificInMajority = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let sum = 0;
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = getStudentPercentageBelowClassAverageInEach(
      studentName,
      element,
      markScored
    );
    let charToRemove = "%";
    let newStr = temp.replace(charToRemove, "");
    arr.push(newStr);
  });
  arr.map((element) => {
    sum += Number(element);
  });
  return sum / 4 + "%";
};

export const getSubjectsMoreStudentsAboveSpecificStudentAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = getSubjectsWithHighestPercentageOfAboveAverageOfStudent(
    studentName,
    subjectName,
    markScored
  );
  return ans;
};

export const getSubjectsMoreStudentsBelowSpecificStudentAverage = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = getSubjectsWithHighestPercentageOfBelowAverageOfStudent(
    studentName,
    subjectName,
    markScored
  );
  return ans;
};

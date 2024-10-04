import classObj from "../data/Data";

const subjects = () => {
  let arr: string[] = [];
  classObj.students[0].marks.forEach((sub) => {
    arr.push(sub.subject);
  });
  return arr;
};

//////////////

const students = () => {
  let arr: string[] = [];
  classObj.students.map((student) => {
    arr.push(student.name);
  });
  return arr;
};

////////////////

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
//////////////

export const function1 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  return classObj.name;
};

///////////

export const function2 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  return classObj.teacherName;
};

/////////////

export const function3 = (
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

////////////

export const function4 = (
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

/////////

export const function5 = (
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

/////////////

export const function6 = (
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

/////////

export const function7 = (
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

////////

export const function8 = (
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

/////////

export const function9 = (
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

////////

export const function10 = (
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

///////////

export const function11 = (
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

//////

export const function12 = (
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

////////

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
    let mark = function8(student.name, subjectName, markScored);
    let name = student.name;
    let item = { mark: mark, name: name };
    arr.push(item);
  });
  arr.sort((a, b) => a.mark - b.mark);
  return arr;
};

/////

export const function13 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let data = markSortStudent(studentName, subjectName, markScored);
  return data[data.length - 1].name;
};

///////

export const function14 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let data = markSortStudent(studentName, subjectName, markScored);
  return data[0].name;
};

///////

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

////////

/////////

export const function15 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = subjectAverage();
  return arr[arr.length - 1].subject;
};

/////////

export const function16 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = subjectAverage();
  return arr[0].subject;
};

////////

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

////////////

export const function17 = (
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

/////////////////

export const function18 = (
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

///////

export const function19 = (
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

///////

export const function20 = (
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

//////////

export const function21 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return arr[arr.length - 1].subject;
};

/////////

export const function22 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return arr[0].subject;
};

///////

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

//////////

export const function23 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = averageMarkStudent();
  return arr[arr.length - 1].name;
};

////////

export const function24 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = averageMarkStudent();
  return arr[0].name;
};

////////

export const function25 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = studentTotalMark();
  return arr[arr.length - 1].name;
};

////

export const function26 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const arr = studentTotalMark();
  return arr[0].name;
};

//////

export const function27 = (
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

////////

export const function28 = (
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

////////

export const function29 = (
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

///////

export const function30 = (
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

////////

export const function31 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = function27(studentName, subjectName, markScored);
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

/////////

export const function32 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = function28(studentName, subjectName, markScored);
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

////////

export const function33 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = function29(studentName, subjectName, markScored);
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

///////////

export const function34 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let num = function30(studentName, subjectName, markScored);
  let totalStudents = students();
  return `${(num * 100) / totalStudents.length}%`;
};

//////////////

export const function35 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = studentTotalMark();
  return `${arr[arr.length - 1].name}: ${
    (arr[arr.length - 1].total * 100) / 250
  }%`;
};

/////////////

export const function36 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = studentTotalMark();
  return `${arr[0].name}: ${(arr[0].total * 100) / 250}%`;
};

////////

export const function37 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return `${arr[arr.length - 1].subject}: ${
    (arr[arr.length - 1].mark * 100) / 200
  }%`;
};

///////////

export const function38 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let arr = getTotalMarksBySubject();
  return `${arr[0].subject}: ${(arr[0].mark * 100) / 200}%`;
};

/////

export const function39 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let name = function11(studentName, subjectName, markScored);
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

///////

export const function40 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let name = function12(studentName, subjectName, markScored);
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

///////////

export const function41 = (
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

////////////////

export const function42 = (
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

///////////

export const function43 = (
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

//////////////////

export const function44 = (
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

////////////

export const function45 = (
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

///////////

export const function46 = (
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

///////////////

export const function47 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let names = "";
  const totalSubjects = subjects();
  let arr: string[] = [];
  let temp = "";
  totalSubjects.forEach((subject) => {
    temp = function11(studentName, subject, markScored);
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

/////////////

export const function48 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let names = "";
  const totalSubjects = subjects();
  let arr: string[] = [];
  let temp = "";
  totalSubjects.forEach((subject) => {
    temp = function12(studentName, subject, markScored);
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

//////////////

export const function49 = (
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

  //////////////

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

/////////////

export const function50 = (
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

///////////

export const function51 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = element + ":" + " ";
    temp += function11(studentName, element, markScored);
    arr.push(temp);
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

//////////

export const function52 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = element + ":" + " ";
    temp += function12(studentName, element, markScored);
    arr.push(temp);
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

///////

export const function53 = (
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

//////

export const function54 = (
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

///////////

export const function55 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = function17(studentName, subjectName, markScored);
  const totalStudents = students();
  let str = "";
  let arr: string[] = [];
  totalStudents.forEach((student) => {
    let temp = function7(student, subjectName, markScored);
    if (temp > classAverage) {
      arr.push(student);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

///////

export const function56 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = function17(studentName, subjectName, markScored);
  const totalStudents = students();
  let str = "";
  let arr: string[] = [];
  totalStudents.forEach((student) => {
    let temp = function7(student, subjectName, markScored);
    if (temp < classAverage) {
      arr.push(student);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

//////

export const function57 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = function17(studentName, subjectName, markScored);
  const totalSubs = subjects();

  let str = "";
  let arr: string[] = [];

  totalSubs.forEach((sub) => {
    let temp = function9(studentName, sub, markScored);
    if (temp > classAverage) {
      arr.push(sub);
    }
  });
  arr.forEach((elem) => {
    str += elem;
  });
  return str;
};

////////////

export const function58 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const classAverage = function17(studentName, subjectName, markScored);
  const totalSubs = subjects();

  let str = "";
  let arr: string[] = [];

  totalSubs.forEach((sub) => {
    let temp = function9(studentName, sub, markScored);
    if (temp < classAverage) {
      arr.push(sub);
    }
  });
  arr.forEach((elem) => {
    str += elem + ",";
  });
  return str;
};

////////

export const function59 = (
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

///////////

export const function60 = (
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

///////////

export const function61 = (
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

////////

export const function62 = (
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

////////

export const function63 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

////////

export const function64 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

////////

export const function65 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

/////////

export const function66 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

/////////

export const function67 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

/////////

export const function68 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

///////////

export const function69 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

//////////

export const function70 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let mainCounter = 0;
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

/////////

export const function71 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const classAverage = function17(studentName, subjectName, markScored);
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

///////

export const function72 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  type obj = {
    subject: string;
    counter: number;
  }[];
  let arr: obj = [];

  const classAverage = function17(studentName, subjectName, markScored);
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

/////////

export const function73 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = function7(studentName, subjectName, markScored);
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

////////

export const function74 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = function7(studentName, subjectName, markScored);
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

////////

export const function75 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = function7(studentName, subjectName, markScored);
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

//////

export const function76 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = function7(studentName, subjectName, markScored);
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

//////

export const function77 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = function7(studentName, subjectName, markScored);
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

//////

export const function78 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const particularAverage = function7(studentName, subjectName, markScored);
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

///////

export const function79 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = function7(studentName, subjectName, markScored);
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = function9(studentName, element, markScored);
    if (temp > particularAverage) {
      arr.push(element);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

///////

export const function80 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = function7(studentName, subjectName, markScored);
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = function9(studentName, element, markScored);
    if (temp < particularAverage) {
      arr.push(element);
    }
  });
  arr.forEach((element) => {
    str += element + ",";
  });
  return str;
};

////////

export const function81 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = function7(studentName, subjectName, markScored);
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

///////

export const function82 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = function7(studentName, subjectName, markScored);
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

/////

export const function83 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = function7(studentName, subjectName, markScored);
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

export const function84 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  const particularAverage = function7(studentName, subjectName, markScored);
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

////////

export const function85 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

//////////

export const function86 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

//////

export const function87 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  let mainCounter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

///////

export const function88 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let counter = 0;
  let mainCounter = 0;
  const classAverage = function17(studentName, subjectName, markScored);
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

/////////////

export const function89 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = function17(studentName, subjectName, markScored);
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

///////////

export const function90 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = function17(studentName, subjectName, markScored);
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

////////

export const function91 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = function17(studentName, subjectName, markScored);
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

////////

export const function92 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let str = "";
  let counter = 0;
  let arr: string[] = [];
  const classAverage = function17(studentName, subjectName, markScored);
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

////////

export const function93 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = function15(studentName, subjectName, markScored);
  return ans;
};

//////

export const function94 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = function16(studentName, subjectName, markScored);
  return ans;
};

//////////

export const function95 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let sum = 0;
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = function73(studentName, element, markScored);
    let charToRemove = "%";
    let newStr = temp.replace(charToRemove, "");
    arr.push(newStr);
  });
  arr.map((element) => {
    sum += Number(element);
  });
  return sum / 4 + "%";
};

////////

export const function96 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  let sum = 0;
  let arr: string[] = [];
  const totalSubjects = subjects();
  totalSubjects.forEach((element) => {
    let temp = function74(studentName, element, markScored);
    let charToRemove = "%";
    let newStr = temp.replace(charToRemove, "");
    arr.push(newStr);
  });
  arr.map((element) => {
    sum += Number(element);
  });
  return sum / 4 + "%";
};

////////

export const function97 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = function95(studentName, subjectName, markScored);
  return ans;
};

//////

export const function98 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = function96(studentName, subjectName, markScored);
  return ans;
};

///////

export const function99 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = function81(studentName, subjectName, markScored);
  return ans;
};

//////

export const function100 = (
  studentName: string,
  subjectName: string,
  markScored: number
) => {
  const ans = function82(studentName, subjectName, markScored);
  return ans;
};

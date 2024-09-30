import { DefaultDeserializer } from "v8";
import classObj from "../Data";
import { memoryUsage } from "process";

export const function1 = () => {
  return classObj.name;
};

///////////

export const function2 = () => {
  return classObj.teacherName;
};

/////////////

export const function3 = () => {
  let name = "";
  classObj.students.map((student) => {
    name += student.name + ",";
  });
  return name;
};

////////////

export const function4 = () => {
  let id = "";
  classObj.students.map((student) => {
    id += student.id + ",";
  });
  return id;
};

/////////

export const function5 = (expName: string) => {
  let subject = "";
  classObj.students.map((student) => {
    if (student.name === expName) {
      student.marks.forEach((obj) => {
        subject += obj.subject + ",";
      });
    }
  });
  return subject;
};

/////////////

export const function6 = (expName: string) => {
  let result = "";
  classObj.students.map((student) => {
    if (student.name === expName) {
      student.marks.forEach((obj) => {
        result += obj.subject + ":" + obj.mark + ",";
      });
    }
  });
  return result;
};

/////////

export const function7 = (expName: string) => {
  let mark = 0;
  let index = 0;
  let result = 0;
  classObj.students.map((student) => {
    if (student.name === expName) {
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

export const function8 = (expName: string) => {
  let mark = 0;
  classObj.students.map((student) => {
    if (student.name === expName) {
      student.marks.forEach((obj) => {
        mark += obj.mark;
      });
    }
  });
  return mark;
};

/////////

export const function9 = (expSubject: string) => {
  let mark = 0;
  let number = 0;
  let result = 0;
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === expSubject) {
        mark += obj.mark;
        number += 1;
      }
    });
  });
  result = mark / number;
  return result;
};

////////

export const function10 = (expSubject: string) => {
  let mark = 0;
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === expSubject) {
        mark += obj.mark;
      }
    });
  });
  return mark;
};

///////////

export const function11 = (expSubject: string) => {
  let prevmark = 0;
  let newmark = 0;
  let name = "";
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === expSubject) {
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

export const function12 = (expSubject: string) => {
  let prevmark = 0;
  let newmark = 0;
  let name = "";
  classObj.students.map((student) => {
    student.marks.map((obj) => {
      if (obj.subject === expSubject) {
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

const marksort = () => {
 type obj = {
    mark: number;
    name: string;
  }[]

 let arr:obj = [];
 classObj.students.map(student => {
  let mark = (function8(student.name))
  let name = student.name;
  let item = {mark: mark,name:name}
  arr.push(item);
 })
arr.sort((a, b) =>  a.mark - b.mark);
return arr;
};

/////

export const function13 = () => {
  let data = marksort();
  return data[data.length-1].name
};

///////

export const function14 = () => {
  let data = marksort();
  return data[0].name
};


///////


console.log(function14());
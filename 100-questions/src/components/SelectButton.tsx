import { selectPropType } from "../type/type";

function SelectButton({
  element,
  setstudent,
  setsubject,
  setmark,
}: selectPropType) {
  return (
    <div className="forSelect">
      {element.argument1 === "student" && (
        <select onChange={(e) => setstudent(e.target.value)}>
          {element.students.map((student) => (
            <option>{student}</option>
          ))}
        </select>
      )}
      {element.argument1 === "subject" && (
        <select onChange={(e) => setsubject(e.target.value)}>
          {element.subjects.map((subject) => (
            <option>{subject}</option>
          ))}
        </select>
      )}
      {element.argument1 === "mark" && (
        <select onChange={(e) => setmark(+e.target.value)}>
          {element.marks.map((mark) => (
            <option>{mark}</option>
          ))}
        </select>
      )}
      {element.argument2 === "student" && (
        <select onChange={(e) => setstudent(e.target.value)}>
          {element.students.map((student) => (
            <option>{student}</option>
          ))}
        </select>
      )}
      {element.argument2 === "subject" && (
        <select onChange={(e) => setsubject(e.target.value)}>
          {element.subjects.map((subject) => (
            <option>{subject}</option>
          ))}
        </select>
      )}
      {element.argument2 === "mark" && (
        <select onChange={(e) => setmark(+e.target.value)}>
          {element.marks.map((mark) => (
            <option>{mark}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SelectButton;

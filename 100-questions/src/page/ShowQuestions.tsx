import React, { useState } from "react";
import img from "../img/leftArrow.png";
import { questionPropType } from "../types/types";
import "../styles/ShowQuestions.css";
import questions from "../data/Questions";
import Answers from "../components/Answers";

function ShowQuestions() {
  const [rotation, setRotation] = useState<number>(0);
  const [isTrue, setisTrue] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  const buttonClicked = (
    event: React.MouseEvent<HTMLImageElement>,
    index: number
  ): void => {
    const newRotation = (rotation + 180) % 360;
    setRotation(newRotation);
    const target = event.currentTarget;
    target.style.transform = `rotate(${newRotation}deg)`;
    const newVisibility = [...visibleAnswers];
    newVisibility[index] = !newVisibility[index];
    setVisibleAnswers(newVisibility);
    if (rotation !== 360) {
      setisTrue((prev) => !prev);
    }
  };

  const [student, setstudent] = useState("Ravi");
  const [subject, setsubject] = useState("English");
  const [mark, setmark] = useState(10);

  return (
    <>
      {questions.map((element: questionPropType[number], index: number) => (
        <div className="eachQuestion" key={index}>
          <div className="questionInner">
            <span className="question">{element.q}</span>
            <img
              onClick={(event) => buttonClicked(event, index)}
              src={img}
              id="leftArrow"
              alt="Arrow"
            />
          </div>
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
          <Answers isTrue={isTrue} visibleAnswers={visibleAnswers} index={index} element={element} student={student} subject={subject} mark={mark}/>
        </div>
      ))}
    </>
  );
}

export default ShowQuestions;





import React from "react";
import { questionPropType } from "../types/types";

type answerTypeProp = {
  isTrue: boolean;
  visibleAnswers: boolean[];
  index: number;
  element: questionPropType[number];
  student: string;
  subject: string;
  mark: number;
};

function Answers({
  isTrue,
  visibleAnswers,
  index,
  element,
  student,
  subject,
  mark,
}: answerTypeProp) {
  return (
    <div
      className="answers"
      style={{ display: visibleAnswers[index] ? "block" : "none" }}
    >
      {isTrue && <span>{element.ans(student, subject, mark)}</span>}
    </div>
  );
}

export default Answers;

import { useState } from "react";
import { cardPropType } from "../type/type";
import Answers from "./Answers";
import Questions from "./Questions";
import SelectButton from "./SelectButton";

function Card({ index, element }: cardPropType) {
  const [student, setstudent] = useState("Ravi");
  const [subject, setsubject] = useState("English");
  const [mark, setmark] = useState(10);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="eachQuestion" key={index}>
      <Questions element={element} setisOpen={setisOpen} />

      <SelectButton
        element={element}
        setstudent={setstudent}
        setsubject={setsubject}
        setmark={setmark}
      />

      <Answers
        isOpen={isOpen}
        index={index}
        element={element}
        student={student}
        subject={subject}
        mark={mark}
      />
    </div>
  );
}

export default Card;

import "./ShowQuestions.css";
import questions from "./Questions";
import img from "../img/leftArrow.png";
import React, { useState } from "react";


function ShowQuestions() {
  const [rotation, setRotation] = useState<number>(0); 
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(Array(questions.length).fill(false)); 
  const buttonClicked = (event: React.MouseEvent<HTMLImageElement>, index: number): void => {
    const newRotation = (rotation + 180) % 360; 
    setRotation(newRotation); 
    const target = event.currentTarget; 
    target.style.transform = `rotate(${newRotation}deg)`; 
    const newVisibility = [...visibleAnswers]; 
    newVisibility[index] = !newVisibility[index];
    setVisibleAnswers(newVisibility); 
  };

  return (
    <>
      {questions.map((element, index) => (
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
          <div key={index} className="answers" style={{ display: visibleAnswers[index] ? 'block' : 'none' }}> 
          <span>{element.ans()}</span>
          </div>
        </div>
      ))}
    </>
  );
}


export default ShowQuestions;

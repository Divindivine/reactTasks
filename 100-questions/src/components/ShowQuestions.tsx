// import "./ShowQuestions.css";
// import questions from "./Questions";
// import img from "../img/leftArrow.png";
// import { MouseEventHandler } from "react";
// import { function1 } from "./Functions";
// let x = 180;

// function ShowQuestions() {
//   const buttonClicked = (event:React.MouseEvent<HTMLImageElement>, ind: number,): void => {
//     x = x + 180;
//     const target = event.target as HTMLElement
//     target.style.rotate = `${x}deg`;
//     let answer = document.getElementsByClassName("answers") && HTMLCollection;
//     console.log(answer)
//   };

//   return (
//     <>
//       {questions.map((question, index) => (
//         <div className="eachQuestion" key={index}>
//           <div className="questionInner">
//             <span className="question">{question}</span>
//             <img onClick={buttonClicked(event,index)} src={img} id="leftArrow" />
//           </div>
//           <div key={index} className="answers">
//             <span></span>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ShowQuestions;

import "./ShowQuestions.css";
import questions from "./Questions";
import img from "../img/leftArrow.png";
import React, { useState } from "react";
import { function1 } from "./Functions";
import { function2 } from "./Functions";
import { function3 } from "./Functions";

const calls = [
  function1,
  function2,
  function3
]


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
      {questions.map((question, index) => (
        <div className="eachQuestion" key={index}>
          <div className="questionInner">
            <span className="question">{question}</span>
            <img 
              onClick={(event) => buttonClicked(event, index)} 
              src={img} 
              id="leftArrow" 
              alt="Arrow" 
            />
          </div>
          <div key={index} className="answers" style={{ display: visibleAnswers[index] ? 'block' : 'none' }}> 
          {/* <span>{calls[index]()}</span> */}
          </div>
        </div>
      ))}
    </>
  );
}


export default ShowQuestions;

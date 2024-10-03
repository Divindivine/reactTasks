import "./ShowQuestions.css";
import questions from "./datas/Questions";
import img from "../img/leftArrow.png";
import React, { useState,useRef } from "react";
import { spawn } from "child_process";
import { setDefaultResultOrder } from "dns";

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
    if(rotation !== 360){
      setisTrue(prev => !prev);
    }
  }
  const inputOneRef = useRef<HTMLInputElement>(null);
  const inputTwoRef = useRef<HTMLInputElement>(null);
  


    // const inputAssign1 =(event:React.ChangeEvent<HTMLInputElement>) => {
    //   let temp1 = event.target.value
    // }
    // const inputAssign2 =(event:React.ChangeEvent<HTMLInputElement>) => {
    //   let temp2 = event.target.value
    // }
    
  

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
          <div className="forSelect">
         {
          element.students !== undefined && <select>
            {
              element.students.map(student =>(
                <option>{student}</option>
              ))
            }
          </select>
         }
          {
          element.subjects !== undefined && <select>
            {
              element.subjects.map(subject =>(
                <option>{subject}</option>
              ))
            }
          </select>
         }
          {
          element.marks !== undefined && <select>
            {
              element.marks.map(mark =>(
                <option>{mark}</option>
              ))
            }
          </select>
         }
           
              
          </div>
          <div
            key={index}
            className="answers"
            style={{ display: visibleAnswers[index] ? "block" : "none" }}
          >
            {
              isTrue && <span>
                
                  {
                    element.arg0 !==undefined && element.arg0()
                  }
                
                
              </span>
            }
             
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowQuestions;
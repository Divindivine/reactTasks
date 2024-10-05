import React from "react";
import img from "../img/leftArrow.png";
import { questionsPropType } from "../type/type";

function Questions({ element, setisOpen }: questionsPropType) {
  const buttonClicked = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.currentTarget as HTMLElement;
    if (target.style.rotate === "0deg") {
      target.style.rotate = "180deg";
      setisOpen(false);
    } else {
      target.style.rotate = "0deg";
      setisOpen(true);
    }
  };
  return (
    <div className="questionInner">
      <span className="question">{element.q}</span>
      <img
        onClick={(event) => buttonClicked(event)}
        src={img}
        id="leftArrow"
        alt="Arrow"
      />
    </div>
  );
}

export default Questions;

import Card from "../components/Card";
import questions from "../data/Object";
import "../styles/ShowQuestions.css";
import { objectElementPropType } from "../type/type";

function ShowQuestions() {
  return (
    <>
      {questions.map((element: objectElementPropType, index) => (
        <Card index={index} element={element} />
      ))}
    </>
  );
}

export default ShowQuestions;

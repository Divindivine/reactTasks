import { answerTypeProp } from "../type/type";

function Answers({
  isOpen,
  index,
  element,
  student,
  subject,
  mark,
}: answerTypeProp) {
  return (
    <div
      key={index}
      className="answers"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <span>{element.ans(student, subject, mark)}</span>
    </div>
  );
}

export default Answers;

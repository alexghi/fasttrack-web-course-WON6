import React, { useState } from "react";

const Questions = [
  {
    id: 1,
    question: "What is JSX?",
    answer:
      " It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },
  {
    id: 2,
    question: "Can web browsers read JSX directly?",
    answer:
      "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object ",
  },
  {
    id: 3,
    question: "What is the virtual DOM",
    answer:
      " DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.",
  },
  {
    id: 4,
    question: "What is an event in React",
    answer:
      "An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.",
  },
];

function QuestionComponent({ question }) {
  const [state, setState] = useState(false);
  const expandOrCollapse = () => {
    setState(!state);
  };
  return (
    <div key={question.id}>
      <h2 className="Title">
        {question.question} <button onClick={expandOrCollapse}>+</button>
      </h2>
      <p style={{ display: state ? "block" : "none" }}>{question.answer}</p>
    </div>
  );
}

const App4 = () => {
  return (
    <div className="Accordion">
      <h2>React Interview Questions</h2>
      <br></br>
      {Questions.map((mapQuestion) => (
        <QuestionComponent question={mapQuestion} />
      ))}
    </div>
  );
};

export default App4;

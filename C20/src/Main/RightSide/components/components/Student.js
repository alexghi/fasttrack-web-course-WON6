import React from "react";
import Avatar from "../../../../components/Avatar";

const Student = ({ student }) => {
  return (
    <div
      onClick={() => {
        console.log("you clicked on a student");
      }}
      style={{
        boxShadow: "2px 1px 1px #dedede",
        padding: "10px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      <Avatar name={student.name} color={'#ddd'}/>
    </div>
  );
};

export default Student;

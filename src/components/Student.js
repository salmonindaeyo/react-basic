import React, { useState, useEffect } from "react";
import { BrowserRouter, Routers, Route } from "react-router-dom";
function Student() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("nut");
  const [count, setCount] = useState(1);
  const [student, setStudent] = useState([
    { name: "nut", number: 1 },
    { name: "winner", number: 2 },
  ]);

  useEffect(() => {
    console.log("use effect");
  }, [student]);
  const myStyle = { color: student.length > 2 ? "blue" : "green" };
  function testClick() {
    setName("55555");
    setCount(count + 1);
  }

  function addStudent(name) {
    setStudent([...student, { name: name, number: student.length + 1 }]);
  }
  function removeStudent(xxx) {
    setStudent(student.filter((s) => s.number !== xxx));
  }

  return (
    <div>
      <h1 style={{ color: "red" }}>
        hello {name} {count}
      </h1>
      <div style={myStyle} onClick={() => addStudent(name)}>
        add student
      </div>
      <div onClick={testClick}>click</div>
      <div onClick={() => setShow(!show)}>show</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        {show &&
          student.map((item) => (
            <div key={item.number}>
              {item.name}{" "}
              <div onClick={() => removeStudent(item.number)}> ลบ </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Student;

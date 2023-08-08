import React, { useState } from "react";
import Header from "./components/Header.js";
function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("nut");
  const [count, setCount] = useState(1);
  const [student, setStudent] = useState([
    { name: "nut", number: 1 },
    { name: "winner", number: 2 },
  ]);
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

  function logMes(mess) {
    console.log(mess);
  }
  return (
    <div>
      <Header title="eieieiei" lastname="lastname" logMes={logMes} />
      <h1 style={{ color: "red" }}>
        hello {name} {count}
      </h1>
      <div style={myStyle} onClick={() => addStudent("mint")}>
        add student
      </div>
      <div onClick={testClick}>click</div>
      <div onClick={() => setShow(!show)}>show</div>

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

export default App;

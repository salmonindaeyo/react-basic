import React, { useState } from "react";

function App() {
  const [name, setName] = useState("nut");
  const [count, setCount] = useState(1);

  function testClick() {
    setName("55555");
    setCount(count + 1);
  }

  return (
    <div>
      <h1>
        hello {name} {count}
      </h1>
      <div onClick={testClick}>click</div>
    </div>
  );
}

export default App;

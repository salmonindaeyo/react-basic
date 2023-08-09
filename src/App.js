import Header from "./components/Header.js";
import Student from "./components/Student.js";
import NavBar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  function logMes(mess) {
    console.log(mess);
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Header title="eieieiei" lastname="lastname" logMes={logMes} />
          }
        ></Route>
        <Route path="/student" element={<Student />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

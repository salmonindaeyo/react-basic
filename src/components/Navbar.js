import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      NavBar
      <Link to="/">home</Link>
      <Link to="/student">student</Link>
    </nav>
  );
}

export default Navbar;

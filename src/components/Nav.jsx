import { Link } from "react-router";

function Nav() {
  return (
    <nav>
      <h1>My Blog Site</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

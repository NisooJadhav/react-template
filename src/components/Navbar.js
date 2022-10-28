import { Link } from "react-router-dom";

export default function Navbar() {
  return <header>
    <div className="logo">
      <Link to="/">Awesome</Link>
    </div>
    <ul>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </header>;
}

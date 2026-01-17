import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/rp-logo.a76b4d6a8e6239425057.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Republic Polytechnic Home">
        <img src={logo} alt="RP logo" />
      </Link>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/diplomas" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Diplomas
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          FAQ
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
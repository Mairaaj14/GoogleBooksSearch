// import react and  router-dom
import React from "react";
import { Link } from "react-router-dom";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }

function Navbar() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/saved"
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
          >
            Saved Books
          </Link>
        </li>
      </ul>
    );
  }

export default Navbar;
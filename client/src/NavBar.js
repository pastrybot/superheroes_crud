import React from 'react';
import { Link } from 'react-router';
const NavBar = (props) =>
    <div>
      <nav>
        <ul className="nav-flex">
          <Link activeClassName="active-link" to="/">Home</Link>
          <Link activeClassName="active-link" to="/heroes">Heroes</Link>
          <Link activeClassName="active-link" to="/heroes/post">Create Hero</Link>
        </ul>
      </nav>
    </div>

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>My Blog</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
    </nav>
  );
};

export default Navbar;

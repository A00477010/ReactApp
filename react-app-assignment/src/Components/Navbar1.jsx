import React from "react";
import "./css.css";

// import {Link} from 'react-router-dom';
import { Link } from "react-router-dom";
export const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div>Hello this is navbar</div>
      <Link to={"/about-me"} className="navLink">About me Link</Link>
      <Link to={"/My-town"}>My Town</Link>
    </nav>
  );
};

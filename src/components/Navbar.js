import React from "react";
import { Link } from "react-router-dom";

const myDiv = {
   display: "flex",
   justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "aqua",
    marginBottom:"40px"
};

const Navbar = () => {
  return (
    <div style={myDiv}>
          
      <Link style={{textDecoration : "none"}} to="/product"><h2>FoodList</h2></Link>
      <Link style={{textDecoration : "none"}} to="/favorite"><h2>Favorites</h2></Link>
    </div>
  );
};

export default Navbar;
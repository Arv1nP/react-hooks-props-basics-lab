import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import User from "../data/user"

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home {...User}/>
      <About {...User}/>
    </div>
  );
}

export default App;

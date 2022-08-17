import React from "react";
import Login from "./Login";
import Registered from "./register";

var userRegistered = true;

// function renderConditionally() {
//   loddedIn ? : 
//     return  
//   } else {
//     return  
//   }
// }


const currentTime = new Date().getHours();


function App() {
  return (
    <div className="container"> {
      userRegistered === true ? <Registered /> : <Login /> }
      
    </div>
  );
}

export default App;
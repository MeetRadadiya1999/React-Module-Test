// GroupPage.js
import React from "react";
import Notes from "./Notes";
import WelcomePage from "./WelcomePage";
import { useSelector } from "react-redux";

import "./main.css";


function Main() {
  const selectedGroup = useSelector((state) => state.selectedGroup);

  return (
    <div className="main">

      {!selectedGroup ? <WelcomePage/> :  <Notes/>}
      
    </div>
  );
}

export default Main;

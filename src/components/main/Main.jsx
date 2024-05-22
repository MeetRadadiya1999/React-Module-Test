// GroupPage.js
import React, { useEffect } from "react";
import Notes from "./Notes";
import WelcomePage from "./WelcomePage";
import { useSelector } from "react-redux";

import "./main.css";

function Main() {
  const selectedGroup = useSelector((state) => state.selectedGroup);
  const isBackButtonClicked = useSelector((state) => state.isBackButtonClicked);

  useEffect(() => {
    const main = document.querySelector(".main");
    if (selectedGroup && !isBackButtonClicked) {
      main.style.display= 'block';
    } else if( isBackButtonClicked ) {
      main.style.display= 'none';
    }

  }, [selectedGroup, isBackButtonClicked]);

  return (
    <div className="main">{!selectedGroup ? <WelcomePage /> : <Notes />}</div>
  );
}

export default Main;

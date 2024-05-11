// GroupPage.js
import React from "react";
import "./welcomepage.css";
import '@fortawesome/fontawesome-free/css/all.css';



function WelcomePage() {


  return (
    <div className="main-div">
        <img src='https://i.imgur.com/iayUAt5.png' alt="work" />
        <h3>Pocket Notes</h3>
        <p className="paragraph">Send and receive messages without keeping your phone online. <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

        <div className="encrypt-div">
        <i className="fa-solid fa-lock"></i>
        <p>end-to-end encrypted</p>
        </div>
    </div>
  );
}

export default WelcomePage;

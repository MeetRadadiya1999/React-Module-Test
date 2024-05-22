// GroupPage.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGroup, resetBackToHome } from "../../actions/index";
import AddGroup from "./AddGroup";
import "./groups.css";

function Groups() {
  const groupsFromRedux = useSelector((state) => state.groups);
  const isBackButtonClicked = useSelector((state) => state.isBackButtonClicked);

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleGroupClick = (groupId) => {
    const selectedGroup = groupsFromRedux.find((group) => group.id === groupId);
    dispatch(selectGroup(selectedGroup));

    if (window.innerWidth < 599) {
      const groups = document.querySelector(".groups");
      groups.classList.add("hide");
    }
  };
  
  useEffect(() => {
    if (isBackButtonClicked) {
      const groups = document.querySelector(".groups");
      groups.classList.remove("hide");

      // Reset the back button clicked state after handling it
      dispatch(resetBackToHome())
    }

  }, [isBackButtonClicked, dispatch]);

  const getInitials = (name) => {
    const words = name.split(" ");
    return words.length > 1
      ? (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
      : words[0].charAt(0).toUpperCase();
  };

  const handleAddGroup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowPopup(false);
    }
  };

  return (
    <div className="groups">
      <h1>Pocket Notes</h1>

      <ul className="ul-list">
        {groupsFromRedux.map((group) => (
          <div
            className="list-wrapper"
            key={group.id}
            onClick={() => handleGroupClick(group.id)}
          >
            <div className="color-div" style={{ backgroundColor: group.color }}>
              {" "}
              {getInitials(group.name)}{" "}
            </div>
            <li key={group.id}>{group.name}</li>
          </div>
        ))}
      </ul>

      <button className="add-btn" onClick={handleAddGroup}>
        +
      </button>

      {showPopup && (
        <div className="backdrop" onClick={handleBackdropClick}>
          <AddGroup onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}

export default Groups;

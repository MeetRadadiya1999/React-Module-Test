// components/AddGroupPopup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGroup, selectGroup } from "../../actions/index";
import './addgroup.css';

const AddGroup = ({ onClose }) => {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");

  const handleCreateGroup = () => {
    if(groupName && groupColor){
        const newGroup = { id: Date.now(), name: groupName, color: groupColor };
        dispatch(addGroup(newGroup));
        dispatch(selectGroup(newGroup));

    } else {
        return alert("Enter valid Name & colour!");
    }
    onClose();
  };

  

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Create New group</h2>
        <span className="group-name">Group Name </span>
        <input
          type="text"
          id="group name"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        /> 
        <div className="color-heading">Choose Colour
         <span className={`color ${groupColor === "#B38BFA" ? "selected" : ""}`} style={{backgroundColor:"#B38BFA"}} onClick={() => setGroupColor("#B38BFA")}> </span>
         <span className={`color ${groupColor === "#FF79F2" ? "selected" : ""}`} style={{backgroundColor:"#FF79F2"}} onClick={() => setGroupColor("#FF79F2")}> </span>
         <span className={`color ${groupColor === "#43E6FC" ? "selected" : ""}`} style={{backgroundColor:"#43E6FC"}} onClick={() => setGroupColor("#43E6FC")}> </span>
         <span className={`color ${groupColor === "#F19576" ? "selected" : ""}`} style={{backgroundColor:"#F19576"}} onClick={() => setGroupColor("#F19576")}> </span>
         <span className={`color ${groupColor === "#0047FF" ? "selected" : ""}`} style={{backgroundColor:"#0047FF"}} onClick={() => setGroupColor("#0047FF")}> </span>
         <span className={`color ${groupColor === "#6691FF" ? "selected" : ""}`} style={{backgroundColor:"#6691FF"}} onClick={() => setGroupColor("#6691FF")}> </span>
        </div>
        <button onClick={handleCreateGroup}>Create</button>
      </div>
    </div>
  );
};

export default AddGroup;

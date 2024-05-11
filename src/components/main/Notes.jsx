// GroupPage.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./notes.css";

function Notes() {
  const selectedGroup = useSelector((state) => state.selectedGroup);

  const [message, setMessage] = useState(""); // State to manage message input value
  const [messages, setMessages] = useState([]); // State to manage sent messages
  const [hasText, setHasText] = useState(false); // State to track if textarea has text


  
  const icon = document.getElementById('icon');
  if (message.trim().length > 0) {
    icon.classList.add("active");
  }

  // Function to handle sending messages
  const sendMessage = () => {
    if (message.trim() === "") return;     
    const newMessage = {
      id: messages.length + 1,
      text: message.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setMessage(""); // Clear message input after sending

    // Save messages to local storage
    localStorage.setItem(
      `group_${selectedGroup.id}_messages`,
      JSON.stringify([...messages, newMessage])
    );
  };

  // Function to retrieve messages from local storage
  const getMessagesFromLocalStorage = () => {
    const storedMessages = localStorage.getItem(
      `group_${selectedGroup.id}_messages`
    );
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages([]); // Clear messages if no stored messages found
    }
  };

  // Fetch messages from local storage when component mounts
  useEffect(() => {
    getMessagesFromLocalStorage();
  }, [selectedGroup]);

    // Update hasText state when textarea value changes
    useEffect(() => {
      setHasText(message.trim().length > 0);
    }, [message]);
  

  const getInitials = (name) => {
    const words = name.split(" ");
    return words.length > 1
      ? (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
      : words[0].charAt(0).toUpperCase();
  };

  // Intl.DateTimeFormat API for format time and date.
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return dateTimeFormat.format(date);
  };
  

  return (
    <div className="notes">
      <div className="navbar">
        {selectedGroup && (
          <div className="navbar-heading">
            <div
              className="color-div"
              style={{ backgroundColor: selectedGroup.color }}
            >
              {getInitials(selectedGroup.name)}
            </div>
            <h1>{selectedGroup.name}</h1>
          </div>
        )}
      </div>

      <div className="chats">
      {messages.map((msg) => (
          <div key={msg.id} className="msg-container">
            <p>{msg.text}</p>
            <small className="date-time">{formatDateTime(msg.timestamp)}</small>
          </div>
        ))}
      </div>

      <div className="footer">
        <textarea
          name="notes"
          id="note"
          placeholder="Here’s the sample text for sample work"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <i className={`fa-solid fa-paper-plane fa-2xl  ${hasText ? 'active' : 'inactive'}`} id="icon" onClick={sendMessage}></i> 
      </div>
    </div>
  );
}

export default Notes;

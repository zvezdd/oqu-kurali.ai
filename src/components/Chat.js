import React, { useState } from "react";
import { askGemini } from "../geminiApi"; 
import "../Chat.css"; 

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (message.trim()) {
      const reply = await askGemini(message);
      setResponse(reply);
    }
  };

  return (
    <div className="chat-container">
      <h2>Oqu Qurali</h2>
      <textarea
        className="chat-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Сұрақ қойыңыз..."
      />
      <button className="chat-button" onClick={handleSend}>Жіберу</button>
      {response && <p className="chat-response">{response}</p>}
    </div>
  );
};

export default Chat;

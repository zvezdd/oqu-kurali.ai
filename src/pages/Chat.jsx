import React, { useState } from "react";
import { askGemini } from "../geminiApi"; 

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResponse(""); 

    try {
      const reply = await askGemini(message);
      setResponse(reply);
      setMessage('');
    } catch (error) {
      setResponse("Қате орын алды, кейінірек қайталап көріңіз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
       <h1>
            Талқылауды <span className="text-gradient">бастаңыз</span>
          </h1>
      <div className="search">
        <input
          className=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Сұрақ қойыңыз..."
        />
      </div>
      <button className="button" onClick={handleSend} disabled={loading}>
        {loading ? "Жіберілуде..." : "Жіберу"}
      </button>

      {loading && (
        <div class="loader" role="status">
      </div>
      )}

      {response && !loading && <p className="chat-response">{response}</p>}
    </div>
  );
};

export default Chat;

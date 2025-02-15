import React, { useState } from "react";
import "./TravelAssistantChatbot.css";

const TravelAssistantChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your Travel Assistant. How can I help you today?" }
  ]);
  const [userInput, setUserInput] = useState("");

  // Simple keyword-based response logic
  const getBotResponse = (userText) => {
    const lowerText = userText.toLowerCase();
    if (lowerText.includes("budget")) {
      return "For budget-friendly travel, I recommend exploring destinations in Southeast Asia or Eastern Europe.";
    }
    if (lowerText.includes("luxury")) {
      return "For a luxurious experience, consider destinations like Dubai, Monaco, or the French Riviera.";
    }
    if (lowerText.includes("adventure")) {
      return "Adventure awaits in places like New Zealand, Patagonia, or the Rocky Mountains.";
    }
    if (lowerText.includes("relax")) {
      return "Looking to relax? A beach getaway in Bali or the Maldives might be perfect.";
    }
    return "That's interesting! Can you tell me a bit more about what you're looking for?";
  };

  // Handle sending user message
  const handleSend = () => {
    if (!userInput.trim()) return;
    const newUserMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getBotResponse(newUserMessage.text)
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  // Allow sending on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-header">Travel Assistant Chatbot</h2>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "bot" ? "bot-message" : "user-message"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="chat-input"
        />
        <button onClick={handleSend} className="chat-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default TravelAssistantChatbot;

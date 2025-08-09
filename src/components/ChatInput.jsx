import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    setChatMessages((prev) => [
      ...prev,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);

    // Show buffering spinner before sending robot message
    const spinnerId = crypto.randomUUID();
    setChatMessages((prev) => [
      ...prev,
      {
        message: "Robot is typing...",
        sender: "robot",
        id: spinnerId,
      },
    ]);

    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);
      setChatMessages((prev) =>
        prev.map((msg) =>
          msg.id === spinnerId
            ? {
                message: response,
                sender: "robot",
                id: spinnerId,
              }
            : msg
        )
      );
    }, 1500);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={(e) => {
          e.key === "Enter" && sendMessage();
        }}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

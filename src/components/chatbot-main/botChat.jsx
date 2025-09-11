import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const BotChat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // fast + free tier

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    try {
      const result = await model.generateContent(input);
      const aiReply = result.response.text();

      setMessages([...newMessages, { role: "ai", text: aiReply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { role: "ai", text: "⚠️ Error reaching Gemini API." },
      ]);
    }

    setInput(""); // clear input
  };

  return (
      <div className="hide-scrollbar p-4 max-w-lg mx-auto bg-gray-900 text-gray-100 border border-gray-700 rounded-lg shadow-lg">

      <div className="h-64 overflow-y-auto border border-gray-700 bg-gray-800 p-2 mb-4 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.role === "user" ? "text-blue-400" : "text-green-400"
            }`}
          >
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-700 bg-gray-800 text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow-md"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default BotChat

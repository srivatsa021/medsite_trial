import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am here to assist you with healthcare-related queries. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
    setUserInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "This is a sample reply from your future OLLaMA-powered bot!",
          sender: "bot",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
      <main className="flex-grow flex justify-center px-4 py-6">
        <div className="w-full max-w-3xl flex flex-col bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <header className="p-6 border-b border-gray-700 text-center bg-gray-800">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-400">
              Healthcare Chatbot
            </h1>
          </header>

          <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] md:max-w-[70%] p-3 md:p-4 rounded-xl shadow ${
                    message.sender === "user"
                      ? "bg-blue-400 text-gray-900"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 bg-gray-700 text-gray-100 rounded-xl shadow animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <footer className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 bg-gray-700 text-gray-100 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Type your question..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !userInput.trim()}
                className="px-6 py-2 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;

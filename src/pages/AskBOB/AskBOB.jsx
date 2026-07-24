import { useState } from "react";
import "./AskBOB.css";

import { FiSend, FiMessageSquare } from "react-icons/fi";
import Navbar from "../../components/Common/Navbar/Navbar";

const AskBOB = () => {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi! I'm Ask BOB. How can I help you today?",
        },
    ]);

    const quickPrompts = [
        "Open a Savings Account",
        "Check Loan Eligibility",
        "Block My Card",
        "Find Nearest Branch",
    ];

    const handleSend = (text) => {
        const messageText = text || input;

        if (!messageText.trim()) return;

        setMessages((prev) => [
            ...prev,

            { sender: "user", text: messageText },

            {
                sender: "bot",
                text: "Thanks for your message. Our team will guide you through this shortly.",
            },
        ]);

        setInput("");
    };

    return (
        <>
            <Navbar />
            <div className="askbob-page">
                <div className="askbob-card">
                    <div className="askbob-header">
                        <div className="askbob-avatar">
                            <FiMessageSquare />
                        </div>

                        <div>
                            <h2>Ask BOB</h2>
                            <span>AI Assistant</span>
                        </div>
                    </div>

                    <div className="askbob-messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender}`}
                            >
                                <p>{message.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="quick-prompts">
                        {quickPrompts.map((prompt, index) => (
                            <button
                                key={index}
                                className="prompt-btn"
                                onClick={() => handleSend(prompt)}
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>

                    <div className="askbob-input">
                        <input
                            type="text"
                            placeholder="Type your query..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />

                        <button onClick={() => handleSend()}>
                            <FiSend />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AskBOB;

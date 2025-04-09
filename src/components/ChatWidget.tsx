
import React, { useState, useRef, useEffect } from 'react';

// Configuration
const ChatWidgetConfig = {
  webhook: {
    url: 'https://liammokeefe.app.n8n.cloud/webhook/e56fd386-26fe-48f9-8868-a008c7551872/chat',
    route: 'general'
  }
};

interface Message {
  type: 'user' | 'bot';
  content: string;
  isHtml?: boolean;
}

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "Hi 👋, I'm Liam's personal finance assistant. Let me know how I can assist you!", isHtml: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to generate or retrieve a unique chat ID
  const getChatId = () => {
    let chatId = localStorage.getItem('chatId');
    if (!chatId) {
      chatId = 'chat_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('chatId', chatId);
    }
    return chatId;
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Clear input field
    setInputMessage('');

    try {
      const chatId = getChatId();
      
      // Send request to webhook
      const response = await fetch(ChatWidgetConfig.webhook.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatId: chatId,
          message: inputMessage,
          route: ChatWidgetConfig.webhook.route
        })
      });

      const data = await response.json();
      
      // Remove typing indicator and add bot response
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: data.output || "Sorry, I couldn't understand that.", 
        isHtml: true 
      }]);
      
    } catch (error) {
      // Handle error
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: "Sorry, there was an error processing your request.", 
        isHtml: false 
      }]);
      console.error('Error:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gray-900 text-white px-4 py-3 font-semibold">
        <span>Chat</span>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex w-full mb-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`px-3 py-2 rounded-lg max-w-[85%] ${
                message.type === 'user' 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-teal-400 text-white'
              }`}
            >
              {message.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: message.content }} />
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex w-full mb-3 justify-start">
            <div className="px-3 py-2 rounded-lg bg-teal-400 text-white">
              <p>Typing...</p>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t border-gray-200 flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button 
          onClick={handleSendMessage}
          className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;

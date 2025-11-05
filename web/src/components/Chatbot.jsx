import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Clock, Phone, MapPin } from 'lucide-react';

export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm here to help you with our business information. You can ask me about our hours, contact number, or location!",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Business Information - Customize these!
    const businessInfo = {
        name: "Your Business Name",
        hours: {
            weekday: "Monday - Friday: 9:00 AM - 6:00 PM",
            saturday: "Saturday: 10:00 AM - 4:00 PM",
            sunday: "Sunday: Closed"
        },
        phone: "+1 (555) 123-4567",
        email: "contact@yourbusiness.com",
        address: "123 Business Street, City, State 12345"
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const detectIntent = (message) => {
        const lowerMessage = message.toLowerCase();

        // Business hours keywords
        const hoursKeywords = ['hours', 'open', 'close', 'timing', 'schedule', 'when', 'time'];
        const hasHoursIntent = hoursKeywords.some(keyword => lowerMessage.includes(keyword));

        // Contact keywords
        const contactKeywords = ['contact', 'phone', 'call', 'number', 'reach', 'telephone'];
        const hasContactIntent = contactKeywords.some(keyword => lowerMessage.includes(keyword));

        // Location keywords
        const locationKeywords = ['location', 'address', 'where', 'find', 'visit'];
        const hasLocationIntent = locationKeywords.some(keyword => lowerMessage.includes(keyword));

        return { hasHoursIntent, hasContactIntent, hasLocationIntent };
    };

    const generateBotResponse = (userMessage) => {
        const { hasHoursIntent, hasContactIntent, hasLocationIntent } = detectIntent(userMessage);

        if (hasHoursIntent && hasContactIntent) {
            return `📞 Contact & Hours Information:\n\nPhone: ${businessInfo.phone}\n\n⏰ Business Hours:\n${businessInfo.hours.weekday}\n${businessInfo.hours.saturday}\n${businessInfo.hours.sunday}`;
        }

        if (hasHoursIntent) {
            return `⏰ Our Business Hours:\n\n${businessInfo.hours.weekday}\n${businessInfo.hours.saturday}\n${businessInfo.hours.sunday}\n\nWe look forward to serving you!`;
        }

        if (hasContactIntent) {
            return `📞 Contact Information:\n\nPhone: ${businessInfo.phone}\nEmail: ${businessInfo.email}\n\nFeel free to reach out anytime during business hours!`;
        }

        if (hasLocationIntent) {
            return `📍 Our Location:\n\n${businessInfo.address}\n\nWe'd love to see you! Would you like to know our business hours?`;
        }

        // Default response with suggestions
        return "I can help you with:\n\n• Business hours\n• Contact number\n• Location information\n\nWhat would you like to know?";
    };

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const savedInput = inputValue;
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const botMessage = {
                id: messages.length + 2,
                text: generateBotResponse(savedInput),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleQuickAction = (action) => {
        let message = '';
        switch(action) {
            case 'hours':
                message = 'What are your business hours?';
                break;
            case 'contact':
                message = 'What is your contact number?';
                break;
            case 'location':
                message = 'Where are you located?';
                break;
        }

        setInputValue(message);
        setTimeout(() => handleSend(), 100);
    };

    return (
        <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Header */}
            <div className="bg-white shadow-md px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">Business Assistant</h1>
                        <p className="text-sm text-gray-500">Ask about hours & contact info</p>
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${
                            message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                message.sender === 'user'
                                    ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                                    : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                            }`}
                        >
                            {message.sender === 'user' ? (
                                <User className="w-5 h-5 text-white" />
                            ) : (
                                <Bot className="w-5 h-5 text-white" />
                            )}
                        </div>
                        <div
                            className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-2xl ${
                                message.sender === 'user'
                                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-tr-none'
                                    : 'bg-white text-gray-800 shadow-md rounded-tl-none'
                            }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                            <p
                                className={`text-xs mt-1 ${
                                    message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                                }`}
                            >
                                {message.timestamp.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-md">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
                <div className="px-6 py-3 bg-white border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => handleQuickAction('hours')}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                        >
                            <Clock className="w-4 h-4" />
                            Business Hours
                        </button>
                        <button
                            onClick={() => handleQuickAction('contact')}
                            className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm hover:bg-green-100 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            Contact Number
                        </button>
                        <button
                            onClick={() => handleQuickAction('location')}
                            className="flex items-center gap-2 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm hover:bg-purple-100 transition-colors"
                        >
                            <MapPin className="w-4 h-4" />
                            Location
                        </button>
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="bg-white border-t border-gray-200 px-6 py-4">
                <div className="flex gap-3 items-end">
          <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about hours, contact, or location..."
              rows="1"
              className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
          />
                    <button
                        onClick={handleSend}
                        disabled={inputValue.trim() === ''}
                        className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
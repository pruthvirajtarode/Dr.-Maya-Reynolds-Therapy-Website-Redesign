"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { therapist } from "@/data/therapist";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: `Hi there! I'm ${therapist.name.split(',')[0]}'s virtual assistant. How can I help you today?`, isBot: true }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    const userMsg = message;
    setMessage("");

    // Mock bot response
    setTimeout(() => {
      let botResponse = "Thank you for reaching out. Please use the contact form on our website to schedule a consultation.";
      
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes("cost") || lowerMsg.includes("insurance") || lowerMsg.includes("price") || lowerMsg.includes("fee")) {
        botResponse = "For information regarding fees and insurance, please use the contact form to reach the office directly.";
      } else if (lowerMsg.includes("location") || lowerMsg.includes("where") || lowerMsg.includes("address")) {
        botResponse = `Our office is located at ${therapist.office.location}. We also offer telehealth in California.`;
      } else if (lowerMsg.includes("book") || lowerMsg.includes("appointment") || lowerMsg.includes("schedule")) {
        botResponse = "You can schedule a consultation by clicking the 'Book a Consultation' button at the top of the page or using the contact form below.";
      } else if (lowerMsg.includes("specialty") || lowerMsg.includes("help") || lowerMsg.includes("treat")) {
        botResponse = `I specialize in treating ${therapist.specialties.join(", ")}.`;
      }
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-lg shadow-2xl border border-[var(--color-brand-secondary)]/30 overflow-hidden flex flex-col"
            style={{ height: '450px', maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-[var(--color-brand-primary)] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-serif text-lg">
                  {therapist.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{therapist.name.split(',')[0]}'s Assistant</h4>
                  <p className="text-xs text-white/70">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close chat">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-[var(--color-brand-background)]/50 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.isBot 
                        ? "bg-white text-[var(--color-brand-dark)] rounded-tl-sm border border-[var(--color-brand-secondary)]/20 shadow-sm" 
                        : "bg-[var(--color-brand-primary)] text-white rounded-tr-sm shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-[var(--color-brand-secondary)]/20 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 py-2.5 px-4 bg-[var(--color-brand-background)] text-[var(--color-brand-dark)] text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              />
              <button 
                type="submit"
                disabled={!message.trim()}
                className="p-2.5 bg-[var(--color-brand-primary)] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-brand-dark)] transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[var(--color-brand-primary)] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[var(--color-brand-dark)] transition-colors duration-300 relative"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[var(--color-brand-accent)] border-2 border-white rounded-full"></span>
        )}
      </motion.button>
    </div>
  );
}

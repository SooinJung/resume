import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { ResumeData } from '../types';
import { chatWithPortfolio } from '../services/geminiService';

interface ChatWidgetProps {
  resumeContext: ResumeData;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ resumeContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hi! I'm Sooin's AI assistant. Ask me anything about her projects or skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    // Format history for Gemini API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithPortfolio(userMsg, resumeContext, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white/80 backdrop-blur-2xl w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl shadow-blue-900/20 border border-white/50 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 ring-1 ring-black/5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-200" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ask AI about Sooin</h3>
                <p className="text-[10px] text-blue-100 opacity-80">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm' 
                    : 'bg-white/80 backdrop-blur-sm border border-white/60 text-slate-800 rounded-bl-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white/60 backdrop-blur-md border-t border-white/50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about experience, skills..." 
              className="flex-1 bg-white/70 border border-white/60 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-400"
            />
            <button 
              type="submit" 
              disabled={isTyping || !input.trim()}
              className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 disabled:bg-slate-400/50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/30"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white w-14 h-14 rounded-full shadow-2xl shadow-slate-900/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative z-50 hover:rotate-12"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute right-0 top-0 w-3.5 h-3.5 bg-red-500 rounded-full border-[3px] border-[#F5F5F5]"></span>
        )}
      </button>
    </div>
  );
};
 import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import avatar from '../assets/ahmed.png'; 

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! What do you want to know about?' },
  ]);

  const endRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBubbleClick = (option) => {
    const newMessages = [...messages, { sender: 'user', text: option }];

    let reply = "I'm not sure I understand. Try 'My final year project', 'Education' or 'About Me'.";
    const lower = option.toLowerCase();
    if (lower.includes('education')) {
      reply = 'I am currently completing a State Engineering degree in Computer Engineering at EMSI Rabat (2020–2025), where I have developed strong skills in software development, systems architecture, and emerging technologies. Prior to that, I pursued studies at the Faculty of Medicine and Pharmacy of Casablanca (FMPC) from 2016 to 2020. In 2016, I earned my Baccalaureate in Science with a Physical Sciences option, graduating with honors (“Very Good” distinction) from Assahoua School in Benslimane.';
    } else if (lower.includes('projects')) {
      reply = 'I have built several full-stack apps using React, Node.js, and MongoDB. Check out my portfolio section!';
    } else if (lower.includes('about')) {
      reply = "Currently, I'm a graduate engineer in computer and network engineering with a specialization in MIAGE. I specialize in full-stack Java development with a solid foundation in front-end technologies such as React.js and Angular. Through my academic and personal projects, I've acquired skills in building complete web applications, from the front-end to the scalable back-end using Spring Boot. At the same time, I'm interested in DevOps practices, particularly in automating the application lifecycle. I have a good command of Git and GitHub, as well as unit testing with JUnit and Mockito. My basic knowledge also extends to tools such as Docker and Kubernetes, Gitlab, and Jenkins, which I continue to explore and apply in real-world environments.";
    }

    newMessages.push({ sender: 'bot', text: reply });
    setMessages(newMessages);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const quickOptions = ['My final year project', 'Education', 'About Me'];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-80 rounded-xl shadow-lg bg-white text-black overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-3 flex items-center gap-3">
              <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Learn more about me</p>
                <p className="text-xs text-blue-100">I'm online</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white"><X size={18} /></button>
            </div>
             <div className="h-60 overflow-y-auto border-t border-b px-4 py-2 text-sm space-y-2">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: msg.sender === 'bot' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`p-2 max-w-[90%] rounded-2xl text-sm text-black ${
            msg.sender === 'bot'
              ? 'bg-gradient-to-r from-blue-400 to-white-600 text-left'
              : 'bg-gradient-to-r from-blue-600 to-blue-400 self-end ml-auto text-right'
          }`}
        >
          {msg.text}
        </motion.div>
      ))}
      <div ref={endRef} /> {/* <- le point de scroll */}
    </div>
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {quickOptions.map((option) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={option}
                  onClick={() => handleBubbleClick(option)}
                  className="bg-white border text-blue-600 border-blue-600 hover:bg-blue-100 rounded-full px-3 py-1 text-sm"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 p-3 rounded-full shadow-lg text-white"
          >
            <MessageSquare />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;

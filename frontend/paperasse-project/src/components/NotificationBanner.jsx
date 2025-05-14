import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';

const NotificationBanner = ({ message, type = 'info' }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getBackgroundColor = () => {
    switch(type) {
      case 'success': return 'bg-green-600';
      case 'error': return 'bg-red-600';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-blue-600';
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={`fixed top-4 right-4 rounded-lg shadow-lg max-w-md p-4 text-white flex items-center ${getBackgroundColor()}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <Bell size={20} className="mr-2" />
          <p className="flex-1">{message}</p>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBanner;
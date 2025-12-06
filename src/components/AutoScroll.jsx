import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaArrowUp } from 'react-icons/fa';

const AutoScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollTimerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const isScrollingRef = useRef(false);

  const stopScroll = () => {
    isScrollingRef.current = false;
    setIsScrolling(false);
    if (scrollTimerRef.current) clearInterval(scrollTimerRef.current);
  };

  const startScroll = () => {
    isScrollingRef.current = true;
    setIsScrolling(true);
    setIsAtBottom(false);

    scrollTimerRef.current = setInterval(() => {
      const { scrollY } = window;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (scrollY + winHeight >= docHeight - 100) {
        stopScroll();
        setIsAtBottom(true);
        return;
      }

      window.scrollBy(0, 2);
    }, 16);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsAtBottom(false);
  };

  const handleToggle = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      isScrollingRef.current ? stopScroll() : startScroll();
    }
  };

  useEffect(() => {
    const stopOnInteraction = () => {
      if (isScrollingRef.current) stopScroll();
      setIsVisible(false);
      
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setIsVisible(true), 2000);
    };

    window.addEventListener('wheel', stopOnInteraction, { passive: true });
    window.addEventListener('touchmove', stopOnInteraction, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' ', 'Home', 'End'].includes(e.key)) {
        stopOnInteraction();
        setIsAtBottom(false);
      }
    });

    return () => {
      window.removeEventListener('wheel', stopOnInteraction);
      window.removeEventListener('touchmove', stopOnInteraction);
      if (scrollTimerRef.current) clearInterval(scrollTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={handleToggle}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffcc02] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isAtBottom ? 'Back to top' : isScrolling ? 'Stop auto-scroll' : 'Start auto-scroll'}
        >
          {isAtBottom ? (
            <FaArrowUp className="text-lg" />
          ) : isScrolling ? (
            <FaPause className="text-lg" />
          ) : (
            <FaPlay className="text-lg ml-1" />
          )}
          
          <span className="absolute bottom-full mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isAtBottom ? 'Back to Top' : isScrolling ? 'Pause' : 'Auto-scroll'}
          </span>

          {/* Animated ring when scrolling */}
          {isScrolling && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AutoScroll;

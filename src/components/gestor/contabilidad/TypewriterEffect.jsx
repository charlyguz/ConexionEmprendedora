import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed = 100 }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    if (visibleText.length < text.length) {
      const timeout = setTimeout(() => {
        setVisibleText(text.substring(0, visibleText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [visibleText, text, speed]);

  return <div className='p-5 z-10 text-primary'>{visibleText}</div>;
};

export default TypewriterEffect;
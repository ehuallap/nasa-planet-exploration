import React, { useState, useEffect } from 'react';

interface DDTitleProps {
  text: string;
  speed?: number;
  color?: string;
  fontSize?: string;
}

const DDTitle: React.FC<DDTitleProps> = ({ text, speed = 70, color = "black", fontSize = "20px"}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return <div style={{ color, fontSize }}>{displayedText}</div>;
};

export default DDTitle;

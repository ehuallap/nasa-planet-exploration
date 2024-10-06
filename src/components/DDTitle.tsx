import React, { useState, useEffect, useRef } from 'react';

interface DDTitleProps {
  text: string;
  speed?: number;
  color?: string;
  fontSize?: string;
  audioSrc?: string;
}

const DDTitle: React.FC<DDTitleProps> = ({ text, speed = 70, color = "black", fontSize = "20px", audioSrc}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    console.log("user Effect")
    if (audioSrc && index === 0) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = false;
      audioRef.current.play();
    }

    // Detener el audio cuando termine de escribir
    if (index >= text.length && audioRef.current) {
      console.log("termino de escribir")
      console.log("termino de escribir:", audioRef)
      console.log("termino de escribir:", audioRef.current)
      audioRef.current.pause();
      //audioRef.current.currentTime = 0; // Reiniciar el audio
      console.log("Terminó de escribir, audio actual:", audioRef.current);
    }

    if (index < text.length) {
      if(audioRef.current?.ended){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
        console.log("index", index)
      }, speed);

      return () => {
        clearTimeout(timeoutId)
      };
    }
  }, [index, text, speed]);

  return (<>
          <div style={{ color, fontSize }}>{displayedText}</div>
        </>
)};

export default DDTitle;

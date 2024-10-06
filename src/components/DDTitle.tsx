import React, { useState, useEffect } from 'react';

interface DDTitleProps {
  text: string;
  speed?: number;
  color?: string;
  fontSize?: string;
}

const DDTitle: React.FC<DDTitleProps> = ({ text, speed = 70, color = "black", fontSize = "20px" }) => {
  const [visibleText, setVisibleText] = useState<string>(''); // Estado para almacenar el texto que se va mostrando
  const [index, setIndex] = useState<number>(0); // Estado para manejar el índice actual de la letra que se revela

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setVisibleText((prev) => prev + text[index]); // Añade una letra cada vez
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout); // Limpiar el timeout al desmontar el componente
    }
  }, [index, text, speed]);

  return (
    <div style={{ color, fontSize }}>
      {visibleText}
    </div>
  );
};

export default DDTitle;

import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const DDTitle = ({ text, speed = 70, color = "black", fontSize = "20px" }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);
    return _jsx("div", { style: { color, fontSize }, children: displayedText });
};
export default DDTitle;

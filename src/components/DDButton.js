import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import ButtonAudio from '../assets/sounds/navigation-digital-menu-click.wav';
import { useNavigate } from "react-router-dom";
const DDButton = ({ href, onClick, className, children, }) => {
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reinicia el audio
            audioRef.current.play(); // Reproduce el audio
        }
        if (href) {
            setTimeout(() => {
                //navigate("/mision-description"); // Cambia de ruta
                navigate(href); // Cambia de ruta
            }, 800);
        }
    };
    const buttonStyle = {
        position: 'absolute',
        top: top || '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto', // Para que no interfiera con la interacción de la escena
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (_jsxs("div", { children: [_jsx("button", { onClick: handleClick, className: className, children: children }), _jsxs("audio", { ref: audioRef, children: [_jsx("source", { src: ButtonAudio, type: "audio/mpeg" }), "Tu navegador no soporta el elemento de audio."] })] }));
};
export default DDButton;

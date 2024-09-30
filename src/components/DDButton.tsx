import { useRef } from "react";
import ButtonAudio from '../assets/sounds/button_sound.mp3'
import { useNavigate } from "react-router-dom";

const DDButton = ({ routeToChange, onClick, className, children,  }) => {
    const audioRef = useRef(null); // Referencia para el audio
    const navigate = useNavigate();
    const handleClick = () => {
        if(onClick){
            onClick()
        }
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reinicia el audio
            audioRef.current.play(); // Reproduce el audio
        }
        if (routeToChange) {
            setTimeout(() => {
            navigate("/mision-description"); // Cambia de ruta
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

    return (
      <div>
        <button onClick={handleClick} className={className}>
          {children}
        </button>
  
        {/* Elemento de audio oculto */}
        <audio ref={audioRef}>
          <source src={ButtonAudio} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    );
  };
  
  export default DDButton;
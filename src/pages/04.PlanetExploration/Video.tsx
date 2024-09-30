import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Video = ({ videoId }) => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Hacer que el contenedor del video ocupe toda la pantalla
    const videoElement = document.getElementById('video-container');
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
      videoElement.msRequestFullscreen();
    }
    
    // Intentar reproducir el video sin silenciar
    const handleLoad = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        const player = new window.YT.Player(iframe, {
          events: {
            'onReady': (event) => {
              event.target.unMute(); // Intenta desactivar el silencio
              event.target.setVolume(100); // Ajusta el volumen al 100%
            },
          },
        });
      }
    };

    window.onYouTubeIframeAPIReady = handleLoad; // Espera a que la API de YouTube esté lista

    return () => {
      window.onYouTubeIframeAPIReady = null; // Limpia el evento
    };
  }, []);

  const handleBack = () => {
    navigate('/planet-information')
    //history.goBack(); // Regresa a la ruta anterior
  };

  return (
    <div
      id="video-container"
      style={{
        position: 'fixed', // Cambiar a fixed para cubrir toda la pantalla
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999, // Asegurarse de que esté en la parte superior
      }}
    >
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&volume=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          border: 'none', // Sin borde
          borderRadius: '8px', // Ajusta el estilo según sea necesario
        }}
      ></iframe>

      <button
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semitransparente
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 10000, // Asegúrate de que el botón esté por encima
          fontSize: "1.5rem",
        }}
      >
        Regresar
      </button>
    </div>
  );
};
  
  export default Video;
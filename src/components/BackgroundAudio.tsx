import { useEffect, useRef } from 'react';

const BackgroundAudio = ({ href }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play();
    }
  }, []);

  return (
    <audio ref={audioRef} src={href} loop autoPlay />
  );
};

export default BackgroundAudio;
import { useEffect, useRef } from 'react';



interface BackgroundAudioProps {
  href: string;
}
const BackgroundAudio: React.FC<BackgroundAudioProps> = ({ href }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioRef.current.volume = 0.3;
      audioElement.play();
    }
  }, []);

  return (
    <audio ref={audioRef} src={href} loop autoPlay />
  );
};

export default BackgroundAudio;
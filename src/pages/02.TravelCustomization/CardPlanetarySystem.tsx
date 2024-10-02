import useMisionStore from '../../store/store';
import exoplanetsData from '../../data/exoplanets.json'
import './CardPlanetarysystem.css'
import { useNavigate } from 'react-router-dom';

import HoverAudio from '../../assets/sounds/navigation-digital-pop-up.wav'
import ClickAudio from '../../assets/sounds/navigation-digital-menu-click.wav'

const CardPlanetarySystem = ({clas, text}) => {
  const audio = new Audio(HoverAudio);
  const audioClick = new Audio(ClickAudio);
    const { planetarySystem, setPlanetarySystem } = useMisionStore();
    const navigate = useNavigate();
    const changePlanetarySystem = ( option : string) => {
        audioClick.play()
        const filtered = exoplanetsData.filter((item) => item.solar_system === option)
        setPlanetarySystem("Planetary System : " + option, filtered);
        navigate("/select-spaceship")
    }


    const handleMouseEnter = () => {
        audio.play();  // Reproduce el audio
    };

    const handleMouseLeave = () => {
        audio.pause();  // Pausa el audio si lo deseas
        audio.currentTime = 0;  // Reinicia el audio para la próxima vez
    };

  return (
    <div className={`image-card ${clas}`} onClick={()=>changePlanetarySystem(text)}
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <p className="text-overlay">{text}</p>
    </div>
  )
}

export default CardPlanetarySystem
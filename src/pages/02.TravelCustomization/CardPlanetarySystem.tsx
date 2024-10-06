import React from 'react';
import { create } from 'zustand';
import exoplanetsData from '../../data/exoplanets.json';
import './CardPlanetarySystem.css';
import { useNavigate } from 'react-router-dom';

import HoverAudio from '../../assets/sounds/navigation-digital-pop-up.wav';
import ClickAudio from '../../assets/sounds/navigation-digital-menu-click.wav';
import useMisionStore from '../../store/store';

// Define el tipo para un exoplaneta
type Exoplanet = {
  id: number;
  name: string;
  solar_system: string;
  year: string;
  distance_ligth_years: string;
  type: string;
  size: string;
  mass: string;
  orbit_time: string;
  habitable: string;
  temperature: string;
  url_asset_texture: string;
  url_video: string;
};

// Define el tipo para el estado del sistema planetario
type PlanetarySystem = {
  name: string;
  exoplanets: Exoplanet[];
};

type MissionStore = {
  planetarySystem: PlanetarySystem;
  setPlanetarySystem: (name: string, exoplanets: Exoplanet[]) => void;
};

// Define el tipo de props para el componente
type CardPlanetarySystemProps = {
  clas: string;
  text: string;
};

const CardPlanetarySystem = ({clas, slug, text}) => {
  const audio = new Audio(HoverAudio);
  const audioClick = new Audio(ClickAudio);
    const { planetarySystem, setPlanetarySystem } = useMisionStore();
    const navigate = useNavigate();
    const changePlanetarySystem = ( option : string) => {
        audioClick.play()
        const filtered = exoplanetsData.filter((item) => item.solar_system === option)
        setPlanetarySystem(slug, filtered);
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
    <div 
      className={`image-card ${clas}`} 
      onClick={() => changePlanetarySystem(text)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-overlay">{text}</p>
    </div>
  );
}

export default CardPlanetarySystem;

import { jsx as _jsx } from "react/jsx-runtime";
import { create } from 'zustand';
import exoplanetsData from '../../data/exoplanets.json';
import './CardPlanetarySystem.css';
import { useNavigate } from 'react-router-dom';
import HoverAudio from '../../assets/sounds/navigation-digital-pop-up.wav';
import ClickAudio from '../../assets/sounds/navigation-digital-menu-click.wav';
// Define el store
const useMisionStore = create((set) => ({
    planetarySystem: { name: '', exoplanets: [] },
    setPlanetarySystem: (name, exoplanets) => set({ planetarySystem: { name, exoplanets } }),
}));
const CardPlanetarySystem = ({ clas, text }) => {
    const audio = new Audio(HoverAudio);
    const audioClick = new Audio(ClickAudio);
    const { setPlanetarySystem } = useMisionStore();
    const navigate = useNavigate();
    const changePlanetarySystem = (option) => {
        audioClick.play();
        const filtered = exoplanetsData.filter((item) => item.solar_system === option);
        // Asegúrate de que setPlanetarySystem acepte estos parámetros
        setPlanetarySystem("Planetary System : " + option, filtered);
        navigate("/select-spaceship");
    };
    const handleMouseEnter = () => {
        audio.play(); // Reproduce el audio
    };
    const handleMouseLeave = () => {
        audio.pause(); // Pausa el audio si lo deseas
        audio.currentTime = 0; // Reinicia el audio para la próxima vez
    };
    return (_jsx("div", { className: `image-card ${clas}`, onClick: () => changePlanetarySystem(text), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: _jsx("p", { className: "text-overlay", children: text }) }));
};
export default CardPlanetarySystem;

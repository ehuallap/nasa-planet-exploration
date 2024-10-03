import { Link } from "react-router-dom";
import exoplanetsData from '../../data/exoplanets.json'
import useMisionStore from "../../store/store";
import DDButton from "../../components/DDButton";
const SelectPlanetarySystem = () => {
    const { planetarySystem, setPlanetarySystem } = useMisionStore();

    const changePlanetarySystem = ( option : string) => {
        const filtered = exoplanetsData.filter((item) => item.solar_system === option)
        setPlanetarySystem("Planetary System : " + option, filtered);
    }
    return (
        <div className='container'>
            <Link to="/personalization" style={{ textDecoration: 'none' }}><button className="button">Next</button></Link>
            <DDButton href="/mapping" onClick={()=>changePlanetarySystem("Alfa Centauir")}>Sistema Planetario 1</DDButton>
            <DDButton href="/mapping" onClick={()=>changePlanetarySystem("Alfa Centauir")}>Sistema Planetario 2</DDButton>
        </div>
    );
}
export default SelectPlanetarySystem;
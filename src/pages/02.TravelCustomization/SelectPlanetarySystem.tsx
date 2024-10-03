import { Link } from "react-router-dom";
import CardPlanetarySystem from "./CardPlanetarySystem";
const SelectPlanetarySystem = () => {
    
    return (
        <div className='container'>
            <div className="text-title">
                <p className="">Choose your destination</p>
            </div>
            <div className="list-images">
                <CardPlanetarySystem text="Alfa Centauir" clas='ps-1'></CardPlanetarySystem>
                <CardPlanetarySystem text="Tau Ceti" clas='ps-2'></CardPlanetarySystem>
                <CardPlanetarySystem text="Gliese 1061" clas='ps-3'></CardPlanetarySystem>
                <CardPlanetarySystem text="YZ Ceti" clas='ps-4'></CardPlanetarySystem>
            </div>
        </div>
    );
}
export default SelectPlanetarySystem;
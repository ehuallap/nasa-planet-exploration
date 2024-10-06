import { Link } from "react-router-dom";
import CardPlanetarySystem from "./CardPlanetarySystem";
const SelectPlanetarySystem = () => {
    
    return (
        <div className='container'>
            <div className="text-title">
                <p className="">Choose your destination</p>
            </div>
            <div className="list-images">
                <CardPlanetarySystem text="Alpha Centauri" slug='alpha-centauri' clas='ps-1'></CardPlanetarySystem>
                <CardPlanetarySystem text="Tau Ceti" slug='tau-ceti' clas='ps-2'></CardPlanetarySystem>
                <CardPlanetarySystem text="Gliese 1061" slug='gliese-1061' clas='ps-3'></CardPlanetarySystem>
                <CardPlanetarySystem text="YZ Ceti" slug='yz-ceti' clas='ps-4'></CardPlanetarySystem>
            </div>
        </div>
    );
}
export default SelectPlanetarySystem;
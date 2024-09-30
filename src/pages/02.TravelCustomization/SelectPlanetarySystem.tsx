import { Link } from "react-router-dom";

const SelectPlanetarySystem = () => {
    return (
        <div className='container'>
            <Link to="/personalization" style={{ textDecoration: 'none' }}><button className="button">Next</button></Link>
        </div>
    );
}
export default SelectPlanetarySystem;
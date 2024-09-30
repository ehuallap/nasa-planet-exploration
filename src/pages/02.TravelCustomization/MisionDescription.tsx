import { Link } from "react-router-dom";

const MisionDescription = () => {
    return (
        <div className='container'>
            Mision Description
            <Link to="/planet-information" style={{ textDecoration: 'none' }}><button className="button">Next</button></Link>
        </div>
    );
}
export default MisionDescription;
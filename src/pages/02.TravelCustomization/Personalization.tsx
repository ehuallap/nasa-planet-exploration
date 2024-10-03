import { Link } from "react-router-dom";

const Personalization = () => {
    return (
        <div className='container'>
            <Link to="/personalization" style={{ textDecoration: 'none' }}><button className="button">Next</button></Link>
        </div>
    );
}
export default Personalization;
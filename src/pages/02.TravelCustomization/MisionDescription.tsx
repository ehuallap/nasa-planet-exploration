import { Link } from "react-router-dom";
import './MisionDescription.css';
import Astronaut from '../../assets/astronauta.png'
import DDTitle from "../../components/DDTitle";
const MisionDescription = () => {
    let text1 = false;
    let text2 = false;
    let text3 = false;
    setTimeout(()=>{
        text2 = true;
    }, 1000)
    return (
        <div className='container-mision'>
            <div className="left">
                <DDTitle text="Welcome to SOLUTI's Mission" fontSize='35px' color='white'></DDTitle>
                <DDTitle text="You are going to be part of the most wonderful adventure, your are going to be the traveler of the future" fontSize='30px' color='white'></DDTitle>
                <DDTitle text="Enter your name: " fontSize='30px' color='white'></DDTitle>
                <input type="text" className="input"></input>
                <Link to="/select-planetary-system" style={{ textDecoration: 'none' }}><button className="button">Next</button></Link>
            </div>
            <div className="right">
                <img src={Astronaut} className="astronaut" alt="Astronaut" width="500" height="600"></img>
            </div>

        </div>
    );
}
export default MisionDescription;
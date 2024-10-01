import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import './MisionDescription.css';
import Astronaut from '../../assets/astronauta.png'
import DDTitle from "../../components/DDTitle";
import useMisionStore from "../../store/store";
const MisionDescription = () => {

    const [name, setName] = useState("");

    let [text1, setText1] = useState(true);
    let [text2, setText2] = useState(false);
    let [text3, setText3] = useState(false);
    setTimeout(()=>{
        setText2(true)
    }, 2000);

    setTimeout(()=>{
        setText3(true);
    }, 10000);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };

    return (
        <div className='container-mision'>
            <div className="left">
                { text1 && <DDTitle text="Welcome to SOLUTI's Mission" fontSize='35px' color='white'></DDTitle>}
                { text2 && <DDTitle text="You are going to be part of the most wonderful adventure, your are going to be the traveler of the future" fontSize='30px' color='white'></DDTitle>}
                { text3 && <DDTitle text="Enter your name: " fontSize='30px' color='white'></DDTitle>}
                <input type="text" className="input" onChange={handleInputChange}></input>
                { name.length > 0 ? (<Link to="/select-planetary-system" style={{ textDecoration: 'none' }}><button className="button">Next</button></Link>)
                    : (<span style={{ textDecoration: 'none'}}><button className="button" disabled>Next</button></span>)    
            }


            </div>
            <div className="right">
                <img src={Astronaut} className="astronaut" alt="Astronaut" width="500" height="600"></img>
            </div>

        </div>
    );
}
export default MisionDescription;
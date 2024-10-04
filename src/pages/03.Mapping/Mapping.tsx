import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
import './Mapping.css'

import Background from '../../assets/astronauta-vista-espacio.png'
import CentauriA from '../../assets/exoplanets/centauri-a.jpg'
import CentauriB from '../../assets/exoplanets/centauri-b.png'
import CentauriC from '../../assets/exoplanets/centauri-c.png'
import CentauriD from '../../assets/exoplanets/centauri-d.png'
import { useNavigate } from 'react-router-dom';



const Mapping = () => {
    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();

    const navigate = useNavigate();
    const changeExoplanet = ( option : Number) => {
        console.log("anuevo exoplanet : " + option)
        setCurrentExoplanet(option);
        setTimeout(() => navigate("/planet-information"), 800);
    }

    return (
        <div className='container-mapping'>
            <img
                src={Background}
                alt="Background"
                className="background-image"
            />
            <img
                src={CentauriB}
                alt="Clickable Image 1"
                className="clickable-image"
                style={{ top: '50%', left: '50%', width: '8%', height: '16%', zIndex: 2  }}
                onClick={() => changeExoplanet(0)}
            />
            <img
                src={CentauriC}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '50%', left: '5%', width: '40%', height: '40%', zIndex: 2 }}
                onClick={() => changeExoplanet(1)}
            />
            <img
                src={CentauriD}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '20%', left: '25%', width: '6%', height: '12%', zIndex: 2 }}
                onClick={() => changeExoplanet(2)}
            />
            <img
                src={CentauriA}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '0%', left: '-20%', width: '100%', height: '100%', zIndex: 0 }}
            />
            <div className='exoplanets-mapping'>
            {
                planetarySystem.exoplanets.map((exoplanet, index)=>{
                    return <DDButton href="/planet-information" onClick={()=>changeExoplanet(index)}>{exoplanet.name} </DDButton>
                })
            }
            </div>
        </div>
    );
}
 
export default Mapping;
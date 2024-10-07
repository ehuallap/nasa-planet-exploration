import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
import './Mapping.css'

import Background from '../../assets/astronauta-vista-espacio.png'
import CentauriA from '../../assets/exoplanets/centauri-a.jpg'
import CentauriB from '../../assets/exoplanets/centauri-b.png'
import CentauriC from '../../assets/exoplanets/centauri-c.png'
import CentauriD from '../../assets/exoplanets/centauri-d.png'



const TauCetiMapping = () => {
    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();
    const changeExoplanet = ( option : Number) => {
        console.log("anuevo exoplanet : " + option)
        setCurrentExoplanet(option);
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
                style={{ top: '50%', left: '50%', width: '8%', height: '16%', zIndex: 1  }}
                onClick={() => alert("Image 1 clicked")}
            />
            <img
                src={CentauriC}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '50%', left: '0%', width: '50%', height: '50%', zIndex: 1 }}
                onClick={() => alert("Image 2 clicked")}
            />
            <img
                src={CentauriD}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '20%', left: '25%', width: '6%', height: '12%', zIndex: 1 }}
                onClick={() => alert("Image 2 clicked")}
            />
            <img
                src={CentauriA}
                alt="Clickable Image 2"
                className="clickable-image"
                style={{ top: '0%', left: '-20%', width: '100%', height: '100%', zIndex: 0 }}
                onClick={() => alert("Image 2 clicked")}
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
 
export default TauCetiMapping;
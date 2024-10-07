import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
import './Mapping.css'
import Background from '../../assets/astronauta-vista-espacio.png'
import CentauriA from '../../assets/exoplanets/centauri-a.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import  Planet from '../../components/Planet'
import ChooseExoplanetAudio from '../../assets/sayings/which-exoplanet.mp3'
import BackgroundAudio from '../../components/BackgroundAudio';
import Audio  from '../../assets/sounds/pista.mp3'

const position = [
    {top : "40%", left: "46%", size: 250},
    {top : "13%", left: "15%", size: 240},
    {top : "52%", left: "12%", size: 200},
    {top : "67%", left: "32%", size: 180},
    {top : "50%", left: "50%", size: 180},
    {top : "50%", left: "50%", size: 180},
]

const Mapping = () => {
    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();
    const navigate = useNavigate();
    const changeExoplanet = ( option : Number) => {
        setCurrentExoplanet(option);
        navigate("/planet-information/")
    }
    const audioRef = useRef(null);
    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioRef.current.volume = 1;
            audioElement.play();
        }
    }, []);
    return (
        <div className='container-mapping'>
            <BackgroundAudio href={Audio}></BackgroundAudio>
            <audio ref={audioRef} src={ChooseExoplanetAudio}/>
            <img
                src={Background}
                alt="Background"
                className="background-image"
            />
            <img
                src={CentauriA}
                alt="Image 2"
                className="clickable-image"
                style={{ top: '0%', left: '-20%', width: '100%', height: '100%', zIndex: 0 }}
            />
            <p className='title-exoplanet'>Which exoplanet should I explore?</p>
            {planetarySystem.exoplanets.map((exoplanet, index)=>{
                return <Planet top={position[index].top} left={position[index].left} size={position[index].size} name={exoplanet.name} onClick={() => changeExoplanet(0)} />
            })}
            {/* <Planet top="40%" left='46%' size={180} name="Trappist-1 a" onClick={() => changeExoplanet(0)} />
            <Planet top="15%" left='20%' size={150} name='Proxima Centauri b' onClick={() => changeExoplanet(1)} />
            <Planet top="50%" left='15%' size={250} name='Proxima Centauri c' onClick={() => changeExoplanet(2)} /> */}

        </div>
    );
}
 
export default Mapping;
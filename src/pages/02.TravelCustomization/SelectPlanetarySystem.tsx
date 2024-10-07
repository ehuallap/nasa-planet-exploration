import { Link } from "react-router-dom";
import CardPlanetarySystem from "./CardPlanetarySystem";
import ChooseDestinationAudio from '../../assets/sayings/choose-destination.mp3'
import { useEffect, useRef } from "react";
const SelectPlanetarySystem = () => {
    const audioRef = useRef(null);
    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioRef.current.volume = 1;
            audioElement.play();
        }
    }, []);
    return (
        <div className='container'>
            <audio ref={audioRef} src={ChooseDestinationAudio}/>
            <div className="text-title">
                <p className="">Choose your destination</p>
            </div>
            <div className="list-images">
                <CardPlanetarySystem text="Trappist-1" slug='alpha-centauri' clas='ps-1' blocked={false}></CardPlanetarySystem>
                <CardPlanetarySystem text="Tau Ceti" slug='tau-ceti' clas='ps-2 blocked' blocked={true}></CardPlanetarySystem>
                <CardPlanetarySystem text="Gliese 1061" slug='gliese-1061' clas='ps-3 blocked' blocked={true}></CardPlanetarySystem>
                <CardPlanetarySystem text="YZ Ceti" slug='yz-ceti' clas='ps-4 blocked' blocked={true}></CardPlanetarySystem>
            </div>
        </div>
    );
}
export default SelectPlanetarySystem;
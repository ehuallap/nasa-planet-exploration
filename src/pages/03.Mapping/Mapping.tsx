import DDButton from '../../components/DDButton';
import useFetchExoplanets from '../../hooks/useExoplanets';
import useMisionStore from '../../store/store';
import exoplanetsData from '../../data/exoplanets.json'
const Mapping = () => {
    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();
    const changeExoplanet = ( option : Number) => {
        console.log("anuevo exoplanet : " + option)
        setCurrentExoplanet(option);
    }

    return (
        <div className='container'>
            {
                planetarySystem.exoplanets.map((exoplanet, index)=>{
                    return <DDButton href="/planet-information" onClick={()=>changeExoplanet(index)}>{exoplanet.name} </DDButton>
                })
            }
        </div>
    );
}
 
export default Mapping;
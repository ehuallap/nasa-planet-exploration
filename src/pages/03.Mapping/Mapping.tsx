import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
import './Mapping.css'
const Mapping = () => {
    const { planetarySystem, currentExoplanet, setCurrentExoplanet } = useMisionStore();
    const changeExoplanet = ( option : Number) => {
        console.log("anuevo exoplanet : " + option)
        setCurrentExoplanet(option);
    }

    return (
        <div className='container-mapping'>
            <div className='exoplanets-mapping'>
                {
                    planetarySystem.exoplanets.map((exoplanet, index) => {
                        return (
                            <DDButton 
                                href="/planet-information" 
                                onClick={() => changeExoplanet(index)} 
                                className="btn-class"
                            >
                                {exoplanet.name}
                            </DDButton>
                        );
                    })
                }
            </div>
        </div>
    );
}
 
export default Mapping;
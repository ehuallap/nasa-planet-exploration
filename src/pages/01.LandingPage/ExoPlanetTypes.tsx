import './ExoPlanetTypes.css'
import React from 'react';
import PlanetCard from '../../components/PlanetCard';
import exoplanetType1 from '../../assets/exoplanet_type_1.png';
import exoplanetType2 from '../../assets/exoplanet_type_2.png';
import exoplanetType3 from '../../assets/exoplanet_type_3.png';
import exoplanetType4 from '../../assets/exoplanet_type_4.png';

const ExoplanetTypes: React.FC = () => {
  return (
    <div className="exoplanet-types">
      <div className='header'>
        <h1>Tipo de Exoplanetas</h1>
      </div>
      <div className="planet-container-1">
        <PlanetCard 
          name="Gigantes Gaseosos" 
          description="Planetas sólidos como la Tierra." 
          imageUrl={exoplanetType1} 
        />
      </div>
      <div className="planet-container-2">
        <PlanetCard 
          name="Super-Tierras" 
          description="Planetas rocosos más grandes que la Tierra." 
          imageUrl={exoplanetType2} 
        />
      </div>
      <div className="planet-container-3">
        <PlanetCard 
          name="Gigantes Gaseosos" 
          description="Planetas masivos como Júpiter." 
          imageUrl={exoplanetType3} 
        />
      </div>
      <div className="planet-container-4">
        <PlanetCard 
          name="Neptunianos" 
          description="Planetas similares a Neptuno." 
          imageUrl={exoplanetType4}
        />
      </div>
    </div>
  );
};

export default ExoplanetTypes;
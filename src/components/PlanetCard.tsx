import React from 'react';
import './PlanetCard.css'

interface PlanetCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="planet-card">
      <img src={imageUrl} alt={name}/>
        {/*<h3 className='planet-name'>{name}</h3>*/}
        {/*<p>{description}</p>*/}
    </div>
  );
};

export default PlanetCard;
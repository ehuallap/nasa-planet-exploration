import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DDSpaceship.css';

const SpaceshipComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Link
            to="mision-description"
            className="spaceship-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ textDecoration: 'none' }}
        >
            {/* El círculo (nave espacial) */}
            <div className={`spaceship-circle ${isHovered ? 'hovered' : ''}`}></div>

            {/* Texto "EMPIEZA TU VIAJE" */}
            <div className={`spaceship-text ${isHovered ? 'fade-in' : ''}`}>
                EMPIEZA TU VIAJE
            </div>
        </Link>
    );
};

export default SpaceshipComponent;
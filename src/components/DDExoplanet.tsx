import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DDExoplanet.css';

const ExoplanetComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Link
            to="exoplanet-types"
            className="exoplanet-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ textDecoration: 'none' }}
        >
            {/* El círculo (exoplaneta) */}
            <div className={`exoplanet-circle ${isHovered ? 'hovered' : ''}`}></div>

            {/* Texto "DESCUBRE LA HISTORIA" */}
            <div className={`exoplanet-text ${isHovered ? 'fade-in' : ''}`}>
                DESCUBRE LA HISTORIA
            </div>
        </Link>
    );
};

export default ExoplanetComponent;
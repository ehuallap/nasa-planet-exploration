import { useState } from "react";
import Back1 from '../../assets/background-selection.jpg'
import Back2 from '../../assets/backgrouond2.jpg'
import Back3 from '../../assets/earth_texture.jpg'


const images = [
    Back1,
    Back2,
    Back3,
  ];

const SelectSpaceship = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel-container">
        <button className="carousel-button left" onClick={prevImage}>❮</button>
        <div className="carousel-image">
          <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
        </div>
        <button className="carousel-button right" onClick={nextImage}>❯</button>
        <button className="select-button">Select</button>
      </div>
    );
  };

export default SelectSpaceship
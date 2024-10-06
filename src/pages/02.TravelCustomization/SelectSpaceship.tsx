import { useRef, useState } from "react";
import Spaceship2 from '../../assets/spaceships/nave-2.png'
import Spaceship6 from '../../assets/spaceships/nave-6.png'
import Spaceship8 from '../../assets/spaceships/nave-8.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DDButton from "../../components/DDButton";
import './SelectSpaceship.css'
import useMisionStore from "../../store/store";
import CustomBackground from "../../components/CustomBackground";
const images = [
  Spaceship2,
  Spaceship6,
  Spaceship8,
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const SelectSpaceship = () => {
    const carouselRef = useRef();
    const {setSpaceship} = useMisionStore()
    const handleSelectClick = () => {
      if (carouselRef.current) {
        const currentIndex = carouselRef.current;
        setSpaceship(currentIndex);
        console.log('Índice de la imagen actual:', currentIndex);
    } else {
        console.warn('carouselRef.current es undefined');
    }
    };

    const { planetarySystem } = useMisionStore();

    return (
          <CustomBackground>
            <div>
              <div className="text-title">
                <p>Select your spaceship</p>
              </div>
              <Carousel ref={carouselRef}  responsive={responsive} arrows={true}>
              {images.map((image, index) => (
                  <div key={index} style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={image} className="spaceship" alt={`Imagen ${index + 1}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                  </div>
              ))}
              </Carousel>
              <div className="bottom">
                <DDButton href={'/mapping/'} onClick={handleSelectClick}>Select</DDButton>
              </div>
          </div>
        </CustomBackground>
    );
  };

export default SelectSpaceship
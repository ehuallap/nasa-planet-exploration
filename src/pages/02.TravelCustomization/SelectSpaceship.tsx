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

  const descriptions = [
    "A light, streamlined spacecraft with a shiny, thin hull that seems designed to cut through the stellar wind. Its small size and sleek shape suggest impressive speed, as if it could zip through space in the blink of an eye",
    "Robust and aggressive, this ship is armored with thick metal plates that make it seem almost invulnerable. Cannons and turrets are strategically distributed along its body, ready to unleash a firestorm at any moment",
    "The ship appears to be the pinnacle of advanced engineering and cutting-edge technology. Its engines glow with a silent glow, and the advanced antennas and sensors on its structure indicate that it is equipped with the latest in exploration and intelligence technology."
  ]

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
                <p>Choose your spaceship</p>
              </div>
              <Carousel ref={carouselRef}  responsive={responsive} arrows={true}>
              {images.map((image, index) => (
                  <div className="spaceship-div" key={index} style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={image} className="spaceship-img" alt={`Imagen ${index + 1}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                      <div className="spaceship-p-con">
                        <p className="spaceship-p">{descriptions[index]}</p>
                      </div>
                  </div>
              ))}
              </Carousel>
              <div className="bottom">
                <DDButton href={'/mapping/'} onClick={handleSelectClick}>Choose</DDButton>
              </div>
          </div>
        </CustomBackground>
    );
  };

export default SelectSpaceship
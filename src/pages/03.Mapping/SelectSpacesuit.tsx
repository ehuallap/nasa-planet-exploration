import { useState } from 'react';
import SpaceSuit1 from '../../assets/spacesuits/traje-astronauta-1.png'
import SpaceSuit4 from '../../assets/spacesuits/traje-astronauta-4.png'
import SpaceSuit5 from '../../assets/spacesuits/traje-astronauta-5.png'
import './SelectSpacesuit.css'
const SelectSpacesuit = () => {
  return (
    <>
        <div className='space-suit-container'>
            <p className='title'>Select your Spacesuit</p>
            <div className='suit-grid'>
                <div className='div-suitbtn'>
                    <img className='suit-image' src={SpaceSuit4} alt="Spacesuit"/>
                    <button>Select</button>
                </div>
                <div className='div-suitbtn'>
                    <img className='suit-image' src={SpaceSuit1} alt="Spacesuit"/>
                    <button>Select</button>
                </div>
                <div className='div-suitbtn'>
                    <img className='suit-image' src={SpaceSuit5} alt="Spacesuit"/>
                    <button>Select</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SelectSpacesuit
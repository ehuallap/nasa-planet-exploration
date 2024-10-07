import { useState } from 'react';
import SpaceSuit1 from '../../assets/spacesuits/traje-astronauta-1.png'
import SpaceSuit4 from '../../assets/spacesuits/traje-astronauta-4.png'
import SpaceSuit5 from '../../assets/spacesuits/traje-astronauta-5.png'
import './SelectSpacesuit.css'
import DDButton from '../../components/DDButton';
import useMisionStore from '../../store/store';
const SelectSpacesuit = () => {
    const { setSpacesuit} = useMisionStore()
    const changeSpaceSuit = (spacesuit : string) => {
        console.log("spacesuit", spacesuit)
        setSpacesuit(spacesuit)
    }
  return (
        <div className='space-suit-container'>
            <p className='title'>Choose your Spacesuit</p>
            <div className='suit-grid'>
                <div className='div-suitbtn'>
                    <img className='suit-image' src={SpaceSuit4} alt="Spacesuit"/>
                    <p className='suit-text'>Futuristic suit combines ultralight materials with advanced technology</p>
                    <DDButton href="/video" onClick={()=>changeSpaceSuit(SpaceSuit4.toString())}>Choose</DDButton>
                </div>
                <div className='div-suitbtn'>
                    <img className='suit-image' src={SpaceSuit1} alt="Spacesuit"/>
                    <p className='suit-text'>Its imposing appearance, reinforced with layers of protection, ensures survival against toxic gases and electrical discharges.</p>
                    <DDButton href="/video" onClick={()=>changeSpaceSuit(SpaceSuit1.toString())}>Choose</DDButton>
                </div>
                <div className='div-suitbtn'>
                    <img className='suit-image' src={SpaceSuit5} alt="Spacesuit"/>
                    <p className='suit-text'>Rugged looking suit is built to withstand intense temperatures</p>
                    <DDButton href="/video" onClick={()=>changeSpaceSuit(SpaceSuit5.toString())}>Choose</DDButton>
                </div>
            </div>
        </div>
  )
}

export default SelectSpacesuit
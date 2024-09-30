import {create} from 'zustand';
// Definir el store
const useMisionStore = create((set : any) => ({
  count: 0,
  name : "",
  planetarySystem : {
    name: "",
    exoplanets: []
  },
  spaceship : "",
  space_suit : "",
  space_pet: "",
  currentExoplanet: null,
  increment: () => set((state : any) => ({ count: state.count + 1 })),
  decrement: () => set((state : any) => ({ count: state.count - 1 })),
  setName: (newName : string) => set({name: newName}),
  setPlanetarySystem: (name : string, exoplanets : []) => set({planetarySystem: {
    name: name,
    exoplanets: exoplanets 
  }}),
  //setCurrentExoplanet: (newExoplanet : string) => set({name: newExoplanet}),
  setCurrentExoplanet: (indexExoplanet : any) => set((state : any)=>({currentExoplanet: state.planetarySystem.exoplanets[indexExoplanet]})),
}));

export default useMisionStore;
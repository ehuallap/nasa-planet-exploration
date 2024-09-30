import {create} from 'zustand';
// Definir el store
const useMisionStore = create((set : any) => ({
  name : "",
  planetarySystem : {
    name: "",
    exoplanets: []
  },
  spaceship : "",
  space_suit : "",
  space_pet: "",
  currentExoplanet: null,
  indexExoplanet : 1,

  setName: (newName : string) => set({name: newName}),
  setPlanetarySystem: (name : string, exoplanets : []) => set({planetarySystem: {
    name: name,
    exoplanets: exoplanets 
  }}),
  //setCurrentExoplanet: (newExoplanet : string) => set({name: newExoplanet}),
  setCurrentExoplanet: (indexExoplanet : any) => set((state : any)=>
    ({currentExoplanet: state.planetarySystem.exoplanets[indexExoplanet],
      indexExoplanet : indexExoplanet
    })
  ),
  nextCurrentExoplanet: () => set((state : any)=> {
    console.log("state.planetarySystem.exoplanets.length", state.planetarySystem.exoplanets.length)
    console.log("state.indexExoplanet", state.indexExoplanet)
    console.log("state verdad o false", state.indexExoplanet === state.planetarySystem.exoplanets.length)
    console.log("state verdad o false + 1", state.indexExoplanet + 1)
    return {
      indexExoplanet : state.indexExoplanet === state.planetarySystem.exoplanets.length? state.indexExoplanet : state.indexExoplanet + 1,
      currentExoplanet: state.planetarySystem.exoplanets[state.indexExoplanet],
    }
  }),
}));

export default useMisionStore;
import {create} from 'zustand';
// Definir el store

interface ExoplanetInfo {
  label: string;
  id: number,
  name: string,
  solar_system: string,
  year: number,
  distance_ligth_years: number,
  type: string,
  size: string,
  mass: string,
  orbit_time: string,
  habitable : string,
  temperature: string,
  url_asset_texture: string,
  url_video: string,
  ref: string,
  unlocked : boolean,
  icons? : Object[]
  //     {
  //         name : string,
  //         icon : string,
  //         description : string
  //     }
  // ]
}

const useMisionStore = create((set : any) => ({
  name : "",
  planetarySystem : {
    name: "",
    exoplanets: []
  },
  spaceship : 0,
  spacesuit : "",
  space_pet: "",
  currentExoplanet: {
      id: 0,
      name: "Unknown",
      subtitle: "",
      solar_system: "Unknown",
      year: "Unknown",
      distance_ligth_years: "Unknown",
      type: "Unknown",
      size: "Unknown",
      mass: "Unknown",
      orbit_time: "Unknown",
      habitable : "Unknown",
      temperature: "Unknown",
      description: "Unknown",
      url_asset_texture:"centauri-b.png",
      url_video:"",
      ref: "",
      icons : [],
      unlocked: false,
      explored: false,
  },
  indexExoplanet : 1,

  setName: (newName : string) => set({name: newName}),
  setPlanetarySystem: (name : string, exoplanets : []) => set({planetarySystem: {
    name: name,
    exoplanets: exoplanets 
  }}),
  setSpaceship: (newSpaceship : number) => set({spaceship: newSpaceship}),
  setSpacesuit: (newSpacesuit : string) => set({spacesuit: newSpacesuit}),
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
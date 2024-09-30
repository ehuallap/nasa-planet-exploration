import {create} from 'zustand';



// Definir el store
const useStore = create((set : any) => ({
  count: 0,
  name : "",
  increment: () => set((state : any) => ({ count: state.count + 1 })),
  decrement: () => set((state : any) => ({ count: state.count - 1 })),
}));

export default useStore;
import { create } from "zustand";
import { PostEarthquake } from "../actions/eartquake.action";

interface Earthquakestate {
    handlePostMovie: (formData: FormData) => void;
}

export const UseEarthquakeStore = create<Earthquakestate>((set) => ({
    handlePostMovie: async (formData: FormData) => {
        await PostEarthquake(formData);
    }
}))
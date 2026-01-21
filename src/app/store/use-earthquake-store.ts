import { create } from "zustand";
import { GetEarthquake, PostEarthquake } from "../actions/eartquake.action";
import { EarthquakeDTO } from "@/types/earthquake";

interface Earthquakestate {
    handlePostEarthquake: (formData: FormData) => void;
    handleGetEarthquake: () => void;
    earthquake: EarthquakeDTO[]
}

export const UseEarthquakeStore = create<Earthquakestate>((set) => ({
    earthquake: [],

    handlePostEarthquake: async (formData: FormData) => {
        await PostEarthquake(formData);
    },

    handleGetEarthquake: async () => {
        const res = await GetEarthquake();
        set({ earthquake: res })
    }
}))
import { create } from "zustand";
import { GetEarthquake, PostEarthquake } from "../actions/eartquake.action";
import { EarthquakeDTO } from "@/types/earthquake";
import { toast } from "sonner";

interface Earthquakestate {
    handlePostEarthquake: (formData: FormData) => void;
    handleGetEarthquake: () => void;
    earthquake: EarthquakeDTO[]
}

export const UseEarthquakeStore = create<Earthquakestate>((set) => ({
    earthquake: [],

    handlePostEarthquake: async (formData: FormData) => {
        try {
            const res = await PostEarthquake(formData);

            if (res.success) {
                toast.success(res.message)
            } else {
                toast.error(res.message)
            }

        } catch (error) {
            console.log(error)
        }
    },

    handleGetEarthquake: async () => {
        try {
            const res = await GetEarthquake();
            set({ earthquake: res })
        } catch (error) {
            console.log(error)
        }
    }
}))
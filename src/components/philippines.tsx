"use client";

import { use, useEffect, useState } from "react";
import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel, MarkerPopup, useMap } from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { RotateCcw, Mountain, Star, Clock, Navigation, ExternalLink, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { UseEarthquakeStore } from "@/app/store/use-earthquake-store";
import DisplayMark from "./display-mark";

function MapController() {
    const { map, isLoaded } = useMap();
    const [pitch, setPitch] = useState(0);
    const [bearing, setBearing] = useState(0);

    useEffect(() => {
        if (!map || !isLoaded) return;

        const handleMove = () => {
            setPitch(Math.round(map.getPitch()));
            setBearing(Math.round(map.getBearing()));
        };

        map.on("move", handleMove);
        return () => {
            map.off("move", handleMove);
        };
    }, [map, isLoaded]);

    const handle3DView = () => {
        map?.easeTo({
            pitch: 60,
            bearing: -20,
            duration: 1000,
        });
    };

    const handleReset = () => {
        map?.easeTo({
            pitch: 0,
            bearing: 0,
            duration: 1000,
        });
    };

    if (!isLoaded) return null;

    return (
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            <div className="flex gap-2">
                <Button size="sm" variant="secondary" onClick={handle3DView}>
                    <Mountain className="size-4 mr-1.5" />
                    3D View
                </Button>
                <Button size="sm" variant="secondary" onClick={handleReset}>
                    <RotateCcw className="size-4 mr-1.5" />
                    Reset
                </Button>
            </div>
            <div className="rounded-md bg-background/90 backdrop-blur px-3 py-2 text-xs font-mono border">
                <div>Pitch: {pitch}°</div>
                <div>Bearing: {bearing}°</div>
            </div>
        </div>
    );
}

export function Philippines() {
    const { handleGetEarthquake, earthquake } = UseEarthquakeStore();


    useEffect(() => {
        handleGetEarthquake()

        const interval = setInterval(() => {
            handleGetEarthquake()
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    //   const earthquake = [
    //     {
    //         id: 1,
    //         city: "Sultan Kudarat",
    //         label: "Earthquake",
    //         magnitude: 3.0,
    //         timestamp: "21 January 2026 - 01:31 PM",
    //         longtitude: 124.3337268180007,
    //         latitude: 6.478515589595117,

    //     },
    //     {
    //         id: 2,
    //         city: "Sultan Kudarat",
    //         label: "Earthquake",
    //         magnitude: 3.0,
    //         timestamp: "21 January 2026 - 01:31 PM",
    //         longtitude: 124.63296678973343,
    //         latitude: 8.495530398129562,
    //     },
    //     {
    //         id: 3,
    //         city: "Sultan Kudarat",
    //         label: "Earthquake",
    //         magnitude: 4.9,
    //         timestamp: "21 January 2026 - 01:31 PM",
    //         longtitude: 123.31716750119328,
    //         latitude: 12.387107761972818,
    //     },
    //     {
    //         id: 4,
    //         city: "Quezon City",
    //         label: "Earthquake",
    //         magnitude: 7.0,
    //         timestamp: "21 January 2026 - 01:31 PM",
    //         longtitude: 121.05946518674459,
    //         latitude: 14.640802943995967,
    //     },
    // ];

    return (
        <div className="h-screen w-full">
            <Map
                center={[121.774, 12.8797]}
                zoom={5}
            >
                <MapController />
                {earthquake.map((earthquake: any) => (
                    <DisplayMark
                        key={earthquake.id}
                        id={earthquake.id}
                        city={earthquake.city}
                        label={earthquake.label}
                        magnitude={earthquake.magnitude}
                        longtitude={earthquake.longtitude}
                        latitude={earthquake.latitude}
                        timestamp={earthquake.timestamp}
                    />
                ))}
            </Map>
        </div>
    );
}

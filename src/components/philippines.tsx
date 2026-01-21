"use client";

import { useEffect, useState } from "react";
import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel, MarkerPopup, useMap } from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { RotateCcw, Mountain, Star, Clock, Navigation, ExternalLink, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

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
    const eartquake = [
        {
            id: 1,
            city: "Sultan Kudarat",
            label: "Earthquake",
            magnitude: 3.0,
            dateandtime: "21 January 2026 - 01:31 PM",
            lng: 124.3337268180007,
            lat: 6.478515589595117,

        },
        {
            id: 2,
            city: "Sultan Kudarat",
            label: "Earthquake",
            magnitude: 3.0,
            dateandtime: "21 January 2026 - 01:31 PM",
            lng: 124.63296678973343,
            lat: 8.495530398129562,
        },
        {
            id: 3,
            city: "Sultan Kudarat",
            label: "Earthquake",
            magnitude: 4.9,
            dateandtime: "21 January 2026 - 01:31 PM",
            lng: 123.31716750119328,
            lat: 12.387107761972818,
        },
        {
            id: 4,
            city: "Quezon City",
            label: "Earthquake",
            magnitude: 7.0,
            dateandtime: "21 January 2026 - 01:31 PM",
            lng: 121.05946518674459,
            lat: 14.640802943995967,
        },
    ];

    return (
        <div className="h-screen w-full">
            <Map
                center={[121.774, 12.8797]}
                zoom={5}
            >
                <MapController />
                {eartquake.map((eartquake) => (
                    <MapMarker key={eartquake.id} longitude={eartquake.lng} latitude={eartquake.lat}>
                        <MarkerContent>
                            <div className={cn("size-5 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform animate-pulse",
                                eartquake.magnitude <= 3.0 ? "bg-green-500" : eartquake.magnitude <= 6.0 && eartquake.magnitude >= 3.1 ? "bg-yellow-500" : "bg-rose-500"
                            )} />
                            <MarkerLabel position="bottom">{eartquake.label}</MarkerLabel>
                        </MarkerContent>
                        <MarkerPopup className="p-0 w-62">
                            <div className="relative h-32 overflow-hidden rounded-t-md">
                                <img
                                    src={"https://gelogia.com/wp-content/uploads/2024/10/earthquake-1080x599.jpg"}
                                    alt={eartquake.city}
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-2 p-3">
                                <div>
                                    <h3 className="font-semibold text-foreground leading-tight text-lg">
                                        {eartquake.city}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Activity className="size-3.5 fill-amber-400 text-amber-400" />
                                        <span className="font-medium">{eartquake.magnitude}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Clock className="size-3.5" />
                                    <span>{eartquake.dateandtime}</span>
                                </div>
                            </div>
                        </MarkerPopup>
                        <MapControls
                            position="bottom-right"
                            showZoom
                            showCompass
                            showLocate
                            showFullscreen
                        />
                    </MapMarker>
                ))}
            </Map>
        </div>
    );
}

import { MapControls, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from './ui/map'
import { Activity, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { EarthquakeDTO } from "@/types/earthquake"

function DisplayMark({ id, city, label, magnitude, timestamp, longtitude, latitude }: EarthquakeDTO) {
    if (!magnitude) return;
    return (
        <div key={id}>
            <MapMarker longitude={Number(longtitude)} latitude={Number(latitude)}>
                <MarkerContent>
                    <div className={cn("size-5 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform animate-pulse",
                        magnitude <= 3.0 ? "bg-green-500" : magnitude <= 6.0 && magnitude >= 3.1 ? "bg-yellow-500" : "bg-rose-500"
                    )} />
                    <MarkerLabel position="bottom">{label}</MarkerLabel>
                </MarkerContent>
                <MarkerPopup className="p-0 w-62">
                    <div className="relative h-32 overflow-hidden rounded-t-md">
                        <img
                            src={"https://gelogia.com/wp-content/uploads/2024/10/earthquake-1080x599.jpg"}
                            alt={city?.toString()}
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-2 p-3">
                        <div>
                            <h3 className="font-semibold text-foreground leading-tight text-lg">
                                {city}
                            </h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="flex items-center gap-1">
                                <Activity className="size-3.5 fill-amber-400 text-amber-400" />
                                <span className="font-medium">{magnitude}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="size-3.5" />
                            <span>{new Date(timestamp).toLocaleString()}</span>
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
        </div>
    )
}

export default DisplayMark
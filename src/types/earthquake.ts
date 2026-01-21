export interface EarthquakeDTO {
    id: number;
    city?: string | null;
    label?: string | null;
    magnitude?: number | null;
    longtitude?: string | null;
    latitude?: string | null;
    timestamp: Date;
}
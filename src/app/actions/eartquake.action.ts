"use server"
import { prisma } from "@/lib/prisma";

export async function PostEarthquake(formData: FormData) {
    const city = formData.get("city")?.toString();
    const magnitude = Number(formData.get("magnitude"));
    const latitude = formData.get("lat")?.toString();
    const longtitude = formData.get("lng")?.toString();

    if (!city || !magnitude || !longtitude || !latitude) return {
        success: false,
        message: "All fields are required"
    }
    await prisma.earthquake.create({
        data: {
            city: city,
            label: "Earthquake",
            magnitude: magnitude,
            latitude: latitude,
            longtitude: longtitude,
        }
    })

    return {
        success: true,
        message: "Added Successfully!"
    }
}

export async function GetEarthquake() {
    const earthquake = await prisma.earthquake.findMany()

    return earthquake.map(e => ({
        id: e.id,
        city: e.city,
        label: e.label,
        magnitude: e.magnitude,
        latitude: e.latitude,
        longtitude: e.longtitude,
        timestamp: e.timestamp,
    }))
}
"use server"
import { prisma } from "@/lib/prisma";

export async function PostEarthquake(formData: FormData) {
    const city = formData.get("city")?.toString();
    const magnitude = Number(formData.get("magnitude"));
    const latitude = formData.get("lat")?.toString();
    const longtitude = formData.get("lng")?.toString();

    await prisma.earthquake.create({
        data: {
            city: city,
            label: "Earthquake",
            magnitude: magnitude,
            latitude: latitude,
            longtitude: longtitude,
        }
    })
}
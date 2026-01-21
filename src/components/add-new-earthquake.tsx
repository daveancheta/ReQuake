"use client"
import { UseEarthquakeStore } from "@/app/store/use-earthquake-store"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddNewEarthquake() {
    const { handlePostMovie } = UseEarthquakeStore();
    const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        handlePostMovie(formData)
    }
    return (
        <Dialog open={true} modal={false}>
            <DialogContent className="sm:max-w-106.25">
                <form className="space-y-6" onSubmit={handlePost}>
                    <DialogHeader>
                        <DialogTitle>Add New Earthquake Record</DialogTitle>
                        <DialogDescription>
                            Enter the details of the earthquake event, including date, location, magnitude, and depth. Click “Save” to record the information in the system.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 grid-cols-2">
                        {/* City Name */}
                        <div className="grid gap-3">
                            <Label htmlFor="city">City Name</Label>
                            <Input id="city" name="city" placeholder="Quezon City" />
                        </div>

                        {/* Magnitude */}
                        <div className="grid gap-3">
                            <Label htmlFor="magnitude">Magnitude</Label>
                            <Input
                                id="magnitude"
                                name="magnitude"
                                type="number"
                                step="0.1"
                                placeholder="7.0"
                            />
                        </div>

                        {/* Latitude */}
                        <div className="grid gap-3">
                            <Label htmlFor="lat">Latitude</Label>
                            <Input
                                id="lat"
                                name="lat"
                                type="string"
                                placeholder="14.640802943995967"
                            />
                        </div>

                        {/* Longitude */}
                        <div className="grid gap-3">
                            <Label htmlFor="lng">Longitude</Label>
                            <Input
                                id="lng"
                                name="lng"
                                type="string"
                                placeholder="121.05946518674459"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

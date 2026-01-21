"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>{theme !== "light" ?
            <button className="cursor-pointer"
                onClick={() => setTheme('light')}>
                <Sun className="text-yellow-500" />
            </button> :
            <button className="cursor-pointer"
                onClick={() => setTheme('dark')}>
                <Moon className="text-gray-800" />
            </button>}
        </div>
    )
}
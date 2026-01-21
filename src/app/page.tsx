import { ModeToggle } from "@/components/mode-toggle";
import { Philippines } from "@/components/philippines";
import Image from "next/image";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <Philippines />
      <div className="fixed top-10 right-10">
        <ModeToggle />
      </div>
    </div>
  );
}

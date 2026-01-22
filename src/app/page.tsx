import { ModeToggle } from "@/components/mode-toggle";
import { Philippines } from "@/components/philippines";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <Philippines />
      <Badge variant="outline" className="fixed top-2 right-2">For Demo Purposes Only</Badge>
      <div className="fixed top-10 right-10">
        <ModeToggle />
      </div>
    </div>
  );
}

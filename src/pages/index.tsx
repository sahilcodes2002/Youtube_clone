import 'tailwindcss/tailwind.css'
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";

export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex">
        <LeftBar />      
        <VideoGrid />
      </div>
    </div>
  );
}

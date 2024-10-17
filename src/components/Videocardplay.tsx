import { useRouter } from "next/router";
import { useRef, useState } from "react";

export function Videocardplay() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const router = useRouter();
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 600); // 1 second delay
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push("/video/3");
      }}
    >
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl w-full"
        src="/videoH1.mp4"
        muted
        poster="/photo.png"
      />
    </div>
  );
}

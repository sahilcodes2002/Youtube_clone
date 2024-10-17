import { useRouter } from "next/router"
import type { Video} from "../videos"
import { Videocardplay } from "./Videocardplay";


export const Horizontal = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="mb-1 cursor-pointer grid grid-cols-12 pt-5 md:w-full " onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden col-span-5">
            <div>
                {/* <img src="/photo.png" /> */}
                <Videocardplay></Videocardplay>
            </div>
        </div>
        <div className="col-span-7 pl-2">
            <div className={"text-white-800 text-md font-medium pb-2"}>
                New Video | WEB development | Tailwind | React 
            </div>
            <div className={"text-gray-400 text-xs font-normal pb-1"}>
                {video.description}
            </div>
            <div className="flex">
                <div className={"text-gray-400 text-xs font-normal	pr-2	"}>
                    {video.viewCount} 
                </div>
                <div className={"text-gray-400 text-xs font-normal		"}>
                • {video.timestamp}
                </div>
            </div>
        </div>
    </div>
}
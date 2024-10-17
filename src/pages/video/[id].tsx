import { Appbar } from "@/components/Appbar";
import { Horizontal } from "@/components/Horizontal";
import { MainVideo } from "@/components/MainVideo";
import { useRouter } from "next/router";
import { VIDEOS } from "@/videos";
export default function VideoPage(){
    const router = useRouter();
    let x = router.query;
    return <div className="">
        <Appbar></Appbar>
        <div className="overflow-y-auto h-screen block w-full h-full pl-7 md:flex ">
            <div className="w-full">
                <MainVideo></MainVideo>
            </div>
            <div className=" ml-1 w-8/12">
                {VIDEOS.map(x=> 
                <Horizontal video={x}></Horizontal>
                )}
            </div>
        </div>
    </div>
}
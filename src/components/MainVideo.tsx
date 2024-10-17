import { VideoFooter } from "./VideoFooter"


export const MainVideo = ()=>{
    return <div className="w-full rounded-md pr-4 pt-5">
        <div  className="w-full rounded-md">
            <video className="rounded-xl" width={"100%"} controls src="/videoH.mp4" autoPlay muted/>
        </div>
        <VideoFooter></VideoFooter>
        
    </div>
}
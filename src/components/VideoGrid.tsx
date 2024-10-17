import { VideoCard } from "./VideoCard"

const Videos=[
    {
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    },{
        title:"Cohort 2.0 week-8 Tailwind",
        author:"Harkirat...",
        views:"12k",
        timeStamp:"3 days ago",
        thumb:"/harkirat.jpg", 
        vid:"/photo.png"
    }

]

export const VideoGrid=()=>{
    return <div className="overflow-y-auto h-screen h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Videos.map(x=>{
            return<div>
                <VideoCard title={x.title}
                author={x.author}
                views={x.views}
                timeStamp={x.timeStamp}
                thumb={x.thumb}
                vid={x.vid}></VideoCard>
            </div>
        })}
    </div>
}
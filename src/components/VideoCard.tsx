import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'
import { Videocardplay } from './Videocardplay';
export function VideoCard(props:any){
    const router = useRouter();
    
    return <div className='m-2 cursor-pointer' onClick={()=>{
        router.push("video/1");
    }}>

        <Videocardplay></Videocardplay>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2 py-3">
                <img className="rounded-full h-10 w-10  " src={props.thumb}></img>
            </div>
            <div className="col-span-10 pl-2 ">
                <div className='text-base '>
                    {props.title} 
        
                </div> 
                <div className='text-sm text-gray-400 leading-4'>
                    {props.author}
                </div>
                <div className='text-sm text-gray-400 '>
                    {props.views} | {props.timeStamp}
                </div>
                
            </div>
        </div>
    </div>
}
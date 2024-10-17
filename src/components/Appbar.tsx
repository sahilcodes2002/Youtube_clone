import { Searchbar } from "./Searchbar"
import { Signin } from "./Signin"
import {useRouter} from "next/router"
export const Appbar = ()=>{
    const router = useRouter();
    return <div className="flex justify-between ">
        <div className="pt-3 pl-7 flex-1 md:flex-none">
            <button onClick={()=>{
                router.push("/")
            }}>
            <img className=" h-6" src="/logo.png"></img>
            </button>
        </div>
        
        <div className="p-2">
            <Searchbar></Searchbar>
        </div>
        <div className="pt-3 pr-3">
            <Signin></Signin>
        </div>


    </div>
}
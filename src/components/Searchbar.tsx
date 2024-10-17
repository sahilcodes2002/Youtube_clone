export const Searchbar = ()=>{
    return <div>       
            <div className="hidden md:flex view w-auto flex border border-slate-700 border-grey-400 rounded-3xl p-1 pl-3 text-sm pr-2 md:w-96 lg:w-100">

                <input id="default-search" className="w-full bg-stone-950 border-none outline-none" placeholder="Search" required />
                <button type="submit" className="bg-stone-950 py-2 px-4 text-sm font-bold text-gray-400">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
                </button>
            </div>

            <div className=" md:hidden lg:hidden pt-1">
                <button type="submit" className="bg-stone-950 py-2 px-4 text-sm font-bold text-gray-400">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
                </button>
            </div>
    </div>
}
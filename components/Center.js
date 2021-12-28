import { useSession } from "next-auth/react"
import {ChevronDownIcon} from "@heroicons/react/outline"
import { signOut } from "next-auth/react";

function Center() {

    const {data:session}=useSession();
    return (
        <div className="flex-grow">
           <header className="absolute top-5 right-10" onClick={()=>signOut()}>
               <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-75 cursor-pointer rounded-full p-1 pr-2 text-white">
                   <img className="rounded-full h-10 w-10" src={session?.user?.image} alt="" />
               <h2>{session?.user?.name}</h2>
               <ChevronDownIcon className="h-5 w-5"/>
               </div>
           </header>

           <section className={`flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white padding-8`}>
        <h1>hello</h1>
           </section>
        </div>
    )
}

export default Center

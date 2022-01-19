import React from "react";
import Data from "../comp/data";
import Nav from "../comp/nav";

const All=()=>{
    return(
        <div>        
        <Nav/>
        <div class="grid grid-cols-4">
            {
                Data.map(datum=>
                    <div class="py-10">
                        <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                            <div class="flex items-center justify-between">

                                <span class="text-gray-400 text-sm">2d ago</span>
                                <div class="gap-3 flex justify-evenly">
                                    <button class="text-emerald-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                    <button class="text-emerald-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heartbeat" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572"></path>
                                            <path d="M3 13h2l2 3l2 -6l1 3h3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                            <div class="mt-8 ">
                                <h2 class="text-white font-bold text-2xl tracking-wide">
                                    {datum.text}  
                                </h2>
                            </div>
                            <p class="text-emerald-400 font-semibold mt-2.5" >
                                {datum.author}
                            </p>

                            <div class="h-1 w-full bg-black mt-8 rounded-full">
                                <div class="h-1 rounded-full  bg-yellow-500 "></div>
                            </div>
                            <div class="mt-3 text-white text-sm">
                                <span class="text-yellow-400 font-bold text-1xl tracking-wide">Likes </span>
                                <span class="text-teal-400 font-bold text-1xl tracking-wide">: </span>
                                <span class="text-orange-100">1306</span>
                            </div>
                            <div class="mt-3 text-white text-sm">

                                <div class="text-yellow-400 font-bold justify-evenly flex">
                                    <button class="rounded-2xl bg-teal-500  text-black px-3 py-1">
                                        Religion
                                    </button>

                                    <button class="rounded-2xl bg-teal-500  text-black px-3 py-1">
                                        Novel
                                    </button>
                                </div>



                            </div>

                        </section>
                    </div>

                    )
            }
        </div>
        </div>
)
}
export default All;
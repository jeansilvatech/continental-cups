"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PageEuroCopa = ()=>{
    const [dataCup, setDataCup] = useState<any>(null);

    useEffect(()=>{
        const apiCup = async ()=>{
            try{
                const response = await fetch("data/data.json");
                const jsonData = await response.json();
                setDataCup(jsonData)

            }catch(err){
                console.log(err)
            }
        }
        apiCup()
    }, [])
    return(
        <div className="bg-euro w-full  p-5 flex flex-wrap justify-center items-start">
            {
                dataCup?(
                    dataCup[0]?.groups?.map((item:any, index:number)=>(
                        <div key={index} className="bg-[#E9E9E9] lg:w-1/3 w-full lg:h-1/3 h-1/4 flex justify-between shadow-md rounded-lg m-2 relative">
                            <div className="w-20 rounded-l-md bg-euro1 flex justify-center items-center">
                                <span className="uppercase text-2xl font-semibold text-white">
                                {item.group}
                                </span>
                            </div>
                            <div className="w-full flex justify-center items-center flex-wrap">
                            <div className="flex flex-wrap justify-center lg:w-1/2 w-3/4">
                            {
                                
                                item.selections?.map((selection:any, index:number)=>(
                                    <div key={index} className="m-3 flex justify-center items-center flex-col">
                                        <Image className="bg-[#D9D9D9] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" src={`/assets/euro/${selection.flagUrl}.svg`} width={90} height={90} alt=""/>
                                        <span className="uppercase text-xs mt-1 font-medium text-euro">{selection.name}</span>
                                    </div>
                                ))
                            }
                            </div>
                            </div>
                        </div>
                    ))

                ):(
                    <p>Carregando...</p>
                )
            }
        </div>
    )
}
export default PageEuroCopa;
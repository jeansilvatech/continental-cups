"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";

const PageEuroCopa = ()=>{
    const [dataCup, setDataCup] = useState<any>(null);
    const [dataPhases, setDataPhases] = useState<any>(null);

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
    useEffect(()=>{
        const apiPhases = async ()=>{
            try{
                const response = await fetch("data/phases.json");
                const jsonData = await response.json();
                setDataPhases(jsonData)

            }catch(err){
                console.log(err)
            }
        }
        apiPhases()
    }, [])
    
    return(
        <div className="bg-euro w-full  p-5 flex flex-wrap justify-center items-start">
            <div className="w-full h-auto flex flex-wrap justify-center items-start">
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
            <div className="w-full flex justify-center items-center flex-wrap mt-3">
            {
                dataPhases?(
                    dataPhases[1].phases.map((item:any, index:number)=>(
                        <div key={index} className="bg-euro1 w-[68%] my-2 flex justify-evenly items-center flex-wrap shadow-md rounded-lg">
                            <div className="w-full flex justify-center items-center bg-[#E9E9E9] py-3 rounded-t-lg">
                                <span className="uppercase font-semibold text-euro text-xl">{item.phase}</span>
                            </div>
                            {
                                item.matches.map((match:any, index:number)=>(
                                    <div key={index} className="w-1/3 flex justify-center items-center bg-[#E9E9E9] py-3 px-2 my-5 mx-5 shadow-md rounded-lg">
                                        <Image className="bg-[#D9D9D9] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" src={`/assets/america/${match.flagUrl1}.svg`} width={90} height={90} alt=""/>
                                        <Close className="text-euro mx-5"/>
                                        <Image className="bg-[#D9D9D9] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" src={`/assets/america/${match.flagUrl2}.svg`} width={90} height={90} alt=""/>
                                    </div>
                                ))
                            }

                        </div>
                    ))
                ):(
                    ''
                )
            }
        </div>
        </div>
    )
}
export default PageEuroCopa;
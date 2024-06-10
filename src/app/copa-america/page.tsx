"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import logoCopaAmerica from '../../../public/assets/america.svg'
import TitleCardGroup from "@/components/TitleCardGroup";
import SelectionsOfGroup from "@/components/SelectionsOfGroup";
import TitleCardPhase from "@/components/TitleCardPhase";
import PhaseConfrontation from "@/components/PhaseConfrontation";
import Loading from "@/components/LoadingPage";

const PageCopaAmerica = ()=>{
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
        <div className="bg-america p-5 flex justify-center items-center flex-col">
            <div className="m-3">
                <Image src={logoCopaAmerica} width={100} height={100} alt=""/>
            </div>
        <div className="w-full h-auto flex flex-wrap justify-center items-start">
            {
                dataCup?(
                    dataCup[1]?.groups?.map((item:any, index:number)=>(
                        <div key={index} className="bg-[#E9E9E9] lg:w-1/3 w-full lg:h-1/3 h-1/4 flex justify-between shadow-md rounded-lg m-2 relative animate-enter">
                            <TitleCardGroup title={item.group} color="america1"/>
                            <div className="w-full flex justify-center items-center flex-wrap">
                            <div className="flex flex-wrap justify-center lg:w-1/2 w-3/4">
                            {
                                
                                item.selections?.map((selection:any, index:number)=>(
                                    <SelectionsOfGroup key={index} name={selection.name} flag={selection.flagUrl} originImage="america" color="text-america"/>   
                                ))
                            }
                            </div>
                            </div>
                        </div>
                    ))

                ):(
                    <Loading color="america" cupLogo="america"/>
                )
            }
        </div>
        <div className="w-full flex justify-center items-center flex-wrap mt-3">
            {
                dataPhases?(
                    dataPhases[0].phases.map((item:any, index:number)=>(
                        <div key={index} className="bg-america1 lg:w-[68%] w-full m-2 flex justify-evenly items-center flex-wrap shadow-md rounded-lg animate-enter">
                            <TitleCardPhase title={item.phase} color="america"/>
                            {
                                item.matches.map((match:any, index:number)=>(
                                    <PhaseConfrontation key={index} selection1={match.name1} gols1={match.gols1} flag1={match.flagUrl1} selection2={match.name2} gols2={match.gols2} flag2={match.flagUrl2} color="text-america" originImage="america"/>
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
export default PageCopaAmerica;
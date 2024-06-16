import React from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";

interface PhaseConfrotationProps {
    selection1: string;
    gols1: string;
    flag1: string;
    selection2: string;
    gols2: string;
    flag2: string;
    color: string;
    colorBorderMatchNumber: "border-euro"| "border-america";
    originImage: "euro"| "america";
    numberConfrontation: number | string;
    roundNumber: number;
}
const PhaseConfrontation = ({selection1, gols1, flag1, selection2, gols2, flag2, color, colorBorderMatchNumber, originImage, numberConfrontation, roundNumber}:PhaseConfrotationProps)=>{
    return(
        <>
        {
            roundNumber?(
                    <div className="w-full py-3 flex justify-center items-center flex-col">
                        <h3 className="uppercase text-white font-semibold">{`${roundNumber}ª rodada`}</h3>
                        <div className="w-1/2 h-px bg-white rounded-[50%] my-2"></div>                       
                    </div>
            ):(
                ''
            )
        }

        <div className={`lg:w-1/3 w-4/5 flex justify-center items-center bg-card py-3 px-2 lg:m-5 m-2 shadow-md rounded-lg uppercase relative hover:shadow-2xl`}>
            <span className={`absolute -top-2 bg-card flex justify-center items-center text-xs font-semibold w-6 h-6 ${colorBorderMatchNumber} border-2 rounded-full ${color}`}>{numberConfrontation}</span>
            <div  className="flex flex-1 justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10" src={`/assets/${originImage}/${flag1}.svg`} width={50} height={50} alt=""/>
                <span className={`text-xs ${color} font-semibold mt-1`}>{selection1}</span>
            </div>
            <div className="flex justify-center items-center">
            <span className={`font-bold text-xl h-full ${color}`}>{gols1}</span>
            <Close sx={{fontSize:40}} className={`${color} mx-5`}/>
            <span className={`font-bold text-xl ${color}`}>{gols2}</span>
            </div>
            <div className="flex flex-1 justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10" src={`/assets/${originImage}/${flag2}.svg`} width={50} height={50} alt=""/>
                <span className={`text-xs ${color} font-semibold mt-1`}>{selection2}</span>
            </div>
        </div>
        </>
    )
}

export default PhaseConfrontation;
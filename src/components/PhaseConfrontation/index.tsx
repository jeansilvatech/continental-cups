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
    originImage: "euro"| "america";
    numberConfrontation: number | string;
}
const PhaseConfrontation = ({selection1, gols1, flag1, selection2, gols2, flag2, color, originImage, numberConfrontation}:PhaseConfrotationProps)=>{
    return(
        <div className={`lg:w-1/3 w-4/5 flex justify-center items-center bg-[#E9E9E9] py-3 px-2 lg:m-5 m-2 shadow-md rounded-lg uppercase relative`}>
            <div  className="flex flex-1 justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10" src={`/assets/${originImage}/${flag1}.svg`} width={50} height={50} alt=""/>
                <span className={`text-xs ${color} font-semibold mt-1`}>{selection1}</span>
            </div>
            <div>
            <span className={`font-bold text-xl ${color}`}>{gols1}</span>
            <Close sx={{fontSize:40}} className={`${color} mx-5`}/>
            <span className={`font-bold text-xl ${color}`}>{gols2}</span>
            </div>
            <div className="flex flex-1 justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10" src={`/assets/${originImage}/${flag2}.svg`} width={50} height={50} alt=""/>
                <span className={`text-xs ${color} font-semibold mt-1`}>{selection2}</span>
            </div>
            <span className={`absolute -top-3 bg-[#E9E9E9] text-xs font-bold px-3 py-1 rounded-t-full ${color}`}>{numberConfrontation}</span>
        </div>
    )
}

export default PhaseConfrontation;
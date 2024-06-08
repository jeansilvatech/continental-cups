import React from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";

interface PhaseConfrotationProps {
    selection1: string;
    flag1: string;
    selection2: string;
    flag2: string;
    color: "euro" | "america";
    originImage: "euro"| "america";
}
const PhaseConfrontation = ({selection1, flag1, selection2, flag2, color, originImage}:PhaseConfrotationProps)=>{
    return(
        <div className={`w-1/3 flex justify-center items-center bg-[#E9E9E9] text-${color} py-3 px-2 my-5 mx-5 shadow-md rounded-lg`}>
            <div  className="flex justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" src={`/assets/${originImage}/${flag1}.svg`} width={90} height={90} alt=""/>
                <span className="text-xs font-semibold mt-1">{selection1}</span>
            </div>
            <Close className=" mx-5"/>
            <div className="flex justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" src={`/assets/${originImage}/${flag2}.svg`} width={90} height={90} alt=""/>
                <span className="text-xs font-semibold mt-1">{selection2}</span>
            </div>
        </div>
    )
}

export default PhaseConfrontation;
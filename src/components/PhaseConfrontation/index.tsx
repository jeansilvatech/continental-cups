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
        <div className={`lg:w-1/3 w-4/5 flex justify-center items-center bg-[#E9E9E9] text-${color} py-3 px-2 lg:m-5 m-2 shadow-md rounded-lg uppercase`}>
            <div  className="flex flex-1 justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10" src={`/assets/${originImage}/${flag1}.svg`} width={50} height={50} alt=""/>
                <span className="lg:text-sm text-xs font-semibold mt-1">{selection1}</span>
            </div>
            <Close className=" mx-5"/>
            <div className="flex flex-1 justify-center items-center flex-col">
                <Image className="bg-[#D9D9D9] rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10" src={`/assets/${originImage}/${flag2}.svg`} width={50} height={50} alt=""/>
                <span className="lg:text-sm text-xs font-semibold mt-1">{selection2}</span>
            </div>
        </div>
    )
}

export default PhaseConfrontation;
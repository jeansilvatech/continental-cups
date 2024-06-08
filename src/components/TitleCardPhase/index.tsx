import React from "react";
import { TitleCardProps } from "../TitleCardGroup";

const TitleCardPhase = ({title, color}:TitleCardProps)=>{
    return(
        <div className="w-full flex justify-center items-center bg-[#E9E9E9] py-3 rounded-t-lg">
            <span className={`uppercase font-semibold text-${color} text-xl`}>{title}</span>
        </div>
    )
}
export default TitleCardPhase;
import React from "react";
import { TitleCardProps } from "../TitleCardGroup";

const TitleCardPhase = ({title, color}:TitleCardProps)=>{
    return(
        <div className="w-full flex justify-center items-center bg-card py-3 rounded-t-lg mb-2">
            <span className={`uppercase font-semibold text-${color} text-xl`}>{title}</span>
        </div>
    )
}
export default TitleCardPhase;
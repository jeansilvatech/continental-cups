import React from "react";

export interface TitleCardProps {
    title:string;
    color:"america"| "euro"| "america1" | "euro1";
}
const TitleCardGroup = ({title, color}:TitleCardProps)=>{
    return(
        <div className={`w-20 bg-${color} rounded-l-md flex justify-center items-center`}>
            <span className="uppercase text-2xl font-semibold text-white">
                {title}
            </span>
        </div>
    )
}
export default TitleCardGroup;
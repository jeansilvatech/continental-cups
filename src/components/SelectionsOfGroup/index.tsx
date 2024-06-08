import React from "react";
import Image from "next/image";

interface SelectionsOfGroupProps{
    name:string;
    flag:string;
    color: "america"|"euro";
    originImage: "america"| "euro";
}
const SelectionsOfGroup = ({name, flag, color, originImage}:SelectionsOfGroupProps)=>{
    return(
        <div className="m-3 flex justify-center items-center flex-col">
            <Image className="bg-[#D9D9D9] rounded-full lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" src={`/assets/${originImage}/${flag}.svg`} width={90} height={90} alt=""/>
            <span className={`uppercase text-xs mt-1 font-medium text-${color}`}>{name}</span>
        </div>
    )
}

export default SelectionsOfGroup;
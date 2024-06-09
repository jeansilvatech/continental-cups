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
            <Image className="bg-[#D9D9D9] rounded-full lg:w-[70px] lg:h-[70px] w-10 h-10" src={`/assets/${originImage}/${flag}.svg`} width={70} height={70} alt={`bandeira: ${name}`}/>
            <span className={`uppercase text-xs text-center mt-1 font-semibold whitespace-nowrap text-${color}`}>{name}</span>
        </div>
    )
}

export default SelectionsOfGroup;
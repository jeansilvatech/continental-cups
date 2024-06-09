import React from "react";
import Image from "next/image";

interface LoadingProps{
    cupLogo: string;
    color: string;
}
const Loading = ({cupLogo, color}:LoadingProps)=>{
    return(
        <div className={`fixed w-full h-full inset-0 flex justify-center items-center bg-${color}`}>
            <Image className="" src={`/assets/${cupLogo}.svg`} width={80} height={80} alt=""/>
        </div>
    )
}
export default Loading;
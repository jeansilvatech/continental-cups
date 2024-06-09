"use client"
import React from "react";
import logoCopaAmerica from '../../../public/assets/america.svg'
import logoEuroCopa from '../../../public/assets/eurocopa.svg'
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = ()=>{
    const router = useRouter();
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-wrap">
            <div onClick={()=>{router.push('copa-america')}} className="lg:w-1/2 lg:h-full w-full h-1/2 bg-america flex justify-center items-center cursor-pointer relative
            before:content-[''] before:absolute before:w-full before:h-1/2 before:top-0 before:left-0 before:bg-gradient-to-b from-america to-transparent
            hover:bg-white
            ">
                <Image className="object-contain object-center z-50" src={logoCopaAmerica} width={200} height={200} alt=""/>
            </div>
            <div onClick={()=>{router.push('eurocopa')}} className="lg:w-1/2 lg:h-full w-full h-1/2 bg-euro flex justify-center items-center cursor-pointer relative
            before:content-[''] before:absolute before:w-full before:h-1/2 before:bottom-0 before:left-0 before:bg-gradient-to-t from-euro
            hover:bg-white">
                <Image className="object-contain object-center z-50" src={logoEuroCopa} width={160} height={200} alt=""/>
            </div>
        </div>
    )
}
export default HomePage;
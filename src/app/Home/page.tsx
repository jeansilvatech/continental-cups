"use client"
import React from "react";
import logoCopaAmerica from '../../../public/assets/Copa-America_logo.svg'
import logoEuroCopa from '../../../public/assets/Eurocopa_logo.svg'
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = ()=>{
    const router = useRouter();
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-wrap">
            <div onClick={()=>{router.push('copa-america')}} className="lg:w-1/2 lg:h-full w-full h-1/2 bg-america flex justify-center items-center cursor-pointer hover:scale-95">
                <Image className="object-contain object-center" src={logoCopaAmerica} width={200} height={200} alt=""/>
            </div>
            <div onClick={()=>{router.push('eurocopa')}} className="lg:w-1/2 lg:h-full w-full h-1/2 bg-euro flex justify-center items-center cursor-pointer hover:scale-95">
                <Image className="object-contain object-center" src={logoEuroCopa} width={160} height={200} alt=""/>
            </div>
        </div>
    )
}
export default HomePage;
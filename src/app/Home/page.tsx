import React from "react";
import logoCopaAmerica from '../../../public/assets/Copa-America_logo.svg'
import logoEuroCopa from '../../../public/assets/Eurocopa_logo.svg'
import Image from "next/image";

const HomePage = ()=>{
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-wrap">
            <div className="lg:w-1/2 lg:h-full w-full h-1/2 bg-america flex justify-center items-center">
                <Image className="object-contain object-center hover:scale-105 cursor-pointer" src={logoCopaAmerica} width={200} height={200} alt=""/>
            </div>
            <div className="lg:w-1/2 lg:h-full w-full h-1/2 bg-euro flex justify-center items-center">
                <Image className="object-contain object-center hover:scale-105 cursor-pointer" src={logoEuroCopa} width={160} height={200} alt=""/>
            </div>
        </div>
    )
}
export default HomePage;
"use client"
import React from "react";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/navigation";
interface BtnBackToHomeProps{
    color: string;
}
const BtnBackToHome = ({color}:BtnBackToHomeProps)=>{
    const router = useRouter();
    return(
        <div onClick={()=>{router.push('/')}} className={`fixed top-0 right-0 lg:p-3 p-2 rounded-bl-md bg-${color} cursor-pointer hover:opacity-50`} title="Voltar">
            <Close sx={{ color: "#ffffff"}}/>
        </div>
    )
}
export default BtnBackToHome;
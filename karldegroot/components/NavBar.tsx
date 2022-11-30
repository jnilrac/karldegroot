'use client';
import React, { useState, ReactElement } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import Link from "next/link";
import { usePathname } from "next/navigation";
import 'material-icons/iconfont/material-icons.css';


type navLink = {
title: string;
url: string;
key: string;

};
type menu = string;

interface props {
    navLinks: Array<navLink>;
    
   }

export const NavBar = ({navLinks}: props) => {
    
    const [ tabletMenu, setTabletMenu ] = useState("hidden");
    const [ phoneMenu, setPhoneMenu ] = useState("hidden");
    
    
    const pathname =  usePathname();

    const menuHandler = (menu:string) : void => {
        if(menu === "tablet") {
            if(tabletMenu === "hidden"){
                setTabletMenu('');
               
                
            } else {
                //setTabletMenu('hidden');
                alert("hide me!")
            }
        } else {
            if(phoneMenu === "hidden"){
                setPhoneMenu('');
            } else {
                setPhoneMenu("hidden");
            
            }
        }
    }

    const getLinks = () : Array<ReactElement> => {
        const [ selected, setSelected ] = useState(navLinks);

       
        return navLinks.map((obj, index) : ReactElement=> {
                if(obj.url === pathname && pathname !== "/") {
                    return <Link key={obj.key} href={obj.url}><span className="text-pink-kd">{obj.title}</span></Link>;  
                } else {
                    return <Link key={obj.key} href={obj.url}><span>{obj.title}</span></Link>;  
                }
                
            })
        
     
    }
    
    const getPhoneLinks = () : Array<ReactElement> => {
       
        return navLinks.map((obj) : ReactElement=> {
                return <Link onClick={()=> setPhoneMenu('hidden')} key={obj.key} href={obj.url}>{obj.title}</Link>;  
         })
    
    }

    return(
        <>
        {/* Desktop Nav*/}

            <div className="hidden space-x-10  lg:flex w-full h-20 pt-4 justify-start z-20 pl-20">
                <div className="basis-4/12 flex pb-3">
                    <Link href={`/`}><h1 className="text-4xl font-julius-sans-one text-white">Karl de Groot</h1></Link>
                    
                </div>
                <div className="space-x-5 font-semibold px-2 mt-3 flex basis-3/12 text-white">
                    {getLinks()}
                </div>
         
            </div>


            


            {/* mobile Nav*/}
    
            <div className="lg:hidden lg:hidden w-full flex pt-5 pl-3 h-20  relative">
                <div className="basis-9/12" >
                <Link href={`/`}><h1 className="text-2xl md:text-4xl font-julius-sans-one text-white">Karl de Groot</h1></Link>
                </div>
                <div className="basis-3/12  h-7 flex justify-end pr-5 relative">
                    <div onClick={() => {menuHandler('phone')}} className="border-2 border-white w-8 flex justify-center absolute mt-1">
                        <span className="material-icons-outlined text-white">menu</span>
                    </div> 

                    <div className={`${phoneMenu} border-2 border-white w-8 flex justify-center absolute mt-1`}>
                            <span className="material-icons-outlined text-white">menu</span>
                    </div> 

                 
                </div>
                
                <OutsideClickHandler onOutsideClick={() => setPhoneMenu('hidden')} >
                    <div className={`${phoneMenu} w-10/11 h-screen bg-footer border-pink-kd border-2 absolute  bg-contain right-2 left-2 bottom-0 top-14  md:top-20 rounded py-10 z-20 `}>
                        

                            <div className="h-4/6 flex justify-center space-y-8">
                                <div className="self-center">
                                    <div className="text-center space-y-8 text-blue-4 text-3xl font-bold flex flex-col text-white">
                                        {getPhoneLinks()}
                                    </div>                               
                                </div>
                            
                            
                            </div>
                    </div>
                </OutsideClickHandler>

                
            </div>
        </>
        
    )
}
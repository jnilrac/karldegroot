"use client"
import React, { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
//import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
//const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface Props {
    url: string;
}

 export const MusicPlayer = ({url}: Props): ReactElement =>{
    const [player, setPlayer] = useState<ReactElement | null>(null)

    useEffect(() =>{
        setPlayer(
            <>
            <div className='flex justify-center'>
                <div className='flex w-64 md:w-full md:h-72'>
                    <ReactPlayer color='#7F1C55' width="100%" height="100%" url={url} />
                </div> 
            </div>
             
            </>
       
        )
    }, [])
   return (
    <>
        {player}
    </>
    
   )
}
"use client"
import React, { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
//import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
//const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
import { MusicPlayer } from './MusicPlayer';

interface Props {
    url: string;
}

 export const MusicLister = ({url}: Props): ReactElement =>{
    const [player, setPlayer] = useState<ReactElement | null>(null)

    useEffect(() =>{
        setPlayer(
            <>
            <div className='flex justify-center h-60 w-60 border-4 border-pink-kd md:w-full md:h-80'>
                <ReactPlayer color='#7F1C55' height="100%" width="100%"  url={url} />
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
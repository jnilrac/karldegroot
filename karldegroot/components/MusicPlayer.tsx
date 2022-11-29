"use client"
import { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
//import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
//const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;


 export const MusicPlayer = (): ReactElement =>{
    const [player, setPlayer] = useState<ReactElement | null>(null)

    useEffect(() =>{
        setPlayer(
            <>
            <div className='hidden xl:grid'>
                <ReactPlayer color='#7F1C55' width="600px" url="https://soundcloud.com/karl-de-groot/star-crossed-lovers" />
            </div>
            <div className='hidden lg:grid xl:hidden'>
                <ReactPlayer color='#7F1C55' width="400px" height="300px" url="https://soundcloud.com/karl-de-groot/star-crossed-lovers" />
            </div>
            <div className='hidden md:grid  lg:hidden'>
                <ReactPlayer color='#7F1C55' width="250px" height="200px" url="https://soundcloud.com/karl-de-groot/star-crossed-lovers" />
            </div>
            <div className='md:hidden'>
                <ReactPlayer color='#7F1C55' width="250px" height="200px" url="https://soundcloud.com/karl-de-groot/star-crossed-lovers" />
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
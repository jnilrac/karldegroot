import React from 'react';
import Link from 'next/link';

interface Props {
 
}



export const Footer = ({
  ...props
}: Props) => {
const copyrightDate =new Date().getFullYear();

  return (
    <>
        <div className='flex flex-col'>
            <div className='flex bg-black justify-center h-40  pt-10 space-x-2 px-2 md:space-x-8'>
                <Link href={"/#"} >
                    <button>
                        <img className='scale-75 md:scale-100' src="assets/MessengerLogo.png" alt="facebook messenger logo" />
                    </button>                  
                </Link>
                <Link href={"/#"} >
                    <button>
                        <img className='scale-75 md:scale-100' src="assets/InstaLogo.png" alt="instagram logo" />
                    </button>                
                </Link>
                <Link href={"/#"} >
                    <button>
                        <img className='scale-75 md:scale-100' src="assets/TiktokLogo.png" alt="tiktok logo" />
                    </button>                
                </Link>
                <Link href={"/#"} >
                    <button>
                        <img className='scale-75 md:scale-100 md:mt-2' src="assets/TwitterLogo.png" alt="twitter logo" />
                    </button>                 
                </Link>
                <Link href={"/#"} >
                    <button >
                      <img className='scale-75 md:scale-100 md:mt-1' src="assets/YouTubeLogo.png" alt="youtube logo" />
                    </button>                
                </Link>    
            </div>
            
            <div className="flex justify-center h-24 text-white bg-footer">
                    <span className="flex flex-col justify-center text-sm md:text-base">© Copyright {copyrightDate} Karl de Groot</span>
            </div>
            
        </div>
    </>
  );
};

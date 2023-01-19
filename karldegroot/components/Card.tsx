import React from 'react';
import Link from 'next/link';
import parse from "html-react-parser";
import DOMPurify from "dompurify";

interface Props {
 imgUrl: string;
 title: string;
 text: string;
 linkUrl: string;
 key: string;
}

export const Card = ({
    imgUrl,
    title,
    text,
    linkUrl
}: Props) => {
    const reg1 = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    const newText = text.replace(reg1,"");
    const excerpt = newText.slice(0,100).concat('...')
  return (
    <>
        <Link href={linkUrl}>
            <button className='w-card h-card border-8 border-pink-kd rounded-3xl overflow-clip '>
                <div className='object-fill h-44 overflow-clip'>
                    <img src={imgUrl} />
                </div>
                <div className='border-t-pink-kd border-t-8 p-2 bg-black text-center h-full'>
                    <div  className='text-white text-xl'>
                        {title}
                    </div>
                    <div className='text-white text-sm'>
                        {excerpt}
                    </div>
                </div>
            </button>
        </Link>
      
    </>
  );
};

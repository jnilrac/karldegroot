import React from 'react';
import Link from 'next/link';

interface Props {
 label: string;
 url: string;
}


export const Button = ({
    label,
    url,
  ...props
}: Props) => {

  return (
    <Link href={url}>
      <button
        type="button"
        className={`h-fit w-button rounded-lg border-4 border-pink-kd text-white font-semibold text-center py-1`}
      >
        {label}
      </button>
    </Link>
   
  );
};

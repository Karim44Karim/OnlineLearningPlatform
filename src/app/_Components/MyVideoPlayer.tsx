"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

export default function MyVideoPlayer({url, thumbnail}:{url: string, thumbnail: StaticImageData}) {
  const [isPlayed, setIsPlayed] = useState <boolean>(false);
  const autoplayUrl = url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  return (
    <>
<div className='z-30 top-2'>
        {isPlayed ? (
        <iframe
          src={autoplayUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='w-full h-auto aspect-video'
        ></iframe>
      ) : (
        <Image src={thumbnail} alt="thumbnail" onClick={() => setIsPlayed(true)} className='cursor-pointer aspect-video object-cover object-cente rounded-sm w-full h-auto'></Image>
      )}
</div>
    </>
  );
}

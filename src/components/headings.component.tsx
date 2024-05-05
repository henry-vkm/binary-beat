import React from 'react';
import { Play } from 'next/font/google';

const play = Play({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-play',
});

export const H1 = ({ children }) => {
  return (
    <h1 className={`${play.className} text-[60px] leading-[100%] font-bold`}>{ children }</h1>
  )
}

export const H2 = ({ children }) => {
  return (
    <h1 className={`${play.className} text-[48px] leading-[100%] font-bold`}>{ children }</h1>
  )
}

export const H3 = ({ children }) => {
  return (
    <h1 className={`${play.className} text-[35px] leading-[100%] font-normal`}>{ children }</h1>
  )
}


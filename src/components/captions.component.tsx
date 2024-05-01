import React from 'react'

export const Cap1 = ({ children }) => {
  return (
    <p className="font-bold text-[25px] tracking-[2.5px] uppercase">{ children }</p>
  )
}

export const Cap2 = ({ children }) => {
  return (
    <p className="font-bold text-[60px] tracking-[10px] uppercase">{ children }</p>
  )
}

export const LinkText = ({ children }) => {
  return (
    <a className="text-[18px] underline underline-offset-4 font-semibold cursor-pointer">{ children }</a>
  )
}
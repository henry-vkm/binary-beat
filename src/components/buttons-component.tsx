import React from 'react'

 export const PrimaryButton = ({ children }) => {
  return (
    <button className="px-[30px] py-[15px] rounded-[3px] bg-[#EDE6DF] text-[#091D26] font-bold text-[18px]">{ children }</button>
  )
}

export const TransparentButton = ({ children }) => {
  return (
    <button className="px-[30px] py-[12px] bg-transparent text-[#091D26] font-bold text-[18px] border-[#091d26] border-[2.5px] rounded-[3px]">{ children }</button>
  )
}

export const SecondaryButton = ({ children }) => {
  return (
    <button className="px-[35px] py-[10px] rounded-[3px] bg-[#091d26] text-[#EDE6DF] font-semibold text-[18px]">{ children }</button>
  )
}
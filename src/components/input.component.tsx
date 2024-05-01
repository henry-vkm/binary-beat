import React from 'react';
import { SecondaryButton } from './buttons-component';

const Input = ({ placeholder }) => {
  return (
    <input placeholder={placeholder} className="outline-none w-[330px] px-[20px] py-[10px] border-[#BBC8D4] border-[3px] rounded-[3px] text-[16px] text-[#BBC8d4] focus:border-[#8A98A5]"/>
  )
}

export default Input
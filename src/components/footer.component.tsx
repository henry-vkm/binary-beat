import React from 'react'
import { H3 } from './headings.component'
import { PrimaryButton, TransparentButton } from './buttons-component'
import { Pg1, Pg3 } from './paragraphs.component'
import Input from './input.component'
import { Cap1 } from './captions.component'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className="bg-[#D6C4B0] relative">
        <div className="max-w-[1240px] mx-auto flex">
          <div className="py-[50px] flex flex-col gap-[25px]">
            <H3>Got a Project? Let&apos;s talk!</H3>
            <div>
              <TransparentButton>Book an Appointment</TransparentButton>
            </div>
          </div>
        </div>
        <div className="bg-[#094044] pl-[70px] py-[50px] absolute top-0 right-0 w-[45%] h-[100%] text-[#EDE6DF] flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[5px]">
            <H3>Stay in Touch</H3>
            <Pg3>Join our Email Newsletter!</Pg3>
          </div>
          <div className="flex gap-[10px]">
            <Input placeholder="Email" />
            <PrimaryButton>Send</PrimaryButton>
          </div>
        </div>
      </div> 
      <div className="bg-[#091D26] text-[#EDE6DF] relative">
        <div className="max-w-[1240px] mx-auto py-[50px]">
          <div className="flex flex-col gap-[25px] pb-[70px]">
            <div className="flex flex-col gap-[10px]">
              <Image src="/BinaryBeat.svg" width={183} height={29} alt="binarybeat inc." />
              <Pg3>Let us help grow your business</Pg3>
            </div>
            <div className="flex gap-[15px]">
              <Image src="facebook.svg" width={69} height={40} alt="facebook" />
              <Image src="instagram.svg" width={69} height={40} alt="instagram" />
              <Image src="linkedin.svg" width={69} height={40} alt="linkedin" />
            </div>
          </div>
          <div className="absolute bottom-1">
            <Pg3>@Copyright 2024 BinaryBeat Studio.</Pg3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react';
import { Pg1, Pg3 } from './paragraphs.component';
import Image from 'next/image';
import { PrimaryButton } from './buttons-component';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-[#091d26] text-white py-[15px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image src="/binarybeat.svg" width={183} height={29} alt="BinaryBeat"/>
          </Link>
          <div className="flex items-center justify-between gap-[50px]">
            <Link href="/about" className="cursor-pointer">
              <Pg3>About</Pg3>
            </Link>
            <Link href="/services" className="cursor-pointer">
              <Pg3>Services</Pg3>
            </Link>
            <Link href="/blog" className="cursor-pointer">
              <Pg3>Blog</Pg3>
            </Link>
            <Link href="/projects" className="cursor-pointer">
              <Pg3>Portfolio</Pg3>
            </Link>
          </div>
          <div>
            <PrimaryButton>Join Waitlist</PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
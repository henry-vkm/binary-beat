import React from 'react'
import { H1, H2 } from '../../components/headings.component';
import { Pg1, Pg3 } from '../../components/paragraphs.component';
import Image from 'next/image';
import { LinkText } from '../../components/captions.component';

const Services = () => {
  return (
    <div className="bg-[#091D26] text-[#EDE6DF]">
      <div className="max-w-[1240px] mx-auto">
        <div className="py-[20px]">
          <H1>Innovation meets Expertise <br/> in our Range of Services</H1>
          <div className="w-[565px] h-[3px] bg-[#EDE6DF] mt-[20px]" />
        </div>
        <div>
          <div className="flex items-center justify-between pb-[150px]">
            <div className="flex flex-col gap-[30px] w-[40%]">
              <div className="flex flex-col gap-[10px]">
                <H2>Website Creation</H2>
                <Pg3>From designing to hosting your customized website for your business online, our skilled designers and developers use latest and most efficient technology to deliver best results to provide smooth traffic for the visitors.</Pg3>
              </div>
              <LinkText>Why having a website is important</LinkText>
            </div>
            <div>
              <Image src="/services1.svg" width="537" height="405" alt="Website Creation" />
            </div>
          </div>
          <div className="flex items-center justify-between pb-[150px]">
            <div>
              <Image src="/services2.svg" width="537" height="405" alt="Website Creation" />
            </div>
            <div className="flex flex-col gap-[30px] w-[45%]">
              <div className="flex flex-col gap-[10px]">
                <H2>Search Engine Optimization</H2>
                <Pg3>Be on top 1 list on google search results or any other search results on the internet. Our team will uplift your identity and brand as the best on the digital landscape.</Pg3>
              </div>
              <LinkText>Why having a website is important</LinkText>
            </div>
          </div>
          <div>
          <div className="flex items-center justify-between pb-[150px]">
            <div className="flex flex-col gap-[30px] w-[45%]">
              <div className="flex flex-col gap-[10px]">
                <H2>Maximize your Business Reputation</H2>
                <Pg3>We help handling online customer reviews on Google, Yelp, and any other platforms of your expertise. </Pg3>
              </div>
              <LinkText>Online Reviews for Business</LinkText>
            </div>
            <div>
              <Image src="/services3.svg" width="537" height="405" alt="Website Creation" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
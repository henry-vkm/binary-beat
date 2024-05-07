import React from 'react'
import { Cap1, Cap2, LinkText } from '../../components/captions.component'
import { H1, H2 } from '../../components/headings.component'
import { Pg1, Pg3, Pg2 } from '../../components/paragraphs.component'
import Image from 'next/image'
import { PrimaryButton } from '../../components/buttons-component'
import ProjectCard from '@/components/projectCard.component'

const CUSTOMER_REVIEWS = [
  {
    id: 0,
    name: "Henry", 
    desc: "This team builds very good looking Websites. And we got more clients after partnering with Elevate Edge.",
    role: "Founder",
    company: "dormy.com"
  },
  {
    id: 1,
    name: "Meliora", 
    desc: "This team builds very good looking Websites. And we got more clients after partnering with Elevate Edge.",
    role: "CEO",
    company: "uxr.org"
  },
  {
    id: 2,
    name: "Timothy", 
    desc: "This team builds very good looking Websites. And we got more clients after partnering with Elevate Edge.",
    role: "Owner",
    company: "burmacuisine.rest"
  }
]

const About = () => {
  return (
    <div className="bg-[#091D26] text-[#EDE6DF]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center pt-[30px]">
          <Cap1>About</Cap1>
          <H1>We Grow Businesses Online!</H1>
          <div className="text-center w-[580px] pt-[10px]">
            <Pg3>We're dedicated to being the go-to partner for local businesses, offering cost-effective digital marketing and website solutions tailored for online success and sustainable growth.</Pg3>
          </div>
        </div>
        <div className="flex flex-col gap-[100px] pt-[80px]">
          <div className="flex gap-[80px] items-center">
            <Cap2>Vision</Cap2>
            <div className="flex gap-[40px] items-center">
              <div  className="h-[100px] w-[3px] bg-[#ede6df]" />
              <div className="w-[70%]">
                <Pg3>We found that a lot of small local restaurants do not have websites nor advertisements on digital market areas like Facebook, Instagram, etc.</Pg3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-[80px]">
            <div className="flex items-center gap-[40px] justify-end">
              <div className="w-[70%] text-right">
                <Pg3>We want to build a reliable and affordable agency for small local business owner offering services in digital marketing, website building or renovating current websites, and help them grow their business.</Pg3>
              </div>
              <div  className="h-[100px] w-[3px] bg-[#ede6df]" />
            </div>
            <Cap2>Mission</Cap2>
          </div>
          <div className="flex gap-[0px] items-center">
            <div className="w-[40%]">
              <Cap2>Why Us</Cap2>
            </div>
            <div className="flex gap-[40px] items-center">
              <div  className="h-[100px] w-[3px] bg-[#ede6df]" />
              <div className="w-[70%]">
                <Pg3>We found that a lot of small local restaurants do not have websites nor advertisements on digital market areas like Facebook, Instagram, etc.</Pg3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[50px] py-[150px]">
          <H2>What Our Clients Say</H2>
          <div className="grid grid-cols-3 gap-[30px]">
            {
              CUSTOMER_REVIEWS.map(({ id, name, role, company, desc }) => {
                return (
                  <div className="bg-[#ede6df] text-[#091d26] flex flex-col items-center rounded-[10px] text-center py-[30px] px-[20px] gap-[15px]" key={id}>
                    <Pg2>{ desc }</Pg2>
                    <Image src="stars.svg" width={120} height={24} alt="5 stars" />
                    <div className="flex flex-col gap-[0px]">
                      <Pg1>{ name }</Pg1>
                      <Pg2>{ role }, <LinkText>{ company }</LinkText></Pg2>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-col gap-[50px] text-center pb-[100px]">
          <H2>Our Success Projects</H2>
          <div>
            <div className="grid grid-cols-2 gap-[20px]">
              <div>
                <Image src="/project.png" width={600} height={400} alt="project" />
                <div className="flex justify-between items-center">
                  <Cap1>Pegol.io</Cap1>
                  <LinkText>
                    <Image src="/arrow.svg" width={70} height={70} alt="arrow" /> 
                  </LinkText>
                </div>
              </div>
              <ProjectCard />
            </div>
            <div className="pt-[30px]">
              <PrimaryButton>See More Projects</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
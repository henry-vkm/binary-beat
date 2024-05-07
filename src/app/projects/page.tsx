import React from 'react';
import { H1, H2 } from '@/components/headings.component';
import { Pg3 } from '@/components/paragraphs.component';
import ProjectCard from '@/components/projectCard.component';
import { Cap1, LinkText } from '@/components/captions.component';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="bg-[#091D26] text-[#EDE6DF]">
      <div className="max-w-[1240px] mx-auto">
        <div className="py-[20px] w-[60%] gap-[15px]">
          <div className="flex flex-col gap-[5px]">
            <H1>Works we are proud of.</H1>
            <Pg3>We're dedicated to being the go-to partner for local businesses, offering cost-effective digital marketing and website solutions tailored for online success and sustainable growth.</Pg3>
          </div>
          <div className="w-[565px] h-[3px] bg-[#EDE6DF] mt-[20px]" />
        </div>
        <div className="grid grid-cols-2 gap-[20px] pt-[50px]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="text-center pt-[50px] flex flex-col gap-[50px] py-[150px]">
        <Cap1>Featured</Cap1>
        <Image src="/featuredProject.png" width={2000} height={450} alt="" />
        <div className="max-w-[1240px] mx-auto flex gap-[30px] text-left">
          <div className="w-[45%] flex flex-col gap-[10px]">
            <H2>BURMA CUISINE</H2>
            <Pg3>To help local travellers book bus tickets easily from home and smoothen their travel experience</Pg3>
          </div>
          <div className="w-[65%] flex flex-col gap-[20px]">
            <Pg3>Embark on a tantalizing adventure through the rich and diverse flavors of Burma cuisine with our latest project. Our website is dedicated to celebrating the world's culinary diversity, and what better way to do so than by delving into the vibrant tapestry of Burmese gastronomy? From savory curries to fragrant rice dishes, Burma's cuisine offers a unique blend of influences from neighboring countries and indigenous traditions, resulting in an array of mouthwatering dishes that are sure to captivate the taste buds of food enthusiasts worldwide.</Pg3>
            <LinkText>BURMACUISINE.COM</LinkText>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
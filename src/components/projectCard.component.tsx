import React from 'react';
import Image from 'next/image';
import { Cap1, LinkText } from './captions.component';

const ProjectCard = () => {
  return (
    <div>
      <Image src="/project.png" width={600} height={400} alt="project" />
      <div className="flex justify-between items-center">
        <Cap1>burmacuisine.com</Cap1>
        <LinkText>
          <Image src="/arrow.svg" width={70} height={70} alt="arrow" /> 
        </LinkText>
      </div>
    </div>
  )
}

export default ProjectCard
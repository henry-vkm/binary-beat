import React from 'react';
import { client, urlFor } from '../lib/sanity';
import Image from 'next/image';

interface blogCard {
  title: string,
  slug: string,
  _updatedAt: any,
  author: string,
  mainImage: any,
  body: string
}

const getData = async () => {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    title, 
    slug,
    _updatedAt,
    author,
    mainImage, 
    body
  }
  `

  const data = await client.fetch(query);

  return data;
}

const Blog = async () => {
  const data = await getData();

  console.log(data)
  console.log("hello")
  return (
    <div className="grid grid-cols-2 gap-10">
      {
        data.map(({title, mainImage, _updatedAt}) => {
          return (
            <div key={title}>
              <p>{title}</p>
              <Image src={urlFor(mainImage).url()} width={500} height={500} alt='..'/>
              <p>{_updatedAt}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog
import Image from 'next/image'
import React from 'react'
import foto from '../../../public/imagenes/2.jpg'

const Galeria = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 w-full box-border py-3">
              <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-full hover:border-4 border-gray-500"/>
              <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-md hover:border-4 border-gray-500"/>
              <Image src={foto} alt={'doctor imagen'} className="w-1/5"/>           
              <Image src={foto} alt={'doctor imagen'} className="w-1/5"/>
              <Image src={foto} alt={'doctor imagen'} className="w-1/5"/>
              <Image src={foto} alt={'doctor imagen'} className="w-1/5"/>
              <Image src={foto} alt={'doctor imagen'} className="w-1/5"/>
              <Image src={foto} alt={'doctor imagen'} className="w-1/5"/>
              <div className="w-full h-screen bg-my-image bg-cover bg-no-repeat relative">
                <p className='w-full h-64 absolute top-0 opacity-0 hover:opacity-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Perspiciatis laboriosam quos quas enim fuga in, pariatur placeat 
                  eos quod natus laudantium quae optio delectus dolore odio tenetur porro? Unde, odit?
                </p>
              </div>
    </div>
  )
}

export default Galeria
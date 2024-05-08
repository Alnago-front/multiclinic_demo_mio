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
              
    </div>
  )
}

export default Galeria
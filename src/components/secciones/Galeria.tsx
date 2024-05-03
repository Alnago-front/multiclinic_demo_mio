import Image from 'next/image'
import React from 'react'
import foto from '../../../public/imagenes/2.jpg'
const Galeria = () => {
  return (
    <div className=" justify-center items-center w-full h-screen bg-cyan-500">

        <div className="bg-black space-y-4">

            <div className="flex justify-center items-center space-x-4">
                <Image src={foto} alt={'doctor imagen'} className="w-32"/>
                <Image src={foto} alt={'doctor imagen'} className="w-32"/>
                <Image src={foto} alt={'doctor imagen'} className="w-32"/>
            </div>
            <div className="flex justify-center items-center space-x-4">
            <Image src={foto} alt={'doctor imagen'} className="w-32"/>
            <Image src={foto} alt={'doctor imagen'} className="w-32"/>
            <Image src={foto} alt={'doctor imagen'} className="w-32"/>
            </div>
        
        </div>
    </div>
  )
}

export default Galeria
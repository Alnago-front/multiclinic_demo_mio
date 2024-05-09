import React from 'react';
import Image from 'next/image';
import foto from '../../../public/imagenes/4.png';
import foto2 from '../../../public/imagenes/5.png';
import foto3 from '../../../public/imagenes/6.png';
import foto4 from '../../../public/imagenes/7.png';



export default function Profesionales() {
  return (
    <div className='flex flex-col justify-center items-center p-5 max-w-5xl gap-9'>

          <div className='flex gap-20'>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-20'>
                  <div className='flex items-end justify-center h-60 w-72 bg-principal rounded-3xl hover:bg-segundario'>
                    <Image src={foto} alt={'doctor imagen'} className='h-80'/>
                  </div>
                  <div className='flex items-end justify-center h-60 w-72 bg-principal hover:bg-segundario rounded-3xl '>
                    <Image src={foto3} alt={'doctor imagen'} className='h-80 w-60'/>
                  </div>
                </div>
                <div className='flex flex-col gap-20'>
                  <div className='flex items-end justify-center h-60 w-72 bg-principal rounded-3xl hover:bg-segundario '>
                    <Image src={foto4} alt={'doctor imagen'} className='h-80'/>
                  </div>
                  <div className='flex items-end justify-center h-60 w-72 bg-principal hover:bg-segundario rounded-3xl hover:shadow-2xl'>
                    <Image src={foto2} alt={'doctor imagen'} className='h-80 w-60'/>
                  </div>
                </div>
            </div>
            <div className='flex gap-10 flex-col'>
              <h1 className='text-7xl'>Nuestro Equipo Medico</h1>
              <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates consequatur dicta voluptas in ullam repellat neque 
                similique dolorum dolores optio officiis voluptate. </p>
              <button className='bg-primario outline-1'> MIRALOS TODOS </button>
            </div>
          </div>


    </div>
  )
}
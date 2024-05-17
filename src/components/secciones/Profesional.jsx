'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';


const profes = [
    {
      "name": "DRA. ISABEL URIBE",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
      "img": "/imagenes/2.jpg",
      "id":"1",
    },
    {
        "name": "DR. LUIS G. FIGUEROA R.",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/2.jpg",
        "id":"2",
    },
    {
        "name": "DR. LUIS MILLÁN",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/2.jpg",
        "id":"3",
    },
    {
        "name": "DR. LUIS G. FIGUEROA R.",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/2.jpg",
        "id":"4",
    },
    {
        "name": "DR. LUIS G. FIGUEROA R.",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/2.jpg",
        "id":"5",
    },
]

const Profesional = () => {
  return (
    <div className='flex flex-wrap justify-center w-full m-10 p-10'>
        {
            profes.map((profe)=>{
                
                return(
                    <motion.div 
                        key={profe.id}
                        variants={{
                            hidden: {opacity:0, y:95},
                            visible: {opacity:1, y:0}
                            }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: 1, delay:0.25}}
                        className=' flex flex-col items-center justify-center rounded-2xl p-5' >
                            
                                <Image src={profe.img} width={300} height={350} alt={profe.name} className='rounded-2xl'/>
                                <p className='tracking-widest font-bold w-[300px]'>{profe.name}</p>
                                <p className='w-[300px]'>{profe.description}</p>
                            
                        </motion.div>
                    
                )
            })
        }
    </div>
  )
}

export default Profesional
'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';


const profes = [
    {
      "name": "DRA. ISABEL URIBE",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
      "img": "/imagenes/4.png"
    },
    {
        "name": "DR. LUIS G. FIGUEROA R.",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/5.png"
    },
    {
        "name": "DR. LUIS MILLÁN",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/6.png"
    },
    {
        "name": "DR. LUIS G. FIGUEROA R.",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/7.png"
    },
    {
        "name": "DR. LUIS G. FIGUEROA R.",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti ipsam,",
        "img": "/imagenes/2.jpg"
    },
]

const Profesional = () => {
  return (
    <div className='flex flex-wrap gap-10 w-full justify-center p-16'>
        {
            profes.map((profe)=>{
                return(
                    <motion.div 
                        variants={{
                            hidden: {opacity:0, y:95},
                            visible: {opacity:1, y:0}
                            }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: 1, delay:0.25}}
                        className='border border-principal flex flex-wrap gap-10 justify-center rounded-2xl'
                        >
                            <div className='flex flex-col justify-center items-center w-1/3 '>
                                <Image src={profe.img} width={200} height={250} />
                                <p>{profe.name}</p>
                                <p>{profe.description}</p>
                            </div>
                        </motion.div>
                    
                )
            })
        }
    </div>
  )
}

export default Profesional
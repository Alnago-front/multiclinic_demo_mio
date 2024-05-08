'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import foto from '../../../public/imagenes/2.jpg'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

const Galeria = () => {
  const containerRef=useRef(null);
  const isInView = useInView(containerRef, {once:true});
  const mainControls = useAnimation();
  const { scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const primeraFila = useTransform(
    scrollYProgress,
    [0,1],
    ["-100%","0%"]
  )
  const segundaFila = useTransform(
    scrollYProgress,
    [0,1],
    ["100%","0%"]
  )

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  })
  return (
    <div className="flex flex-col justify-center gap-10 w-full box-border bg-segundario overflow-x-hidden p-10" ref={containerRef}>

              <motion.div style={{translateX: primeraFila}} className='w-full flex justify-center gap-10'>
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl hover:border-4 border-gray-500"/>
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl hover:border-4 border-gray-500"/>
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl"/>           
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl"/>
              </motion.div>

              <motion.div style={{translateX: segundaFila}} className='w-full flex justify-center gap-10'>
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl hover:border-4 border-gray-500"/>
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl hover:border-4 border-gray-500"/>
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl"/>           
                <Image src={foto} alt={'doctor imagen'} className="w-1/5 rounded-3xl"/>
              </motion.div>
               
    </div>
  )
}

export default Galeria
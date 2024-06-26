'use client'

import React, { useEffect, useRef } from 'react'
import FlipCart from "./FlipCart"
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

const Galeria = () => {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const primeraFila = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )
  const segundaFila = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  })

  return (
    <div className="flex flex-col justify-center gap-10 w-full overflow-x-hidden box-border p-10 scroll-px-6" ref={containerRef}>

      <motion.div style={{ translateX: primeraFila }} className='w-full flex justify-center gap-10'>
        <FlipCart />
        <FlipCart />
        <FlipCart />
      </motion.div>

      <motion.div style={{ translateX: segundaFila }} className='w-full flex justify-center gap-10'>
        <FlipCart />
        <FlipCart />
        <FlipCart />
      </motion.div>

    </div>
  )
}

export default Galeria
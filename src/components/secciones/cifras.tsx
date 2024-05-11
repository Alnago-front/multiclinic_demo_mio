'use client'

import { motion, useAnimate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Cifras() {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  const count = useMotionValue(100);
  const pacients = useTransform(count, Math.round);
  
  useEffect(() => {
    if (isInView) {
      const pacients = animate(count, 5000, { duration: 2 });
    }
  })

  return (
    <div className="w-full max-w-5xl min-h-40 h-auto">
      <div className="w-full min-h-36 h-auto grid grid-cols-1 place-items-center place-content-between mobile:p-5">

        <div className='mb-5'>
          <h1 className='text-3xl'>CIFRAS</h1>
        </div>

        <div className="w-full h-auto grid tablet:grid-cols-4 mobile:grid-cols-2 mobile:gap-5 place-items-center">
          <div>
            <p className='text-white text-2xl'>PACIENTES</p>
            <div className='flex'>
              <p className='text-white text-2xl'>+</p>
              <motion.p ref={scope} className='text-3xl'>{pacients}</motion.p>
            </div>
          </div>
          <div>
            <p className='text-white text-2xl'>SEDE</p>
            <div className='text-3xl'>Medellín</div>
          </div>
          <div>
            <p className='text-white text-2xl'>AÑOS</p>
            <div className='flex'>
              <p className='text-white text-2xl'>+</p>
              <motion.p className='text-3xl'></motion.p>
            </div>
          </div>
          <div>
            <p className='text-white text-2xl'>CERTIFICADOS</p>
            <p className='text-3xl'>6</p>
          </div>
        </div>

      </div>
    </div>
  )
}
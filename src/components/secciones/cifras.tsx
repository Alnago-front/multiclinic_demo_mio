'use client'

import { animate, inView, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react';

export default function Cifras() {

  const count = useMotionValue(100);
  const pacients = useTransform(count, Math.round);

  const year = useMotionValue(1);
  const years = useTransform(year, Math.round);

  useEffect(() => {

    const pacients = animate(count, 5000, { duration: 2 });
    const years = animate(year, 2, { duration: 2 });
    return stop;

  });

  return (
    <div className="w-full max-w-5xl h-36">
      <div className="w-full h-full grid grid-cols-1 place-items-center place-content-between">

        <div>
          <h1>Cifras</h1>
        </div>

        <div className="w-full h-auto grid grid-cols-4 place-items-center">
          <div>
            <p>Pacientes</p>
            <div className='flex'><p>+</p><motion.p>{pacients}</motion.p></div>
          </div>
          <div>
            <p>Sede</p>
            <div>Medellín</div>
          </div>
          <div>
            <p>Años</p>
            <div className='flex'><p>+</p><motion.p>{years}</motion.p></div>
          </div>
          <div>
            <p>Certificados</p>
            <h5>6</h5>
          </div>
        </div>

      </div>
    </div>
  )
}
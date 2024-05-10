'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Profesional from "./Profesional";

export default function Profesionales() {
  return (
    <div className='relative overflow-hidden w-full'>
        <motion.div 
            variants={{
          hidden: {opacity:0, y:95},
          visible: {opacity:1, y:0}
        }}
          initial="hidden"
          whileInView="visible"
          transition={{duration: 1, delay:0.25}}
        >
            <Profesional/>
        </motion.div>
    </div>
  )
}
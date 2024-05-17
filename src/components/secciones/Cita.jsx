"use client"
import { motion } from "framer-motion"

const Cita = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full my-10'>

        <div className='flex flex-col items-center justify-center w-2/4 border-2 border-solid border-principal p-10 gap-20 m-5'>
            <motion.p    initial={{opacity: 0, x: -100}}
                         whileInView={{ opacity: 1, x: 0}}
                         transition={{ ease: "easeOut", duration: 1.3 }}
                        className='font-mono text-3xl text-center text-segundario'> 

                        AGENDA TU CITA CON NOSOTROS 
            </motion.p>
            <motion.button  initial={{opacity: 0, x: -100}}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={{ ease: "easeOut", duration: 1.3 }}
                            className='text-xl text-white bg-principal rounded-xl p-3 hover:scale-105 hover:bg-segundario'>CLICK AQUI</motion.button>
        </div>

    </div>
  )
}

export default Cita
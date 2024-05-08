'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {

  const servicios = [
    {
      "name": "servicio 1",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 2",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 3",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 4",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 5",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 6",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 7",
      "img": "/images/circulo_blanco.png"
    },
    {
      "name": "servicio 8",
      "img": "/images/circulo_blanco.png"
    },
  ]

  return (
    <div className="flex justify-around w-full h-5/6 tablet:p-6 mobile:p-0">
      <div className="flex w-full h-auto justify-between items-center max-w-5xl flex-col gap-9">

        <div className={` ${'text-7xl text-ebrima'}`}>
          <h1>Servicios</h1>
        </div>

        <div className="grid laptop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 gap-4 place-content-around place-items-center w-full">

          {
            servicios.map((servicio) => {
              var valor = (Math.random() * (1 - 0)).toFixed(1);
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: valor,
                    delay: parseFloat(valor),
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  key={servicio.name}
                  className="flex relative mobile:w-40 mobile:h-40 tablet:w-48 tablet:h-48 items-center justify-center group"
                >
                  <Image src={servicio.img} alt={servicio.name} width={400} height={400} className="w-full h-full cursor-pointer group-hover:scale-110 ease-in duration-200" />
                  <p className={`${'flex absolute w-full h-full justify-center items-center opacity-0 group-hover:opacity-100'}`}>{servicio.name}</p>
                </motion.div>

              )
            })
          }

        </div>

      </div>
    </div>
  )
}
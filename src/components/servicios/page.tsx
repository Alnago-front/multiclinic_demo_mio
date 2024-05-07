import { unica_one } from "@/ui/fonts";
import { Unica_One } from "next/font/google";
import Image from "next/image";

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
    <div className="flex justify-around w-full h-5/6 p-6">
      <div className="flex w-full h-auto justify-between items-center max-w-5xl flex-col">

        <div className={`${unica_one.className} ${'text-7xl'}`}>
          <h1>Servicios</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 place-content-around place-items-center w-full">

          {
            servicios.map((servicio) => {
              return (
                <div key={servicio.name} className="flex relative w-40 h-40 items-center justify-center group">
                  <Image src={servicio.img} alt={servicio.name} width={400} height={400} className="w-40 h-40 cursor-pointer group-hover:scale-110 ease-in duration-200" />
                  <p className="flex absolute w-full h-full justify-center items-center opacity-0 group-hover:opacity-100">{servicio.name}</p>
                </div>

              )
            })
          }

        </div>

      </div>
    </div>
  )
}
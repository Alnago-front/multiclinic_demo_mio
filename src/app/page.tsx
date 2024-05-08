import Galeria from "@/components/secciones/Galeria";
import Banner from "@/components/secciones/banner";
import Profesionales from "@/components/secciones/profesionales";
import Services from "@/components/secciones/servicios";
import Image from "next/image";

export default function Home() {
  return (

    <main className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col">

        <section className="flex w-full h-screen">
          <Image src={'/images/multiclinic.jpg'} alt="clinica entrada" width={2400} height={1600} className="absolute top-0 flex w-full h-full object-cover bg-no-repeat bg-center" />
          <Banner />
        </section>
        
        <section className="flex relative w-full h-screen justify-center items-center">
          <Image src={'/images/sala1.jpg'} alt="fondo hondas" width={1920} height={1800} className="absolute top-0 flex w-full h-full object-cover bg-no-repeat bg-center -z-10" />
          <Services />
        </section>

        <section className="flex relative w-full h-screen justify-center items-center">
          <Profesionales />
        </section>

        <Galeria/>

      </div>
    </main>

  );
}

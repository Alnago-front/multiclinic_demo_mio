import Galeria from "@/components/secciones/Galeria";
import Cita from "@/components/secciones/Cita";
import Banner from "@/components/secciones/banner";
import Profesionales from "@/components/secciones/profesionales";
import Services from "@/components/secciones/servicios";
import Image from "next/image";

export default function Home() {
  return (

    <main className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col w-full h-auto">

        <section className="flex w-full h-screen bg-[url('/images/multiclinic.jpg')] bg-no-repeat bg-cover">
          <Banner />
        </section>
        
        <section className="flex relative w-full h-screen justify-center items-center bg-[url('/images/sala1.jpg')] bg-no-repeat bg-cover">
          <Services />
        </section>

        <section className="flex relative w-full h-screen justify-center items-center">
          <Profesionales />
        </section>

        <Galeria/>
        <Cita/>

      </div>
    </main>

  );
}

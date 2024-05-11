import Galeria from "@/components/secciones/Galeria";
import Cita from "@/components/secciones/Cita";
import Banner from "@/components/secciones/banner";
import Services from "@/components/secciones/servicios";
<<<<<<< HEAD
import Profesionales from "@/components/secciones/Profesionales";
import Profesional from "@/components/secciones/Profesional";
=======
import Image from "next/image";
>>>>>>> ab4ba7428ebc94d2b7da4831732200defb46491e

export default function Home() {
  return (

    <main className="w-full h-auto">
      <div className="flex flex-col w-full h-auto">

        <section className="flex w-full h-screen bg-[url('/images/multiclinic.jpg')] bg-no-repeat bg-cover">
          <Banner />
        </section>
        
        <section className="flex w-full h-auto min-h-screen justify-center items-center bg-[url('/images/sala1.jpg')] bg-no-repeat bg-cover">
          <Services />
        </section>

<<<<<<< HEAD
        <Profesional />
=======
        <section className="flex relative w-full min-h-screen h-auto justify-center items-center">
          <Profesionales />
        </section>

>>>>>>> ab4ba7428ebc94d2b7da4831732200defb46491e
        <Galeria/>
        <Cita/>

      </div>
    </main>

  );
}

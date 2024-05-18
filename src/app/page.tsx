import Galeria from "@/components/secciones/Galeria";
import Cita from "@/components/secciones/Cita";
import Banner from "@/components/secciones/banner";
import Services from "@/components/secciones/servicios";
import Profesional from "@/components/secciones/Profesional";
import Cifras from "@/components/secciones/cifras";

export default function Home() {

  return (

    <main className="w-full h-auto">
      <div className="flex flex-col w-full h-auto">

        <section id="Banner" className="flex w-full h-screen bg-[url('/images/multiclinic.jpg')] bg-no-repeat bg-cover">
          <Banner />
        </section>
        
        <section id="Servicios" className="flex w-full h-auto min-h-screen justify-center items-center bg-[url('/images/sala1.jpg')] bg-no-repeat bg-cover">
          <Services />
        </section>

        <section className="flex w-full min-h-screen h-auto justify-center items-center">
          <Profesional />
        </section>

        <section className="w-full min-h-56 h-auto flex flex-col justify-center items-center bg-principal">
          <Cifras />
        </section>

        <section  id="Quienes" className="flex w-full h-auto justify-center items-center">
          <Galeria />
        </section>

        <section className="flex w-full min-h-screen h-auto justify-center items-center">
          <Cita />
        </section>

      </div>
    </main>

  );
}

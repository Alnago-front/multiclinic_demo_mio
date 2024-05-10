import Galeria from "@/components/secciones/Galeria";
import Cita from "@/components/secciones/Cita";
import Banner from "@/components/secciones/banner";
import Services from "@/components/secciones/servicios";
import Profesionales from "@/components/secciones/Profesionales";

export default function Home() {
  return (

    <main className="w-full h-auto">
      <div className="flex flex-col w-full h-auto">

        <section className="flex w-full h-screen bg-[url('/images/multiclinic.jpg')] bg-no-repeat bg-cover">
          <Banner />
        </section>
        
        <section className="flex relative w-full h-auto min-h-screen justify-center items-center bg-[url('/images/sala1.jpg')] bg-no-repeat bg-cover">
          <Services />
        </section>

        <Profesionales />
        <Galeria/>
        <Cita/>

      </div>
    </main>

  );
}

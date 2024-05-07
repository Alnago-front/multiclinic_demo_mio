import Banner from "@/components/bannerppl/page";
import Galeria from "@/components/secciones/Galeria";

export default function Home() {
  return (

    <main className="flex flex-col justify-center items-center w-full h-auto bg-segundario">
      <div className="flex flex-col max-w-5xl">

        <section className="flex justify-center items-center w-full h-screen">
          <Banner />
        </section>
        
        <section className="flex justify-center items-center w-full h-screen">
          <h2 className="text-2xl font-bold text-center">
            Multiclinic2
          </h2>
        </section>

        <Galeria/>

      </div>
    </main>

  );
}

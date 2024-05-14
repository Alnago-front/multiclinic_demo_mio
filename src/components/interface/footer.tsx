import Image from "next/image";

export default function Footer() {

  return (
    <footer className="flex justify-center items-center w-full h-auto bg-black">
      <div className="grid tablet:grid-cols-3 mobile:grid-cols-1 w-fullgit  max-w-5xl pt-3 pb-5">

        <div className="flex justify-center items-center min-w-80">
          <Image src="/logos/multiclinic.png" alt="Logo de multiclinic" width={2911} height={883} className="w-96 h-auto" />
        </div>

        <div className="flex justify-center items-center min-w-80">
          <h1 className="text-white">Nuestra empresa</h1>
        </div>

        <div className="flex justify-center items-center min-w-80">
          <h1 className="text-white">Contacto</h1>
        </div>

      </div>
    </footer>
  )

}
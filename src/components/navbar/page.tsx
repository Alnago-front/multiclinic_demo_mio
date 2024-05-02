import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (

    <header className="fixed flex justify-center items-center w-full h-18 bg-white">
      <div className="flex justify-between items-center max-w-5xl w-full">

        <div>
          <Link href={'/'}>
            <Image src="/logos/multiclinic.png" alt="Logo de multiclinic" width={2911} height={883} className="w-36 h-auto" />
          </Link>
        </div>
        
        <div>
          <nav className="flex gap-2 p-4">
            <Link href={'/'} >Opción 1</Link>
            <Link href={'/'} >Opción 2</Link>
            <Link href={'/'} >Opción 3</Link>
            <Link href={'/'} >Opción 4</Link>
          </nav>
        </div>

      </div>
    </header>

  )
}
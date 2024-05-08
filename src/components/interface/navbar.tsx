import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (

    <nav className="flex absolute justify-center z-10 w-full h-52 bg-gradient-to-b from-black">

      <div className="grid laptop:grid-cols-2 mobile:grid-cols-1 place-content-between w-full h-4/6 max-w-5xl">

        <div className="grid mobile:place-content-center">
          <Link href={'/'}>
            <Image src="/logos/multiclinic.png" alt="Logo de multiclinic" width={2911} height={883} className="w-96 h-auto" />
          </Link>
        </div>

        <div className="place-content-center py-5">
          <ul className="grid grid-cols-3">
            <li className="text-white text-center"><Link href={'/servicios/'}>Servicios</Link></li>
            <li className="text-white text-center"><Link href={'/'}>Quienes somos</Link></li>
            <li className="text-white text-center"><Link href={'/'}>Contacto</Link></li>
          </ul>
        </div>

      </div>

    </nav>

  )
}
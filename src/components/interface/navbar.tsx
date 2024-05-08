import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (

    <nav className="flex absolute justify-center z-10 w-full h-52 bg-gradient-to-b from-black">

        <div className="flex justify-center w-full h-3/6 max-w-5xl">
          <Link href={'/'}>
            <Image src="/logos/multiclinic.png" alt="Logo de multiclinic" width={2911} height={883} className="w-96 h-auto" />
          </Link>
        </div>

    </nav>

  )
}
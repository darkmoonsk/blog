import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

function Logo() {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light gap-3">
        <div className="w-12 md:w-16 overflow-hidden rounded-full border border-solid border-dark dark:border-light">
            <Image src={profileImg} alt="Bruno Souza" className="w-full h-auto rounded-full"/>
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">Bruno Souza</span>
    </Link>
  )
}

export default Logo
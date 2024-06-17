import Image from "next/image";
import Link from "next/link";
import home_icon from '@/assets/home.png'

export default function Navbar() {
    return (
        <nav className="w-full h-full flex flex-nowrap justify-center items-center py-4">
            <Link href="#landing" >
                <Image
                src={home_icon}
                alt="Home"
                className="h-auto w-[50px] hover:w-[70px] transition-all duration-500"
                />
            </Link>
        </nav>
    )
}
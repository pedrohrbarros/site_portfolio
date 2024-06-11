import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Planet({ planet_map, tailwind_size }: { planet_map: string | StaticImport, tailwind_size?: string }) {
    return (
        <div
        className={`${planet_map} bg-cover rounded-[100%] ${tailwind_size ?? 'w-[400px] h-[400px]'} shadow-[-25px_-25px_25px_black_inset,10px_10px_30px_white_inset,0px_0px_20px_#3A96FF] animate-spin_planet`}
        />
    )
}
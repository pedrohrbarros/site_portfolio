'use client'

import Navbar from "@/components/Navbar";
import Planet from "@/components/Planet";
import { useEffect, useRef } from "react";
import AOS from 'aos'

export default function Home() {
  const initial_section_ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    AOS.init({
      once: false,
    })
    if (initial_section_ref.current) {
      initial_section_ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  return (
    <main className="w-full min-h-screen h-full flex flex-col justify-start items-center relative">
      <div className="w-full h-screen fixed top-0 bg-main bg-cover -z-10"/>
      <header className="w-full h-[15vh] border-b-[1px] border-b-gray-500 bg-transparent">
        <Navbar/>
      </header>
      <div className="w-full h-full min-h-screen bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0 -z-10 flex flex-col justify-start items-center">
        <section id="landing"  ref={initial_section_ref}className="w-full h-screen flex flex-row justify-end flex-wrap items-center relative pr-10">
          <div className="absolute -left-96 bottom-0">
            <Planet
              planet_map='bg-earth'
              tailwind_size="w-[750px] h-[100vh]"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-end">
            <h1 className="text-8xl font-mono text-white m-0 p-0" data-aos="fade-right" data-aos-duration="1000">Pedro Barros</h1>
            <h2 className="text-6xl font-mono text-white m-0 p-0" data-aos="fade-right" data-aos-duration="700">Full Stack Mid-Developer</h2>
          </div>
        </section>
      </div>
    </main>
  );
}

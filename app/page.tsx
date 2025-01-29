'use client'

import { useEffect, useState } from "react";
import AOS from 'aos'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp   } from "react-icons/fa";
import { Divide as Hamburger } from 'hamburger-react'
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { useSliderStore } from "@/hooks/slider";
import Skill from "@/components/Skill";
import { Project } from '@/components/Project'
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [is_open, toggleIsOpen] = useState<boolean>(false)
  const [description_label, setDescriptionLabel] = useState<string[]>(['responsive websites', 'performatic servers', 'smooth mobile applications'])
  const slider_store = useSliderStore((state) => state)
  useEffect(() => {
    AOS.init({
      once: false,
    })
  }, [])

  return (
    <main className="w-full overflow-x-hidden min-h-screen h-full flex flex-col justify-start items-center relative">
      <motion.nav 
        className="w-full h-full flex flex-col text-center items-center justify-start bg-gray-800 overflow-y-hidden fixed top- z-20"
        animate ={{
          height: is_open ? '70vh' : '10vh'
        }}
      >
        <div className="w-full h-[10vh] flex flex-row text-enter items-center justify-between px-[15%] bg-white">
          <h1 
            className="text-3xl font-sans font-extralight cursor-pointer m-0 p-0 transition-all duration-200 hover:text-indigo-600 text-center"
            onClick={() => window.location.replace('/')}  
          >
            Pedro Barros
          </h1>
          <div className="w-20 h-full hover:bg-indigo-200 transition-all duration-200 flex flex-col justify-center items-center cursor-pointer">
            <Hamburger toggled={is_open ?? false} toggle={toggleIsOpen} />
          </div>
        </div>
        <motion.div
          className="w-full h-full flex flex-col gap-10 justify-center items-start px-[15%]"
          animate={{
            height: is_open ? '100%' : 0
          }}
          transition={{
            duration: 0.4
          }}
        >
          {
            is_open &&
              <Link
                href="#landing"
                className="text-white font-extralight text-4xl transition-all duration-200 hover:text-rose-500"
              >
                Home
              </Link>
          }
          {
            is_open &&
              <Link
                href="#skills"
                className="text-white font-extralight text-4xl transition-all duration-200 hover:text-rose-500"
              >
                Skills
              </Link>
          }
          {
            is_open &&
              <Link
                href="#projects"
                className="text-white font-extralight text-4xl transition-all duration-200 hover:text-rose-500"
              >
                Projects
              </Link>
          }
          {
            is_open &&
              <Link
                href="#contact"
                className="text-white font-extralight text-4xl transition-all duration-200 hover:text-rose-500"
              >
                Contact
              </Link>
          }
          {
            is_open &&
            <div className="w-full h-auto flex flex-row flex-nowrap justify-start items-center gap-6">
              <FaGithub
                size={50}
                className="cursor-pointer text-white hover:text-rose-500 transition-all duration-200"
                onClick={() => window.open('https://github.com/pedrohrbarros', "_blank")}
              />
              <FaLinkedin
                size={50}
                className="cursor-pointer text-white hover:text-rose-500 transition-all duration-200"
                onClick={() => window.open('https://www.linkedin.com/in/pedro-henrique-rodrigues-de-barros/', "_blank")}
              />
              <FaWhatsapp
                size={50}
                className="cursor-pointer text-white hover:text-rose-500 transition-all duration-200"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5511954312733', "_blank")}
              />
            </div>
          }
        </motion.div>
      </motion.nav>
      <section id="landing" className="w-full h-screen flex flex-col justify-start flex-wrap items-center bg-transparent -z-1">
        <div className="w-full h-full relative">
          <Carousel>
            <div className="w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
            <div className="w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
            <div className="w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
          </Carousel>
          <div className="w-full h-screen flex flex-col justify-center items-start px-[15%] absolute top-0 gap-2 bg-clip-padding backdrop-blur-sm">
            <h1 className="text-5xl font-light">{`I'm Pedro Barros.`}</h1>
            <h2 className="text-5xl font-light">I build {description_label.map((text: string, index: number) => (
              index === slider_store.slide_in_view ?
              <motion.span
              className="bg-slate-500 rounded-md bg-clip-padding backdrop-blur-md bg-opacity-30 px-[5px] pb-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                exit = {{ opacity: 0 }}
                key={index}
              >
                {text}.
              </motion.span>
              : null
            ))}</h2>
            <div className="w-full h-auto flex flex-row justify-start items-center gap-4 mt-20">
              <button
                className="p-5 border-[1px] border-black text-black text-lg font-light transition-all hover:border-white hover:text-white duration-200"
                onClick={() => window.open('https://github.com/pedrohrbarros?tab=repositories', '_blank')}
              >
                View Portfolio
              </button>
              <button
                className="p-5 border-[1px] border-black text-black text-lg font-light transition-all hover:border-white hover:text-white duration-200"
                onClick={() => window.open('https://www.linkedin.com/in/pedro-henrique-rodrigues-de-barros-39077b159/', '_blank')}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="w-full h-full sm:h-screen flex flex-row flex-wrap sm:flex-nowrap justify-center items-center gap-10 bg-gray-200 py-10"
      >
        <div
          className="w-full sm:w-1/2 h-auto sm:h-full flex flex-col justify-start items-center pt-32"
        >
          <h1 className="text-6xl font-extralight text-gray-600">
            Skills.
          </h1>
        </div>
        <div
          className="w-full sm:w-1/2 h-auto sm:h-full flex flex-col justify-center sm:justify-start items-center
          pt-32 px-10 sm:px-0 sm:pr-40 gap-10"
        >
          <p
            className="m-0 p-0 text-gray-600 text-xl font-light text-justify"
          >
            With expertise in mobile development, web development, and backend servers, I deliver comprehensive tech solutions. I create high-performance mobile apps for iOS and Android, build responsive and user-friendly websites, and design scalable, secure backend server architectures. My skills ensure seamless and reliable performance across all digital platforms.
          </p>
          <div className="w-full h-full flex flex-col justify-start items-start overflow-y-scroll gap-4">
            <Skill skill="Back-end Development" percentage={65}/>
            <Skill skill="Front-end Development" percentage={80}/>
            <Skill skill="Mobile Development" percentage={55}/>
            <Skill skill="Database Management" percentage={60}/>
            <Skill skill="DevOps" percentage={25}/>
          </div>
          <div className="w-full flex flex-row justify-start items-center flex-nowrap">
            <Link
              href="https://github.com/pedrohrbarros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold text-xl text-start"
            >
              Wanna see all my stacks?
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full min-h-screen h-full flex flex-col justify-center items-center
        sm:justify-start sm:items-start gap-10 pt-40"
        id="projects"
      >
        <h1
          className="text-6xl font-extralight text-gray-600 sm:px-10"
        >
          My Projects.
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center">
              <Project.Item
                cover={"https://images.unsplash.com/photo-1471666875520-c75081f42081?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Site Portfolio"}
                status={"Done"}
                url={"https://github.com/pedrohrbarros/site_portfolio"}
              />
              <Project.Item
                cover={"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Django Rest API"}
                status={"Done"}
                url={"https://github.com/pedrohrbarros/django_rest_api"}
              />
              <Project.Item
                cover={"https://images.unsplash.com/photo-1657776655487-18dcab7b2c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Toolbox"}
                status={"Done"}
                url={"https://toolbox-pearl-ten.vercel.app/"}
              />
            </div>
            <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center">
              <Project.Item
                cover={"https://images.unsplash.com/photo-1588713029548-2aca8c227954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Vegan E-commerce"}
                status={"Start Soon"}
              />
              <Project.Item
                cover={"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Golang Authentication API"}
                status={"Start Soon"}
              />
              <Project.Item
                cover={"https://images.unsplash.com/photo-1667453466805-75bbf36e8707?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Firebase Integration Mobile APP"}
                status={"Start Soon"}
              />
            </div>
            <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center">
              <Project.Item
                cover={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Interative Dashboard"}
                status={"Start Soon"}
              />
              <Project.Item
                cover={"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"IA with Python or Golang"}
                status={"Start Soon"}
              />
              <Project.Item
                cover={"https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"Payment APP"}
                status={"Start Soon"}
              />
            </div>
        </div>
      </section>
      <section className="w-full min-h-[90vh] flex flex-row flex-nowrap justify-center items-start gap-10 py-20" id="contact"
      >
        <div className="w-1/2 h-full flex flex-col justify-end text-end items-end gap-5">
          <h1
            className="text-6xl font-extralight text-gray-600"
          >
            Get in touch.
          </h1>
          <p className="text-xl font-extralight text-gray-500 m-0 p-0">
            Let&apos;s work together. Contact me through the following methods.
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-start items-start gap-5">
          <button
            className="
            w-40
            flex flex-row flex-nowrap justify-start items-center
            gap-2
            bg-transparent border-[2px]
            border-[#1A1A1A] rounded-md box-border text-[#3B3B3B]
            hover:text-[#fff] hover:bg-[#1A1A1A] hover:[box-shadow:rgba(0,_0,_0,_0.25)_0_8px_15px] hover:-translate-y-[2px]
            font-[Roobert,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica','Arial,sans-serif','Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol']
            text-[16px] font-semibold leading-[normal]
            outline-[none] px-[24px] py-[16px] text-center
            no-underline [transition:all_300ms_cubic-bezier(.23,_1,_0.32,_1)]
            active:[box-shadow:none] active:translate-y-[0]
            cursor-pointer
            "
            onClick={() => window.open('https://www.linkedin.com/in/pedro-henrique-rodrigues-de-barros/', "_blank")}
          >
            <p className="text-base text-extralight">
              LinkedIn
            </p>
            <FaLinkedin size={25}/>
          </button>
          <button
            className="
            w-40
            flex flex-row flex-nowrap justify-start items-center
            gap-2
            bg-transparent border-[2px]
            border-[#1A1A1A] rounded-md box-border text-[#3B3B3B]
            hover:text-[#fff] hover:bg-[#1A1A1A] hover:[box-shadow:rgba(0,_0,_0,_0.25)_0_8px_15px] hover:-translate-y-[2px]
            font-[Roobert,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica','Arial,sans-serif','Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol']
            text-[16px] font-semibold leading-[normal]
            outline-[none] px-[24px] py-[16px] text-center
            no-underline [transition:all_300ms_cubic-bezier(.23,_1,_0.32,_1)]
            active:[box-shadow:none] active:translate-y-[0]
            cursor-pointer
            "
            onClick={() => {
              window.location.href = "mailto:pedrobarros232@hotmail.com"
            }}
          >
            <p className="text-base text-extralight">
              E-mail
            </p>
            <MdEmail size={25}/>
          </button>
          <button
            className="
            w-40
            flex flex-row flex-nowrap justify-start items-center
            gap-2
            bg-transparent border-[2px]
            border-[#1A1A1A] rounded-md box-border text-[#3B3B3B]
            hover:text-[#fff] hover:bg-[#1A1A1A] hover:[box-shadow:rgba(0,_0,_0,_0.25)_0_8px_15px] hover:-translate-y-[2px]
            font-[Roobert,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica','Arial,sans-serif','Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol']
            text-[16px] font-semibold leading-[normal]
            outline-[none] px-[24px] py-[16px] text-center
            no-underline [transition:all_300ms_cubic-bezier(.23,_1,_0.32,_1)]
            active:[box-shadow:none] active:translate-y-[0]
            cursor-pointer
            "
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5511954312733', "_blank")}
          >
            <p className="text-base text-extralight">
              Whatsapp
            </p>
            <FaWhatsapp size={25}/>
          </button>
        </div>
      </section>
    </main>
  );
}

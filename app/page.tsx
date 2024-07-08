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
    <main className="w-full min-h-screen h-full flex flex-col justify-start items-center relative">
      <motion.nav 
        className="w-full h-full flex flex-col text-center items-center justify-start bg-gray-800 overflow-y-hidden"
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
            <Hamburger toggled={is_open} toggle={toggleIsOpen} />
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
                onClick={() => window.open('https://www.linkedin.com/in/pedro-henrique-rodrigues-de-barros-39077b159/', "_blank")}
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
      <section id="landing" className="w-full h-[90vh] flex flex-col justify-start flex-wrap items-center bg-transparent ">
        <div className="w-full h-full relative">
          <Carousel>
            <div className="w-full h-[90vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
            <div className="w-full h-[90vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
            <div className="w-full h-[90vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
          </Carousel>
          <div className="w-full h-[90vh] flex flex-col justify-center items-start px-[15%] absolute top-0 gap-2 bg-clip-padding backdrop-filter backdrop-blur-sm">
            <h1 className="text-5xl font-light">{`I'm Pedro Barros.`}</h1>
            <h2 className="text-5xl font-light">I build {description_label.map((text: string, index: number) => (
              index === slider_store.slide_in_view ?
              <motion.span
              className="bg-slate-500 px-[1px] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
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
                className="p-5 border-[1px] border-black text-black text-lg font-light transition-all hover:border-white hover:text-white duration-200 hover:border-2"
                onClick={() => window.open('https://github.com/pedrohrbarros?tab=repositories', '_blank')}
              >
                View Portfolio
              </button>
              <button
                className="p-5 border-[1px] border-black text-black text-lg font-light transition-all hover:border-white hover:text-white duration-200 hover:border-2"
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
        className="w-full h-screen flex flex-row justify-center items-center gap-10 bg-gray-200 py-10"
      >
        <div
          className="w-full sm:w-1/2 h-full flex flex-col justify-start items-center pt-52"
        >
          <h1 className="text-6xl font-extralight text-gray-600" data-aos="zoom-in">
            Skills.
          </h1>
        </div>
        <div
          className="w-full sm:w-1/2 h-full flex flex-col justify-start items-center pt-52 pr-40 gap-4"
        >
          <p
            className="m-0 p-0 text-gray-600 text-xl font-light text-justify"
            data-aos="flip-left"
          >
            With expertise in mobile development, web development, and backend servers, I deliver comprehensive tech solutions. I create high-performance mobile apps for iOS and Android, build responsive and user-friendly websites, and design scalable, secure backend server architectures. My skills ensure seamless and reliable performance across all digital platforms.
          </p>
          <div className="w-full h-full flex flex-col justify-start items-start overflow-y-scroll gap-4">
            <Skill skill="Back-end Development" percentage={65}/>
            <Skill skill="Front-end Development" percentage={80}/>
            <Skill skill="Mobile Development" percentage={23}/>
            <Skill skill="Database" percentage={72}/>
            <Skill skill="Code Versioning" percentage={52}/>
            <Skill skill="Deployment" percentage={52}/>
            <Skill skill="Containerization" percentage={10}/>
          </div>
        </div>
      </section>
      {/* <section className="w-full h-full min-h-screen flex flex-col justify-center items-center px-10">
        <div className="w-full h-auto flex flex-col justify-center items-center text-center mb-20 gap-[2px]">
          <h1 className="text-6xl font-mono text-white m-0 p-0">Skills</h1>
          <h2 className="text-white font-sans text-2xl m-0 p-0">(Click on the arrow to see more)</h2>
        </div>
        <Skill.Main
          title="Back-end Development"
          icon={<FaServer color="#FFFFFF" size={100}/>}
          knowledge_level={3}
        >
          <Skill.Item
            title="Python"
            icon={<FaPython color="#FFFFFF" size={100}/>}
            description="Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility."
            from_date="2018"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Django"
            icon={<SiDjango color="#FFFFFF" size={100}/>}
            description="Django is a high-level Python web framework designed for rapid development and clean, pragmatic design. It was created to help developers take applications from concept to completion as swiftly as possible."
            from_date="2019"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Flask"
            icon={<BiLogoFlask color="#FFFFFF" size={100}/>}
            description="Flask is a lightweight and flexible web framework for Python. It's designed to make getting started with web development quick and easy, with the ability to scale up to more complex applications."
            from_date="2023"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="FastAPI"
            icon={<SiFastapi  color="#FFFFFF" size={100}/>}
            description="FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to be easy to use and implement, with automatic interactive API documentation and high performance, on par with Node.js and Go."
            from_date="2024"
            to_date="2024"
          />
          <Skill.Item
            title="Pandas"
            icon={<SiPandas  color="#FFFFFF" size={100}/>}
            description="Pandas is a powerful and widely-used open-source data manipulation and analysis library for Python. It provides data structures and functions needed to work on structured data seamlessly."
            from_date="2021"
            to_date="2022"
          />
          <Skill.Item
            title="Node.js"
            icon={<FaNode color="#FFFFFF" size={100}/>}
            description="Node.js is a powerful, open-source, server-side runtime environment that executes JavaScript code outside a web browser."
            from_date="2020"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Bun"
            icon={<SiBun  color="#FFFFFF" size={100}/>}
            description="Bun is a new Node.js-compatible runtime that aims to be faster and more efficient, with built-in support for TypeScript, JSX, and various web APIs."
            from_date="2024"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Express"
            icon={<SiExpress   color="#FFFFFF" size={100}/>}
            description="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications."
            from_date="2022"
            to_date="2024"
          />
          <Skill.Item
            title="Rust"
            icon={<FaRust color="#FFFFFF" size={100}/>}
            description="Rust is a systems programming language focused on safety, speed, and concurrency. It ensures memory safety without a garbage collector, making it ideal for performance-critical applications."
            from_date="2024"
            to_date={new Date().getFullYear().toString()}
          />
        </Skill.Main>
        <Skill.Main
          title="Front-end Development"
          icon={<TbStackFront color="#FFFFFF" size={100}/>}
          knowledge_level={4}
        >
          <Skill.Item
            title="React.js"
            icon={<FaReact   color="#FFFFFF" size={100}/>}
            description="React is a popular JavaScript library for building user interfaces, particularly single-page applications."
            from_date="2020"
            to_date="2022"
          />
          <Skill.Item
            title="Next.js"
            icon={<TbBrandNextjs  color="#FFFFFF" size={100}/>}
            description="Next.js is a popular React framework for building server-side rendered (SSR) and static web applications."
            from_date="2022"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Javascript"
            icon={<IoLogoJavascript color="#FFFFFF" size={100}/>}
            description="JavaScript is a high-level, interpreted programming language primarily used for creating dynamic and interactive content on web pages."
            from_date="2020"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Typescript"
            icon={<SiTypescript color="#FFFFFF" size={100}/>}
            description="TypeScript is a superset of JavaScript that adds static typing and compile-time type checking."
            from_date="2021"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Bootstrap"
            icon={<FaBootstrap color="#FFFFFF" size={100}/>}
            description="Bootstrap is a popular open-source front-end styiling framework for developing responsive and mobile-first web pages."
            from_date="2022"
            to_date="2023"
          />
          <Skill.Item
            title="TailwindCSS"
            icon={<RiTailwindCssFill color="#FFFFFF" size={100}/>}
            description="Tailwind CSS is a utility-first CSS framework that provides low-level, reusable utility classes to build custom designs directly in your markup."
            from_date="2023"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="NextUI"
            icon={<SiNextui color="#FFFFFF" size={100}/>}
            description="NextUI is a React-based UI library designed for creating modern and responsive user interfaces. It provides a set of customizable, accessible, and pre-designed components that simplify the development process."
            from_date="2023"
            to_date={new Date().getFullYear().toString()}
          />
        </Skill.Main>
        <Skill.Main
          title="Database"
          icon={<FaDatabase color="#FFFFFF" size={100}/>}
          knowledge_level={4}
        >
          <Skill.Item
            title="SQL"
            icon={<AiOutlineConsoleSql color="#FFFFFF" size={100}/>}
            description="SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases."
            from_date="2021"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Prisma"
            icon={<SiPrisma color="#FFFFFF" size={100}/>}
            description="Prisma is an open-source ORM (Object-Relational Mapping) tool for Node.js and TypeScript. It simplifies database access and management by providing a type-safe query builder, migrations, and an intuitive data model definition."
            from_date="2024"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="TypeORM"
            icon={<TbBrandTypescript color="#FFFFFF" size={100}/>}
            description="TypeORM is an Object-Relational Mapper (ORM) for TypeScript and JavaScript that supports various database systems like MySQL, PostgreSQL, SQLite, and others."
            from_date="2022"
            to_date="2022"
          />
          <Skill.Item
            title="Firebase"
            icon={<IoLogoFirebase color="#FFFFFF" size={100}/>}
            description="Firebase is a comprehensive platform developed by Google for building mobile and web applications. It offers a variety of tools and services, including real-time databases, authentication, cloud storage, hosting, and machine learning capabilities."
            from_date="2024"
            to_date={new Date().getFullYear().toString()}
          />
        </Skill.Main>
        <Skill.Main
          title="Mobile Development"
          icon={<FaMobile color="#FFFFFF" size={100}/>}
          knowledge_level={1}
        >
          <Skill.Item
            title="React Native"
            icon={<TbBrandReactNative color="#FFFFFF" size={100}/>}
            description="React Native is a framework developed by Facebook for building native mobile applications using JavaScript and React."
            from_date="2024"
            to_date={new Date().getFullYear().toString()}
          />
        </Skill.Main>
        <Skill.Main
          title="Version Control"
          icon={<GoVersions color="#FFFFFF" size={100}/>}
          knowledge_level={2}
        >
          <Skill.Item
            title="Git"
            icon={<FaGitAlt color="#FFFFFF" size={100}/>}
            description="Git is a distributed version control system (VCS) designed for tracking changes in source code during software development."
            from_date="2022"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Bitbucket"
            icon={<FaGitAlt color="#FFFFFF" size={100}/>}
            description="Bitbucket is a web-based platform for hosting Git repositories, similar to GitHub. It provides Git repository management with features like code collaboration, version control, issue tracking, and continuous integration/continuous deployment (CI/CD) pipelines."
            from_date="2022"
            to_date="2023"
          />
        </Skill.Main>
        <Skill.Main
          title="Containerization"
          icon={<GoContainer color="#FFFFFF" size={100}/>}
          knowledge_level={1}
        >
          <Skill.Item
            title="Docker"
            icon={<FaDocker color="#FFFFFF" size={100}/>}
            description="Docker is a platform and toolset that allows developers to build, deploy, and run applications using containers."
            from_date="2023"
            to_date={new Date().getFullYear().toString()}
          />
        </Skill.Main>
        <Skill.Main
          title="Deployment"
          icon={<AiOutlineDeploymentUnit color="#FFFFFF" size={100}/>}
          knowledge_level={2}
        >
          <Skill.Item
            title="AWS"
            icon={<FaAws color="#FFFFFF" size={100}/>}
            description="AWS (Amazon Web Services) is a comprehensive and widely adopted cloud computing platform provided by Amazon."
            from_date="2023"
            to_date="2024"
          />
          <Skill.Item
            title="Jenkins"
            icon={<FaJenkins color="#FFFFFF" size={100}/>}
            description="Jenkins is an open-source automation server used for building, testing, and deploying software projects continuously."
            from_date="2024"
            to_date={new Date().getFullYear().toString()}
          />
          <Skill.Item
            title="Vercel"
            icon={<IoLogoVercel color="#FFFFFF" size={100}/>}
            description="Vercel is a cloud platform for static sites and serverless functions, optimized for fast and efficient deployments."
            from_date="2022"
            to_date={new Date().getFullYear().toString()}
          />
        </Skill.Main>
      </section> */}
    </main>
  );
}

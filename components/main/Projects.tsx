"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {


  return (
    <motion.div
      id="projects"
      initial="hidden"
      animate="visible"
      className=" justify-center px-6 mt-20 w-full z-[20] pt-10 mb-20 lg:px-20 lg:pt-0 lg:mb-1 "
    >
      <div className="h-full w-full gap-5 justify-center m-auto text-center ">

        <motion.div className="gap-6 mt-6 mb-4 text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto text-center">
          <span className="text-3xl">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-3xl sm:text-3xl lg:text-4xl">
              {" "}
              Project{" "}
            </span>
            Experience
          </span>
        </motion.div>


        <Link href="https://drive.google.com/drive/folders/1BHNcCCrogwvoDR6yCF0Q6Ti82rZplI0N?usp=sharing"
          className="text-center py-2 mt-6 px-6 button-primary text-white cursor-pointer rounded-lg max-w-[200px] text-xs lg:text-xs sm:text-lg md:text-lg " >

          <motion.a

          >

            Demo Source
          </motion.a>

        </Link>
      </div>

      <motion.div
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-10">
          <Link href="https://znuavin-animelist-v2.vercel.app/">
            <div className="overflow-y-auto max-h-[800px]">
              <ProjectCard
                src="/sss.png"
                title="1. Anime list versi satu"
                description="Ini adalah website dimana kalian bisa mengakses daftar-daftar anime terpopuler dengan tampilan berupa trailer video hingga manga. Website ini juga ada fitur berupa NEXTAUTH untuk sign in dan fitur menambah koleksi anime menggunakan ORM Prisma database."
              />
              
            </div>
          </Link>

          <Link href="https://wa.me/6281217835337">
            <div className="overflow-y-auto max-h-[800px]">
              <ProjectCard
                src="/CardImage.png"
                title="2. Fitur log in PHP murni"
                description="Ini adalah fitur login menggunakan bahasa PHP murni, agar para user bisa menginput datanya ke dalam suatu database, mulai dari daftar akun terlebih dahulu, hingga bisa masuk dashboard."
              />
            </div>
          </Link>

          <Link href="https://wa.me/6281217835337">
            <div className="overflow-y-auto max-h-[800px]">
              <ProjectCard
                src="/ss.png"
                title="3. Space themed portfolio website"
                description="Ini adalah website portfolio yang saya kembangkan menggunakan Next.js 13. Menggunakan asset berupa video untuk animasi dan menambahkan beberapa validasi untuk mengerakkan objek menggunakan React.js hingga Framer Motion."
              />
            </div>
          </Link>

          <Link href="https://wa.me/6281217835337">
            <div className="overflow-y-auto max-h-[800px]">
              <ProjectCard
                src="/cdd.jpg"
                title="4. Coming soon"
                description="Tunggu projek selanjutnya, Thank You!!!."
              />
            </div>
          </Link>
        </div>



      </motion.div>
    </motion.div>
  );
};

export default Projects;









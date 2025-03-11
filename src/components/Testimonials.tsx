"use client";
import Image from "next/image";
import ClientCard from "./clientCards";
import { motion, AnimatePresence } from "framer-motion";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

type Client = {
  name: string;
  description: string;
  rating: number;
};

const Testimonial = () => {
  //CLIENTES

  const clients: Client[] = [
    {
      name: "Daniel",
      description:
        "Amei os serviços da BravimTech, ainda mais que é em Next.js",
      rating: 5,
    },
    {
      name: "Lucas",
      description: "Gostei, só não amei porque não é em Angular",
      rating: 3,
    },
    {
      name: "Victor",
      description: "Minha empresa né pai, só as hello kitty",
      rating: 5,
    },
    {
      name: "Gabriel",
      description: "Pedi um site e me entregaram um A4, nota 0",
      rating: 0,
    },
    {
      name: "Pablo",
      description: "Se não for pra fazer Crud, eu não faço nada. GLUB GLUB",
      rating: 4,
    },
    {
      name: "Igor",
      description:
        "voçê pode me ajudar a fazer um botao ? shadcn na veia, nao precisa n ja fiz. Meu sistema de barbiaria é pra vender. muito money. e ai pode me ajudar ?... ? .... ?",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const time: number = 3000;

  /*
  animação de carrousel flip 
    @index card atual 
    @time periodo de transição
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, time);
    return () => clearInterval(interval);
  }, [clients.length, time]);

  /*
   animação com svg 
   @animeJS por ser mais performatica 
      *rect referencia do rects dos svg de acordo com o index 
      para interligar com o time do card do cliente

      *path pega o cotorno svg que esse rect irar seguir 

  */
  const trailSize = 20;
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    if (rectRefs.current.every((ref) => ref)) {
      const rect = rectRefs.current[index];
      const path = anime.path(`#motionTPath${index}`);

      if (rect)
        anime({
          targets: rect,
          translateX: path("x"),
          translateY: path("y"),
          rotate: path("angle"),
          easing: "easeOutQuad",
          duration: time,
          opacity: 1,
        });
    }

    return () => {
      anime.remove(rectRefs.current.filter(Boolean));
    };
  }, [index]);

  return (
    <div className="bg-white py-12 lg:py-24 px-[48px] text-[#18181B] overflow-hidden relative">
      <div className="flex justify-center my-2 lg:my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold mr-2">
            Nossos Clientes
          </h1>
        </div>
      </div>
      <h2
        className="text-center text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-12"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        O que os{" "}
        <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">
          clientes dizem
        </span>{" "}
        <br />
        Sobre o Nosso Serviço
      </h2>

      {/* SVG CLIENTES */}
      <div className="relative w-full flex justify-center gap-[25%] min-h-[554px]">
        {/* Lado Esquerdo */}
        <div className="relative top-0">
          {/*Cards clientes*/}
          <ClientCard position="-left-30" name={clients[0].name} />
          <ClientCard position="-left-30 top-[220px]" name={clients[1].name} />
          <ClientCard position="-left-30 bottom-0" name={clients[2].name} />

          <svg
            width="278"
            height="553"
            viewBox="0 0 278 553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
          >
            {/* Paths Visíveis */}
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path d="M0.5 265.5H277.5V259" fill="#EBEBEB" stroke="#EBEBEB" />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              stroke="#EBEBEB"
              strokeWidth="8"
            />

            {/* Paths Invisíveis */}
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              id="motionTPath0"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M0.5 265.5H277.5V259"
              id="motionTPath1"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              id="motionTPath2"
              style={{ visibility: "hidden" }}
            />

            {/* Rastros */}
            <rect
              ref={(el) => {
                rectRefs.current[0] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
            />
            <rect
              ref={(el) => {
                rectRefs.current[1] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
            />
            <rect
              ref={(el) => {
                rectRefs.current[2] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
            />
          </svg>
        </div>

        {/* Container Card Central */}
        <div className="absolute overflow-hidden mx-auto left-0 right-0 bottom-0 md:max-w-[500px] lg:max-w-[550px] h-[450px] flex flex-col gap-10 top-20 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.9 }}
              transition={{ duration: 0.3, delay: 1, ease: "backInOut" }}
              className="flex flex-col gap-4"
            >
              {/* Header Card */}
              <motion.div
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                exit={{ y: -30 }}
                transition={{ duration: 0.3, delay: 1, ease: "backInOut" }}
                className="p-4 bg-white rounded-2xl font-medium flex items-center justify-between gap-10 shadow-xl"
              >
                <Image
                  src="/images/TestimonalUser.svg"
                  alt="User"
                  width={60}
                  height={60}
                />
                <p className="text-lg font-semibold">{clients[index].name}</p>
                <Image
                  src="/images/TestimonalUser.svg"
                  alt="User"
                  width={60}
                  height={60}
                />
              </motion.div>

              {/* Body Card */}
              <div className="p-4 bg-white rounded-2xl flex flex-col justify-start h-[300px] items-center font-inter font-light text-center shadow-xl">
                <p>{clients[index].description}</p>
                <div className="mt-4 text-yellow-400">
                  {"★".repeat(clients[index].rating)}
                  {"☆".repeat(5 - clients[index].rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lado Direito */}
        <div className="top-0 relative">
          {/*Cards clientes*/}
          <ClientCard position="-right-30" name={clients[3].name} />
          <ClientCard position="-right-30 top-[250px]" name={clients[4].name} />
          <ClientCard position="-right-30 bottom-0" name={clients[5].name} />

          <svg
            width="278"
            height="553"
            viewBox="0 0 278 553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-x-[-1] hidden lg:block"
          >
            {/* Paths Visíveis */}
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path d="M0.5 265.5H277.5V259"
             fill="#EBEBEB" 
             stroke="#EBEBEB" 
             />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              stroke="#EBEBEB"
              strokeWidth="8"
            />

            {/* Paths Invisíveis */}
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              id="motionTPath3"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M0.5 265.5H277.5V259"
              id="motionTPath4"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              id="motionTPath5"
              style={{ visibility: "hidden" }}
            />

            {/* Rastros */}
            <rect
              ref={(el) => {
                rectRefs.current[3] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
            />
            <rect
              ref={(el) => {
                rectRefs.current[4] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
            />
            <rect
              ref={(el) => {
                rectRefs.current[5] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

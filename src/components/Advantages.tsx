"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Advantages = () => {

  //textos dos cards
  const cardTexts: string[] = [
    "Utilizamos as tecnologias mais recentes para construir sites que são rápidos, seguros e escaláveis. Nosso foco é garantir que sua plataforma tenha um desempenho impecável, com carregamento otimizado e uma navegação fluida, proporcionando uma experiência eficiente para todos os usuários.",

    "Focamos em otimizar o tempo de carregamento e a performance geral, garantindo uma experiência fluida para seus visitantes. Acreditamos que um site rápido melhora não apenas a usabilidade, mas também aumenta a retenção do usuário e o engajamento, tornando sua presença digital muito mais eficaz.",

    "Criamos interfaces modernas e responsivas, garantindo um design atrativo e funcional para todos os dispositivos. Desenvolvemos layouts que se adaptam perfeitamente a qualquer tela, tornando a navegação intuitiva e agradável, além de proporcionar uma identidade visual forte para sua marca.",

  ];


  /*
  animação de carrousel flip 
    @index card atual 
    @time periodo de transição
  */

  const [index, setIndex] = useState<number>(0);
  const time: number = 5000

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
  
    const startInterval = () => {
      setTimeout(() => {
        interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % cardTexts.length);
        }, time);
      }, 100); 
    };
  
    startInterval();
  
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cardTexts.length, time]);
  return (
    <div className="bg-white h-full pb-12 lg:pb-40 pt-12 text-center relative">
      {/* Badge "Vantagens" */}
      <div className="flex justify-center my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-4 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold">
            Vantagens
          </h1>
        </div>
      </div>

      {/* Título */}
      <h2
        className="text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-12"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        Descubra as vantagens <br />
        oferecidas na{" "}
        <span
          className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          BravimTech
        </span>
      </h2>

      {/* Container principal */}
      <div className="relative flex items-center justify-center w-full  min-h-[200px]">
        {/* SVG à esquerda (colado no canto) */}
        <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/Advantage.svg"
            alt="Ícone esquerdo"
            width={420}
            height={200}
          />
        </div>

        {/* Card maior */}
        <div className="z-10 relative flex items-center justify-center w-full h-48 lg:h-96 mx-8 md:mx-32 min-h-80">
          
          {/*Fundo Card para não mostrar os svgs no fundo*/}
          <div className="absolute top-0 bg-white shadow-sm rounded-2xl p-12 md:w-[600px] md:h-[400px] text-center z-10">
          {cardTexts[index === 0 ? cardTexts.length - 1 : index - 1]}
          </div>

          {/*Animação de flip card*/}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: -90, rotateX: 90 }}
              animate={{ y: 0, rotateX: 0 }}
              exit={{ y: -90, rotateX: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 bg-white shadow-sm rounded-2xl p-12 md:w-[600px] md:h-[400px] lg:w-[700px] text-center z-10"
            >
              <p className="text-[#3D3D3D] leading-relaxed text-md lg:text-xl">
                {cardTexts[index]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SVG à direita (colado no canto) */}
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 scale-[-1]">
          <Image
            src="/images/Advantage.svg"
            alt="Ícone direito"
            width={420}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;

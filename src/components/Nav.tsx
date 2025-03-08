'use client'
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-[1920px] px-6 md:px-16 lg:px-64">
      <div 
        className={`flex items-center justify-between border border-white/10 
          backdrop-blur-[4.5px] px-2 pr-5 lg:pr-2 py-2 rounded-full w-full mx-auto transition-all duration-300
          ${isScrolled ? 'bg-[rgba(80,112,255,0.35)]' : 'bg-[rgba(46,68,158,0.05)]'}`}
      >
        {/* Logo à esquerda */}
        <div className="flex-shrink-0">
          <img src="/images/Logo.png" alt="Logotipo da empresa" className="h-10 lg:h-16" />
        </div>

        {/* Botões de navegação - Desktop */}
        <div className="hidden lg:flex space-x-10">
          {["Home", "Soluções", "Benefícios", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-gray-400 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Botão de orçamento online - Desktop */}
        <div className="hidden lg:flex flex-shrink-0">
          <button className="bg-white text-black font-medium px-6 py-5 rounded-full hover:bg-blue-500 hover:text-white transition-all">
            Faça um orçamento
          </button>
        </div>

        {/* Menu Hambúrguer - Mobile e Tablet */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile e Tablet */}
      {isMenuOpen && (
  <div 
    className={`lg:hidden absolute pt-8 top-14 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[380px] 
      border border-white/10 backdrop-blur-[4.5px] p-6 rounded-3xl flex flex-col items-center space-y-6 z-40
      ${isScrolled ? 'bg-[rgba(80,112,255,0.35)]' : 'bg-[rgba(46,68,158,0.05)]'} transition-all duration-300`}
  >
    {["Home", "Soluções", "Benefícios", "Projetos", "Contato"].map((item) => (
      <a
        key={item}
        href="#"
        className="text-white text-lg hover:text-gray-300 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {item}
      </a>
    ))}
    <button 
      className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all"
      onClick={() => setIsMenuOpen(false)}
    >
      Faça um orçamento
    </button>
  </div>
)}
    </nav>
  );
};

export default Nav;
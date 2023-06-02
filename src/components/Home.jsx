import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="inicio" className='bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-black anime'>
        <p className='text-red-500 sm:mt-12'>Olá, meu nome é</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lucas Possato</h1>
        <h2 className='text-4xl sm:text-7xl font-thin text-[#8892b0]'>Eu sou um Desenvolvedor Front-End</h2>
        <p className='text-[#8892b0] py-4 max-w-[800px]'>Tenho como objetivo e especialidade construir experiências digitais da mais alta qualidade. Atualmente, tenho como foco a construção de aplicações web responsivas e atraentes.</p>
        <div>
        <Link className="hover:text-red-500"  to="projetos"  smooth={true} duration={500}>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500 group'>View Work 
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>
        </Link>      
        </div>
      </div>
    </div>
  )
}

export default Home
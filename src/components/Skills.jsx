import React from 'react';
import ReactLogo from '../assets/react.png';
import cssLogo from '../assets/css.png';
import node from '../assets/node.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import sass from '../assets/Sass_Logo_Color.svg';



const Skills = () => {
  return (
    <div name="experiencia" className=' w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl  font-bold border-b-4 border-red-500 inline'>Experiência</p>
          <p className='py-4'>Essas são as tecnologias com as quais já trabalhei.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={html} alt="HTML Icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={cssLogo} alt="CSS Icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={javascript} alt="JS Icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={ReactLogo} alt="React Icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={github} alt="Github Icon" />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={node} alt="Node Icon" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto mt-4' src={sass} alt="Sass Icon" />
            <p className='my-4'>Sass</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 py-4'>
            <img className='w-20 mx-auto' src={tailwind} alt="Tailwind Icon" />
            <p className='my-4'>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
import React from 'react'

const About = () => {
  return (
    <div name="sobre" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-500'>Sobre</p>
          </div>
          <div></div>
          </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-[2rem] font-bold'>
              <p>Olá, é um prazer ter você por aqui. Sinta-se à vontade para explorar.</p>
          </div>
          <div>
            <p>Eu sou fascinado pela construção de softwares de excelência, que sejam capazes de enriquecer a vida daqueles ao meu redor. Tenho como objetivo principal a construção de projetos variados, seja para clientes individuais, pequenos negócios ou grandes empresas. O que você seria capaz de produzir se tivesse um desenvolvedor dedicado e apaixonado pelo trabalho à sua disposição?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
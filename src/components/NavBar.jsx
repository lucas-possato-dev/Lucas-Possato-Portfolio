import React from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import Logo from '../assets/LP-Logo.png';
import {HiOutlineMail} from 'react-icons/hi';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img style={{width: '80px'}} src={Logo} alt="logo" />
      </div>
        <ul className='hidden md:flex'>
          <li><Link className="hover:text-red-500"  to="inicio"  smooth={true} duration={500}>
          Início
        </Link></li>
          <li><Link className="hover:text-red-500"  to="sobre"  smooth={true} duration={500}>
          Sobre
        </Link></li>
          <li><Link className="hover:text-red-500"  to="experiencia"  smooth={true} duration={500}>
          Experiência
        </Link></li>
          <li><Link className="hover:text-red-500"  to="projetos"  smooth={true} duration={500}>
          Projetos
        </Link></li>
          <li><Link className="hover:text-red-500"  to="contato"  smooth={true} duration={500}>
          Contato
        </Link></li>
        </ul>

      <div 
      onClick={handleClick}
      className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'><Link onClick={handleClick} className="hover:text-red-500"  to="inicio"  smooth={true} duration={1000}>
          Início
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} className="hover:text-red-500" to="sobre"  smooth={true} duration={1000}>
          Sobre
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} className="hover:text-red-500" to="experiencia"  smooth={true} duration={1000}>
          Experiência
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} className="hover:text-red-500" to="projetos"  smooth={true} duration={1000}>
          Projetos
        </Link></li>
        <li className='py-6 text-3xl'><Link onClick={handleClick} className="hover:text-red-500" to="contato"  smooth={true} duration={1000}>
          Contato
        </Link></li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/lucas-possato-a095ba272">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/lucas-possato-dev">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:lucasg_possato@hotmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default NavBar
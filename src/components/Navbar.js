import React from 'react'
import Shop from './Shop'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#4B0082] '>StyleStride</h1>
            <div className='flex text-[#4B0082] '>
                <Link className="Link block  mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4" to="/">
                        Inicio
                        </Link>
                        <Link className="Link block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4" to="/productos" >
                        Productos
                    </Link>
                    <Link className="Link block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4" to="/sobreNosotros" >
                        Sobre Nosotros
                    </Link>
                    <Link className="Link block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4" to="/contacto" >
                        Contacto
                    </Link>
                <Shop className='p-4 pl-20 pr-7'/>

          </div>
    </div>
  );
};

export default Navbar


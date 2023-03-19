import React from 'react'
import Shop from './Shop'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#4B0082] '>StyleStride</h1>
            <ul className='flex text-[#4B0082] '>
                <li className='p-4'>Inicio</li>
                <li className='p-4'>Calzado</li>
                <li className='p-4'>Indumentaria</li>
                <li className='p-4'>Accesorios</li>
                <li className='p-4 pl-20 pr-7'><Shop /></li>
            </ul>
    </div>
  )
}

export default Navbar


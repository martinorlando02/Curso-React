import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemListContainer from '../components/ItemListContainer';
import CardList from '../components/CardList';
import Navbar from '../components/Navbar';

const Productos = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true
        });
    }, []);

    return (
        <><div><Navbar /></div>
        <div className='bg-color-#D3D3D3 h-full'>
            <div className='pt-20' data-aos="fade-down" data-aos-delay="500">
                <p className='text-3xl text-black text-center'>Conoce nuestros productos</p>
                <h1 className='text-5xl text-[#4B0082] text-center mt-3 mb-3 font-bold'>POPULARES</h1>
                <CardList />
            </div>
            <div>
                <ItemListContainer greeting="Espero que te haya servido nuestra informacion acerca de nuestros productos. Soy el ItemListContainer" />
            </div>
        </div></>
    )
}

export default Productos
import React from 'react';
import Patient from '../assets/patient.png';
import Criptos from '../assets/cripto.png';
import clima from '../assets/clima.png'


const Projects = () => {
    return (
        <div name="projects" className='w-full md:h-full text-gray-300 bg-[#0a1128]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Proyectos</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-3'>

                    {/*Pi food */}
                    <div className='flex flex-wrap -m-4'>
                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={Patient} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Practice project</h1>
                                    <p className=' leading-relaxed mb-3'>Proyecto de practica que incluye un formulario controlado donde se agregan,
                                        modifican y eliminan pacientes de una veterinaria.</p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://citas-franco.netlify.app/" target="blank_"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        <a href="https://github.com/francocoll/citas_react_vite" target="blank_"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap -m-4'>
                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={Criptos} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Proyecto de practica</h1>
                                    <p className=' leading-relaxed mb-3'>Proyecto de practica donde se consume una API externa. Se realiza el cambio de una moneda elegida a criptomoneda</p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://cripto-franco.netlify.app/" target="blank_"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        <a href="https://github.com/francocoll/criptos-react-vite" target="blank_"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap -m-4'>
                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={clima} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Proyecto de practica</h1>
                                    <p className=' leading-relaxed mb-3'>Aplicacion del clima en tiempo real, donde se realizan llamadas a una API. Se puede agregar hasta un máximo de 3 ciudades, y tambien eliminar las ciudades ya cargadas.</p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://weather-app-wine-eight.vercel.app/" target="blank_"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        <a href="https://github.com/francocoll/weather-app" target="blank_"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a1128] text-gray-50'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-3xl font-bold inline border-b-4 border-[#a31621]'>About Me</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-2xl font-bold text-gray-400'>
                        <p className=''>Hi! My name is Franco, im from Córdoba, Argentina. Junior Frontend Developer </p>
                    </div>
                    <div className='text-gray-400'>
                        <p>This portfolio is made with React, Tailwind and CSS. I put some of my skills  on this project </p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

// []
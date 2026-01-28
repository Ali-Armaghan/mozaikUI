import React from 'react'
import Image from 'next/image';
import Creative from './components/creative'
import { theme } from '@/lib/theme';
import Button from '@/components/button';
import Ellipse66 from './components/Ellipse66';
import Ellipse67 from './components/Ellipse67';
const StudyArea = () => {
    const images = [

        {
            src: '/images/1.png',
            alt: 'studyarea',
        },
        {
            src: '/images/2.png',
            alt: 'studyarea',
        },
        {
            src: '/images/3.png',
            alt: 'studyarea',
        },
        {
            src: '/images/4.png',
            alt: 'studyarea',
        },
        {
            src: '/images/5.png',
            alt: 'studyarea',
        },
        {
            src: '/images/6.png',
            alt: 'studyarea',
        },
        {
            src: '/images/7.png',
            alt: 'studyarea',
        },
        {
            src: '/images/8.png',
            alt: 'studyarea',
        },
        {
            src: '/images/9.png',
            alt: 'studyarea',
        },
        {
            src: '/images/10.png',
            alt: 'studyarea',
        },
    ]
    return (
        <div>
            <section className='flex  flex-col md:h-235.25 h-screen bg-black mt-19.5'>
                <div className=' flex flex-col justify-center md:w-full w-screen relative'>

                    {/* <Ellipse66 /> */}
                    <div className='absolute top-0 mt-28.75 md:h-148 h-screen'>
                        <Ellipse67 />
                    </div>

                    {/* <Ellipse66 /> */}
                    <div className='absolute right-0 bottom-134.25 mt-28.75 md:h-148 h-screen'>
                        <Ellipse66 />
                    </div>


                    {/* heading */}
                    <div className=" flex justify-center text-center h-27.25 ">
                        <div className='md:block hidden z-10'>
                            <Creative width={611} height={109} />
                        </div>
                        <div className='md:hidden'>
                            <Creative width={300} height={109} />
                        </div>
                        {/* front text */}
                        <div className='absolute flex flex-col items-center z-20'>
                            <div className='z-20 text-center uppercase tracking-[0.225em] text-[16px] mt-6'
                                style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                            >Overview</div>
                            <div className='z-20 text-center md:text-[64px] text-[28px] h-16.25 flex leading-none'
                                style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                            > <span
                                style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>creative </span>

                                <span
                                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>industries</span>
                            </div>
                        </div>
                    </div>

                    {/* Description and Button */}
                    <div className=' md:h-39.5 h-auto mt-5 md:w-full w-screen flex flex-col items-center'>
                        <div className='md:w-218.25 w-screen text-center text-[18px] leading-8.5 h-20.5'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                            <p>Mozaik Partners allows recruiters to connect students with study areas within the growing creative economy. We have grouped these areas under 10 categories.</p>
                        </div>
                        <div className='md:mt-5 mt-30'>
                            <Button content='SEE COURSES' />
                        </div>
                    </div>

                    {/* Images Rectangle */}
                    <div className='md:h-130 h-auto mt-17.5 md:w-full w-screen p-2'>
                        <div className='grid md:grid-cols-5 grid-cols-2 '>
                            {
                                images.map((image, index) => (
                                    <div key={index}>
                                        <Image src={image.src} alt={image.alt} width={288.2} height={260} className="w-full h-auto object-cover" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>
            </section >
        </div >
    )
}

export default StudyArea
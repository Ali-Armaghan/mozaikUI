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
            <section className='relative flex flex-col h-auto bg-black mt-19.5 pb-20'>
                <div className=' flex flex-col justify-center w-full relative'>

                    {/* <Ellipse66 /> */}
                    <div className='absolute top-0 mt-28.75 min-h-148 h-auto hidden lg:block'>
                        <Ellipse67 />
                    </div>

                    {/* <Ellipse66 /> */}
                    <div className='absolute right-0 bottom-134.25 mt-28.75 h-148 hidden lg:block'>
                        <Ellipse66 />
                    </div>


                    {/* heading */}
                    <div className="relative flex justify-center items-center text-center px-4">
                        <div className='z-10 w-full max-w-[611px]'>
                            <Creative />
                        </div>
                        {/* front text */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none mt-2'>
                            <div className='text-center uppercase tracking-[0.225em] text-[12px] sm:text-[14px] md:text-[16px]'
                                style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                            >STUDY AREAS</div>
                            <div className='text-center text-[28px] sm:text-[45px] md:text-[64px] leading-tight flex flex-wrap justify-center gap-x-2'
                                style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                            >
                                <span style={{ fontWeight: theme.fonts.weight.bold }}>creative </span>
                                <span style={{ fontWeight: theme.fonts.weight.normal }}>industries</span>
                            </div>
                        </div>
                    </div>

                    {/* Description and Button */}
                    <div className='min-h-39.5 mt-8 w-full flex flex-col items-center px-4'>
                        <div className='lg:w-[870px] w-full max-w-2xl text-center text-[16px] md:text-[18px] leading-relaxed md:leading-8.5 h-auto'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                            <p>Mozaik Partners allows recruiters to connect students with study areas within the growing creative economy. We have grouped these areas under 10 categories.</p>
                        </div>
                        <div className='mt-5'>
                            <Button content='SEE COURSES' />
                        </div>
                    </div>

                    {/* Images Rectangle */}
                    <div className='mt-17.5 w-full'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
                            {
                                images.map((image, index) => (
                                    <div key={index} className="overflow-hidden">
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
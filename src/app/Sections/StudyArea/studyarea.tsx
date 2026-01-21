import React from 'react'
import Image from 'next/image';
import Creative from './components/creative'
import { theme } from '@/lib/theme';
import Button from '@/components/button';
const studyarea = () => {
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
            <section className='flex  flex-col h-[941px] bg-black'>
                <div className='mt-[78px] flex flex-col justify-center w-full'>

                    {/* heading */}
                    <div className="relative flex justify-center text-center h-[109px]">
                        <div className=' z-10'>
                            <Creative />
                        </div>
                        {/* front text */}
                        <div className='absolute flex flex-col items-center z-20'>
                            <div className='z-20 text-center uppercase tracking-[0.225em] text-[16px] mt-6'
                                style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                            >Overview</div>
                            <div className='z-20 text-center text-[64px] h-[65px] flex leading-none'
                                style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                            > <span
                                style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>creative </span>

                                <span
                                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>industries</span>
                            </div>
                        </div>
                    </div>

                    {/* Description and Button */}
                    <div className=' h-[158px] mt-[20px] w-full flex flex-col items-center'>
                        <div className='w-[873px] text-center text-[18px] leading-[34px] h-[82px]'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                            <p>Mozaik Partners allows recruiters to connect students with study areas within the growing creative economy. We have grouped these areas under 10 categories.</p>
                        </div>
                        <div className='mt-[20px]'>
                            <Button content='SEE COURSES' />
                        </div>
                    </div>

                    {/* Images Rectangle */}
                    <div className='h-[520px] mt-[70px] w-ful'>
                        <div className='grid grid-cols-5'>
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

export default studyarea
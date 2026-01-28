import React from 'react'
import { theme } from '@/lib/theme';
import Worldwidee from '@/components/worldwidee';
import EarthVector from '@/components/eathvector'
const OverviewSection = () => {
    return (
        <div>
            {/* <section className="flex items-center flex-col bg-amber-100"> */}
            <section className="flex items-center flex-col h-[896px]">
                <div className=" md:mt-[63px] mt-[20px] flex justify-center ">
                    <div className='md:w-[798px] w-[400px] h-[95px] z-10'>
                        <Worldwidee />
                    </div>
                    {/* front text */}
                    <div className='absolute flex flex-col items-center z-20 mt-6'>
                        <div className='z-20 text-center uppercase tracking-[0.225em] text-[16px]'
                            style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                        >Overview</div>
                        <div className='z-20 text-center md:text-[64px] text-[45px]'
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                        > <span
                            style={{ fontWeight: theme.fonts.weight.normal }}>we are </span>
                            <span
                                style={{ fontWeight: theme.fonts.weight.bold }}>worldwide</span></div>
                    </div>

                </div>
                {/* earth Vector */}
                <div className='md:absolute md:h-[472px] md:mt-[205px] h-[200px] mt-[100px]'>
                    <EarthVector width={1118} height={472} />
                </div>
                <div className='md:hidden'>
                    <EarthVector width={500} height={200} />
                </div>
                {/* Paragraph Text */}
                <div className='md:absolute md:mt-[697px] md:text-center absolute mt-[597px] text-center '>
                    <p className='mx-[20%] md:text-[18px] text-[14px]'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>Mozaik Partners is a global reward and recognition program designed to help our agent members succeed in recruiting, supporting, and enabling future students to enrol into premium creative colleges. </p>
                    <p className='md:mx-[20%] mx-[10%] mt-[24px] md:text-[18px] text-[14px]'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                        We provide you with the ecosystem and tools for you to build a sustainable business... a business that transforms students' lives and supports the next generation of creative professional.                             </p>
                </div>
            </section>

        </div>
    )
}

export default OverviewSection
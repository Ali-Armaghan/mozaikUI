import { theme } from '@/lib/theme';
import Button from '@/components/button';
import Foundation from './components/foundation';
import Icon24_7 from './components/icons/Icon24_7';
import World from './components/icons/world';
import Bulb from './components/icons/bulb';
import Note from './components/icons/note';
const services = () => {
    return (
        // parent div
        <div className="w-full min-h-[784px] py-12 md:py-20 bg-[#EC4762] flex flex-col items-center overflow-hidden">


            {/* heading */}
            <div className="relative w-full max-w-[830px] flex justify-center text-center px-4 mt-[51px]">
                <div className='z-10 w-full'>
                    <Foundation />
                </div>
                {/* front text */}
                <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
                    <div className='z-20 text-center uppercase tracking-[0.225em] text-[14px] md:text-[16px]'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                    >SERVICES</div>
                    <div className='z-20 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mt-2 flex leading-none'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                    > <span
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>partner </span>

                        <span
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>&nbsp;support</span>
                    </div>
                </div>
            </div>

            {/* Description and Button */}
            <div className='mt-8 md:mt-[22px] w-full max-w-[891px] px-6 flex flex-col items-center'>
                <div className='text-center text-base md:text-[18px] leading-relaxed md:leading-8.5'
                    style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                    <p>Whether you are an established study agent or you are new to the international student education sector, we have the appropriate partner support framework to help you grow your business. Example of services we prove are: </p>
                </div>
                <div className='mt-8 md:mt-[50px]'>
                    <Button content='BE ONE OF US'
                        size={229}
                        color={theme.colors.primary}
                        bg={theme.colors.text} />
                </div>
            </div>

            {/* icons & description */}
            <div className='w-full max-w-[1121px] mt-16 md:mt-[64px] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
                {/* 1st icon */}
                <div className='flex flex-col items-center'>
                    {/* icon */}
                    <div className="flex items-center justify-center h-20">
                        <Icon24_7 />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-base md:text-[18px] text-center capitalize mt-6 md:mt-[31px] max-w-[200px]'>24/7 support services to all members</p>
                    </div>
                </div>
                {/* 2nd icon */}
                <div className='flex flex-col items-center'>
                    {/* icon */}
                    <div className="flex items-center justify-center h-20">
                        <World />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-base md:text-[18px] text-center capitalize mt-6 md:mt-[31px] max-w-[220px]'>Invitations to global creative expo events</p>
                    </div>
                </div>
                {/* 3rd icon */}
                <div className='flex flex-col items-center'>
                    {/* icon */}
                    <div className="flex items-center justify-center h-20">
                        <Bulb />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-base md:text-[18px] text-center capitalize mt-6 md:mt-[31px] max-w-[220px]'>Smart tools for improving sales conversion ratios</p>
                    </div>
                </div>
                {/* 4th icon */}
                <div className='flex flex-col items-center'>
                    {/* icon */}
                    <div className="flex items-center justify-center h-20">
                        <Note />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-base md:text-[18px] text-center capitalize mt-6 md:mt-[31px] max-w-[220px]'>Up to date creative industry and education news</p>
                    </div>
                </div>
            </div>
            {/* last line */}

            <div className='text-[14px] md:text-[16px] mt-12 md:mt-[48px] px-6 text-center max-w-[800px]'>
                <p
                    style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                >We create the right environment for our members to excel in what they are best at doing... connecting students to colleges.</p>
            </div>


        </div>
    )
}

export default services
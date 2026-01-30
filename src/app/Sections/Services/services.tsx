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
        <div className="w-full h-[784px] bg-[#EC4762] flex flex-col items-center">


            {/* heading */}
            <div className="h-[104px] flex justify-center text-center mt-[51px]">
                <div className=' z-10'>
                    <Foundation />
                </div>
                {/* front text */}
                <div className='absolute flex flex-col items-center z-20'>
                    <div className='z-20 text-center uppercase tracking-[0.225em] text-[16px] mt-6'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                    >SERVICES</div>
                    <div className='z-20 text-center text-[64px] h-16.25 flex leading-none'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                    > <span
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>partner </span>

                        <span
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>&nbsp;support</span>
                    </div>
                </div>
            </div>

            {/* Description and Button */}
            <div className=' h-[184px] mt-[22px] w-full flex flex-col items-center'>
                <div className='w-[891px] text-center text-[18px] leading-8.5 h-20.5'
                    style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                    <p>Whether you are an established study agent or you are new to the international student education sector, we have the appropriate partner support framework to help you grow your business. Example of services we prove are: </p>
                </div>
                <div className='mt-[50px]'>
                    <Button content='BE ONE OF US'
                        size={229}
                        color={theme.colors.primary}
                        bg={theme.colors.text} />
                </div>
            </div>

            {/* icons & description */}
            <div className='w-[1121px] h-[235px] mt-[64px] flex flex-row justify-between'>
                {/* 1st icon */}
                <div className='h-[235px] w-[219px] flex flex-col items-center'>
                    {/* icon */}
                    <div>
                        <Icon24_7 />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-[18px] space-y-4 text-center capitalize mt-[31px]'>24/7 support services to all members</p>
                    </div>
                </div>
                {/* 2nd icon */}
                <div className='h-[235px] w-[265px] flex flex-col items-center'>
                    {/* icon */}
                    <div>
                        <World />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-[18px] space-y-4 text-center capitalize mt-[31px]'>Invitations to global creative expo events</p>
                    </div>
                </div>
                {/* 3rd icon */}
                <div className='h-[235px] w-[252px] flex flex-col items-center'>
                    {/* icon */}
                    <div>
                        <Bulb />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-[18px] space-y-4 text-center capitalize mt-[31px]'>Smart tools for improving sales conversion ratios</p>
                    </div>
                </div>
                {/* 4th icon */}
                <div className='h-[235px] w-[275px] flex flex-col items-center'>
                    {/* icon */}
                    <div>
                        <Note />
                    </div>
                    {/* description */}
                    <div
                        style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}>
                        <p
                            className='text-[18px] space-y-4 text-center capitalize mt-[31px]'>Up to date creative industry and education news</p>
                    </div>
                </div>
            </div>
            {/* last line */}

            <div className='text-[16px] mt-[48px] flex flex-col items-center'>
                <p
                    style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                >We create the right environment for our members to excel in what they are best at doing... connecting students to colleges.</p>
            </div>


        </div>
    )
}

export default services
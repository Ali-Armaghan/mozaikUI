import Logo from '@/components/logo'
import { theme } from '@/lib/theme'
import Button from '@/components/button'
import Socialicon from './components/socialicon'
const Footer = () => {
    return (
        // parent div
        <div className='w-full lg:h-[443px] h-auto flex flex-col items-center lg:justify-center py-10 lg:py-0'>
            {/* child div */}
            <div className='w-full lg:h-[345px] h-auto flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0'>
                {/* left div */}
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                    {/* logo */}
                    <div className='mt-[49px] h-[116.69px] w-[142px]'>
                        <Logo />
                    </div>
                    {/* text */}
                    <div className='mt-[23px] lg:h-[79px] h-auto text-[16px] w-full max-w-[319px]'>
                        <p
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>Aliquam dignissim tempor praesent semper est purus. Nisl etiam imperdiet magna urna interdum. </p>
                    </div>
                </div>

                {/* links container */}
                <div className='flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-0'>
                    {/* link */}
                    <div className='w-full sm:w-[110px] h-auto lg:h-[232px] mt-[60px] lg:ml-[75px] flex flex-col gap-[24px] items-center lg:items-start text-center lg:text-left'>
                        <h4
                            className='text-[18px]'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold, color: theme.colors.text }}
                        >Quick Links</h4>
                        <ul
                            className='flex flex-col text-[16px] leading-[24px] gap-[16px]'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.link }}>
                            <li>Discover</li>
                            <li>Study Areas</li>
                            <li>Events</li>
                            <li>Partners</li>
                            <li>About us</li>
                        </ul>
                    </div>

                    {/* link 2*/}
                    <div className='w-full sm:w-[142px] h-auto lg:h-[232px] mt-[60px] lg:ml-[85px] flex flex-col gap-[24px] items-center lg:items-start text-center lg:text-left'>
                        <h4
                            className='text-[18px]'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold, color: theme.colors.text }}
                        >Policies</h4>
                        <ul
                            className='flex flex-col text-[16px] leading-[24px] gap-[16px]'
                            style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.link }}>
                            <li>Cookie Policy</li>
                            <li>Tems & Condition</li>
                            <li>FAQs</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>

                {/* Text Description */}
                <div className='w-full max-w-[449px] h-auto lg:h-[205px] lg:ml-[70px] mt-[60px] gap-[10px] flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <h4 className='text-[24px]'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold, color: theme.colors.primary }}>
                        Want to Partner with us?
                    </h4>
                    <p className='text-[16px] opacity-65 w-full sm:w-[415px]'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt.
                    </p>
                    {/* email */}
                    <div className='flex flex-col sm:flex-row gap-[15px] justify-center items-center w-full px-4 sm:px-0'>
                        {/* input */}
                        <div className='w-full sm:w-auto'>
                            <input
                                className='w-full sm:w-[284px] h-[56px] bg-white text-center my-[8px] sm:my-[16px] text-[#2E2E2E] focus:outline-none'
                                type="text" placeholder="Enter Your Adress Email"
                                style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal }} />
                        </div>
                        <div className='w-full sm:w-auto flex justify-center'>
                            <Button
                                content="SUBMIT"
                                size={150}
                            />
                        </div>

                    </div>

                </div>

            </div>
            <div className='w-full flex flex-col items-center mt-10 lg:mt-0 px-4'>
                {/* line */}
                <div className='w-full lg:w-[1280px] h-px bg-white '></div>

                <div className='w-full lg:w-[1280px] h-auto lg:h-[72px] flex flex-col lg:flex-row justify-between items-center text-[16px] py-6 lg:py-0 gap-4 lg:gap-0'>
                    <p
                        className='text-center lg:text-left'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                    >Copyright © 2022 mozaikplay - All Rights Reserved.</p>
                    <Socialicon />
                </div>
            </div>

        </div>
    )
}

export default Footer
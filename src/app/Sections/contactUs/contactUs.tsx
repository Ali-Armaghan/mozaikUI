import { theme } from '@/lib/theme';
import Button from '@/components/button';
import MozaikPlay from './Components/mozaikplay'

const ContactUs = () => {
    return (
        <div className='w-full h-[288px] bg-[#FE4D6A] flex flex-col justify-center items-center'>
            {/* heading */}
            <div className="relative w-full max-w-[864px] h-auto min-h-[60px] md:h-[134px] flex justify-center text-center px-4">
                <div className='z-10 w-full max-w-[864px]'>
                    <MozaikPlay />
                </div>
                {/* front text */}
                <div className='absolute inset-0 flex flex-col items-center justify-center z-20 w-full'>
                    <div className='z-20 text-center uppercase tracking-[0.225em] text-[14px] md:text-[16px]'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                    >CONTACT US</div>
                    <div className='z-20 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mt-5 flex leading-none whitespace-nowrap'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                    >
                        <span
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>grow with</span>
                        <span
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>&nbsp;confidence</span>
                    </div>
                </div>
            </div>

            <div className='mt-9 md:mt-[50px] space-x-1'>
                <Button content='SIGN UP NOW'
                    size={223}
                    color={theme.colors.primary}
                    bg={theme.colors.text} />
            </div>

        </div>
    )
}

export default ContactUs
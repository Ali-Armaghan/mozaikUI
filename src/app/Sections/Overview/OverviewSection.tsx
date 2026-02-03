import { theme } from '@/lib/theme';
import Worldwidee from '@/components/worldwidee';
import EarthVector from '@/components/eathvector'
const OverviewSection = () => {
    return (
        <div>
            {/* <section className="flex items-center flex-col bg-amber-100"> */}
            <section className="flex items-center flex-col lg:h-[896px] md:h-[750px] h-[720px]">
                <div className=" mt-[63px] w-full flex justify-center ">
                    <div className='w-[80%] lg:w-[798px] h-[95px] z-10'>
                        <Worldwidee />
                    </div>
                    {/* front text */}
                    <div className='absolute flex flex-col items-center z-20 mt-4 md:mt-6 px-4 w-full'>
                        <div className='z-20 text-center uppercase tracking-[0.225em] text-[12px] md:text-[14px] lg:text-[16px]'
                            style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                        >Overview</div>
                        <div className='z-20 text-center text-[32px] sm:text-[48px] lg:text-[64px] leading-tight mt-1 md:mt-0'
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                        >
                            <span style={{ fontWeight: theme.fonts.weight.normal }}>we are </span>
                            <span style={{ fontWeight: theme.fonts.weight.bold }}>worldwide</span>
                        </div>
                    </div>

                </div>
                {/* earth Vector */}
                <div className='absolute md:mt-[205px] mt-[150px] w-[80%] xl:w-[1118px] overflow-hidden'>
                    <EarthVector />
                </div>
                {/* Paragraph Text */}
                <div className='absolute xl:mt-[697px] lg:mt-[650px] md:mt-[550px] mt-[400px] text-center'>
                    <p className='xl:mx-[20%] lg:mx-[10%] md:mx-[8%] mx-[5%] md:text-[18px] text-[16px]'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>Mozaik Partners is a global reward and recognition program designed to help our agent members succeed in recruiting, supporting, and enabling future students to enrol into premium creative colleges. </p>
                    <p className='xl:mx-[20%] lg:mx-[10%] md:mx-[8%] mx-[5%] mt-[24px] md:text-[18px] text-[16px]'
                        style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                        We provide you with the ecosystem and tools for you to build a sustainable business... a business that transforms students' lives and supports the next generation of creative professional.                             </p>
                </div>
            </section>

        </div>
    )
}

export default OverviewSection
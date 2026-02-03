import CoverBG from "./components/coverBG";
import Mozaik from "./components/mozaik";
import { theme } from "@/lib/theme";
import TopElips from "./components/elip1";
import ButtonElips from "./components/elip2";
import Image from "next/image";

const LearnMore = () => {
    return (
        <div className="relative w-full min-h-[500px] xl:h-[896px] overflow-hidden flex flex-col items-center py-10 xl:py-0">
            <div className="absolute inset-0 z-0">
                <CoverBG />
                <div className="absolute top-0 left-0 z-20 w-[50%] md:w-auto">
                    <TopElips />
                </div>
                <div className="absolute bottom-0 right-0 z-20 w-[50%] md:w-auto">
                    <ButtonElips />
                </div>

            </div>

            {/* parent div */}
            <div className="relative z-0 w-full flex flex-col items-center">


                {/* title */}
                <div className="mt-8 xl:mt-[63px] flex flex-col items-center justify-center relative px-4">
                    <div className='w-full max-w-[544px] lg:w-[544px] lg:h-[109px] z-10 flex justify-center'>
                        <Mozaik />
                    </div>
                    {/* front text */}
                    <div className='absolute flex flex-col items-center z-10 mt-6 md:mt-9'>
                        <div className='z-20 text-center uppercase tracking-[0.225em] text-[12px] md:text-[16px]'
                            style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                        >Overview</div>
                        <div className='z-20 text-center text-3xl sm:text-5xl md:text-[64px] flex leading-none mt-1'
                            style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                        > <span
                            style={{ fontWeight: theme.fonts.weight.normal }}>learn </span>
                            <span
                                style={{ fontWeight: theme.fonts.weight.bold }}>&nbsp;more</span></div>
                    </div>

                </div>



            </div>
            {/* video player */}
            <div className="relative z-0 mt-12 xl:mt-2 px-4 w-full flex justify-center">
                <div className="w-full max-w-[1368px] aspect-video xl:h-auto z-10">
                    <Image width={1368} height={642} src='/images/finearts.png' alt="Video" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    )
}

export default LearnMore
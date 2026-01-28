import Image from 'next/image';
import Course from './components/course';
import { theme } from '@/lib/theme';
import Arrow from './components/arrow';
import Program from './components/program';
import Arrowhead from './components/arrowhead';
import Button from '@/components/button';
import Global from './components/global';

const featured = () => {
  return (
    <div>
      <section className="flex flex-col items-center top-705.5 h-669.5 bg-amber-400">
        {/* SECTION 01 premium College */}

        <div className=" flex h-154  mt-8.5 w-full bg-black justify-center items-center">
          {/* content */}
          <div className="flex flex-row h-[491px]  w-[1264px]">
            <div className='flex flex-col'>
              {/* heading */}
              <div className=" flex justify-left text-left h-27.25 mt-1">

                {/* front text */}
                <div className='absolute flex flex-col items-left z-20'>
                  <div className='z-20 uppercase tracking-[0.225em] text-[16px]'
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                  >TAGLINE HERE</div>
                  <div className='z-20 text-[64px] h-16.25 flex leading-none '
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                  > <span
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>premium </span>

                    <span
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>&nbsp;colleges</span>
                  </div>
                </div>
                <div className=' z-10'>
                  <Course />
                </div>
              </div>
              {/* Description and Button */}
              <div className='flex flex-col mt-5 w-[629px] gap-[25px]'>
                <div className='w-[629px] text-left text-[18px] leading-8.5'
                  style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                  <p>We have already done the hard work of identifying and curating the best premium creative colleges across 4 continents. Our members have now access to thousands of courses that are offered across different formats and delivery mode. You can connect students to bachelor degrees, master programs, certificates, diplomas, and short courses that are either offered online or on campus.</p>
                </div>
                <div className='h-[34px] text-[18px] items-center flex'>
                  <span
                    style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                  >See the full school list </span>
                  <span
                    style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.primary }}
                  >&nbsp;here &nbsp;</span>
                  <Arrow />
                </div>

              </div>


            </div>

            {/* image */}
            <div className="w-[556px] h-[421px] ml-[140px]">
              <Image width={556} height={421} src='/images/gnomon.png' alt="" />
            </div>
          </div>
        </div>

        {/* SECTION 02 easy to use platform */}

        <div className="h-[655px] w-full flex justify-center items-center bg-black">
          {/* child div */}
          <div className="h-[563px] w-[1295px] flex justify-center items-center gap-[60px]">
            {/* image left side */}
            <div className='h-[563px] w-[550px] flex justify-center items-center'>
              <Image width={534} height={388.75} src='/images/easytouse.png' alt="" />
            </div>

            {/* content right side */}
            <div className='h-[563px] w-[745px] gap-[20px] flex flex-col'>
              {/* heading */}
              <div>

                <div className='flex flex-col'>
                  {/* heading */}
                  <div className=" flex justify-left text-left h-27.25 mt-1">

                    {/* front text */}
                    <div className='absolute flex flex-col items-left z-20'>
                      <div className='z-20 uppercase tracking-[0.225em] text-[16px]'
                        style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                      >TAGLINE HERE</div>
                      <div className='z-20 text-[64px] h-16.25 flex leading-none '
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                      > <span
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>easy to use  </span>

                        <span
                          style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>&nbsp;platform</span>
                      </div>
                    </div>
                    <div className=' z-10'>
                      <Program />
                    </div>
                  </div>
                  {/* Description*/}
                  <div className='flex flex-col w-[629px] gap-[25px]'>
                    <div className='w-[629px] text-left text-[18px] leading-7.5'
                      style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                      <p>An all-in-one student recruitment platform that enables our members to manage and grow their business.</p>
                    </div>
                  </div>
                </div>

              </div>
              {/* KeyPoints and button */}
              <div className='h-[277px] w-[657px] flex '>
                {/* text */}
                <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                  className='text-[16px] leading-[29.5px] tracking-normal'>
                  <ol className='space-y-6'>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>An agency CRM to send personalised quotes, manage the full student pipeline, manage all stages of the student application process, and enroll students.</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>Access to a library of creative digital assets that support your marketing campaigns.</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>Easy-to-use dashboard. Sales reports so that you can take control of your pipeline conversion.</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>Bootcamp training videos with tips on how to grow your recruitment business.</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className='h-[560px] w-[248px]'>
                <Button
                  content="USE OUR PLATFORM"
                  size={248} />
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 03 easy to use platform */}

        <div className='h-[635px] w-full flex justify-center items-center bg-amber-200'>
          {/* child div */}
          <div className='h-[582px] w-[1295px] bg-amber-700 '>
            {/* content left side */}
            <div className='h-[582px] w-[680px] bg-black gap-[20px] flex flex-col '>
              {/* heading */}
              <div className="relative flex flex-col justify-start text-left min-h-[160px]">
                {/* front text - determines height */}
                <div className='relative flex flex-col items-start z-20'>
                  <div className='z-20 uppercase tracking-[0.225em] text-[16px]'
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                  >TAGLINE HERE</div>
                  <div className='z-20 text-[64px] leading-[1.1] '
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}>
                    <div
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>countless</div>
                    <div
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>destinations</div>
                  </div>
                </div>
                <div className='absolute z-10 top-0 left-0'>
                  <Global />
                </div>
              </div>
              {/* Arrow Points */}
              <div className='h-[406px] w-[518px]  bg-amber-300'>
                Hi
              </div>
            </div>
            {/* image right side */}
            <div>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default featured
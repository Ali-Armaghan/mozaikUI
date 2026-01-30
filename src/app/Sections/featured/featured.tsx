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
      <section className="relative flex flex-col items-center bg-black py-20">
        {/* SECTION 01 premium College */}

        <div className="flex min-h-[616px] mt-8.5 w-full bg-black justify-center items-center py-10">
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

        <div className="min-h-[655px] w-full flex justify-center items-center py-10">
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

        <div className='min-h-[635px] w-full flex justify-center items-center py-10'>
          {/* child div */}
          <div className='h-[582px] w-[1295px] flex items-center '>
            {/* content left side */}
            <div className='h-[582px] w-[680px] gap-[20px] flex flex-col '>
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
              <div className='h-[406px] w-[518px]  '>
                {/* 1st row */}
                <div className='h-[223px] w-[518px] flex justify-between gap-[49px]'>
                  {/* left 1st */}
                  <div className='w-[123px]'>
                    {/* heading */}
                    <div
                      style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>
                      Europe
                    </div>
                    {/* list */}
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[18px] leading-[28px] tracking-normal mt-[12px]'>
                      <ul>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>France</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Spain</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Belgium</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Italy</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Germany</span>
                        </li>
                      </ul>

                    </div>
                  </div>
                  {/* center 2nd */}
                  <div className='w-[153px]'>
                    {/* heading */}
                    <div
                      style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>
                      Asia Pacific
                    </div>
                    {/* list */}
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[18px] leading-[26px] tracking-normal mt-[12px]'>
                      <ul>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Australia</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>New Zealand</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Singapore</span>
                        </li>
                      </ul>

                    </div>
                  </div>
                  {/* right 3rd */}
                  <div className='w-[144px]'>
                    {/* heading */}
                    <div
                      style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>
                      Europe
                    </div>
                    {/* list */}
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[18px] leading-[28px] tracking-normal mt-[12px]'>
                      <ul>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>France</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Spain</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Belgium</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Italy</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Germany</span>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
                {/* 2nd row */}
                <div className='mt-[25px] flex gap-[27px]'>
                  {/* 1st */}
                  <div className='w-[145px]'>
                    {/* heading */}
                    <div
                      style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>
                      South America
                    </div>
                    {/* list */}
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[18px] leading-[28px] tracking-normal mt-[14px]'>
                      <ul>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Colombia</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Mexico</span>
                        </li>
                      </ul>

                    </div>
                  </div>
                  {/* 2nd */}
                  <div className='w-[144px]'>
                    {/* heading */}
                    <div
                      style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>
                      South America
                    </div>
                    {/* list */}
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[18px] leading-[28px] tracking-normal mt-[14px]'>
                      <ul>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Colombia</span>
                        </li>
                        <li className='flex items-start gap-4 mb-[10px]'>
                          <div className='mt-[6px] shrink-0'>
                            <Arrowhead />
                          </div>
                          <span>Mexico</span>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className=' w-[615px] flex justify-end'>
              <Image width={518} height={406} src="/images/countless_Image.png" alt="countless_Image" />
            </div>

          </div>

        </div>

        {/* SECTION 04  Low Fees */}

        <div className="min-h-[655px] w-full flex justify-center items-center py-10">
          {/* child div */}
          <div className="h-[563px] w-[1295px] flex justify-center items-center gap-[60px]">
            {/* image left side */}
            <div className='h-[563px] w-[550px] flex justify-center items-center'>
              <Image width={534} height={388.75} src='/images/low_Fee.png' alt="" />
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
                      >
                        <span
                          style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>low fees,</span>

                        <span
                          style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>&nbsp;high return</span>
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
                      <p>Attractive commercial terms facilitate stronger relationships between partners. We provide:</p>
                    </div>
                  </div>
                </div>

              </div>
              {/* KeyPoints and button */}
              <div className='h-[277px] w-[643px] flex '>
                {/* text */}
                <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                  className='text-[18px] leading-[28px] tracking-normal'>
                  <ol className='space-y-6'>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>Low subscription fee (from USD $99/month) with higher than standard commission payments (avg. USD $2,000 per student enrolled).</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>Seamless and quick commission payments with full visibility.</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='mt-[6px] shrink-0'>
                        <Arrowhead />
                      </div>
                      <span>Just in case you missed it, we pass over the full commission amount we receive from the colleges - our members get 100% of the commission!</span>
                    </li>

                  </ol>
                </div>
              </div>
              <div className='h-[560px] w-[248px]'>
                <Button
                  content="CHECK OUR PRICING"
                  size={217} />
              </div>

            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default featured
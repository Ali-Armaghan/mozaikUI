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
      <section className="relative flex flex-col items-center bg-black py-1">
        {/* SECTION 01 premium College */}

        <div className="flex min-h-auto xl:min-h-[616px] mt-8.5 w-full bg-black justify-center items-center py-10 xl:py-1 px-4 md:px-10 xl:px-0">
          {/* content xl */}
          <div className="flex flex-col xl:flex-row h-auto xl:h-[491px] w-full xl:w-[1264px] items-center xl:items-start justify-between">
            <div className='flex flex-col items-center xl:items-start'>
              {/* heading */}
              <div className="flex relative justify-center xl:justify-start text-center xl:text-left w-full max-w-[581px] h-auto min-h-[60px] xl:min-h-[109px] xl:h-27.25 mt-1">

                {/* front text */}
                <div className='absolute inset-0 flex flex-col items-center xl:items-start justify-center z-20'>
                  <div className='z-20 uppercase tracking-[0.225em] text-[12px] sm:text-[14px] xl:text-[16px]'
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                  >TAGLINE HERE</div>
                  <div className='z-20 text-[28px] sm:text-[45px] xl:text-[64px] flex leading-none mt-2'
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                  >
                    <span style={{ fontWeight: theme.fonts.weight.bold }}>premium </span>
                    <span style={{ fontWeight: theme.fonts.weight.normal }}>&nbsp;colleges</span>
                  </div>
                </div>
                <div className='z-10 w-full flex justify-center xl:justify-start'>
                  <Course />
                </div>
              </div>

              {/* Description and Button */}
              <div className='flex flex-col mt-10 xl:mt-5 w-full xl:w-[629px] gap-[25px] items-center xl:items-start text-center xl:text-left'>
                <div className='w-full text-[16px] xl:text-[18px] leading-relaxed xl:leading-8.5 font-montserrat'
                  style={{ fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                  <p>We have already done the hard work of identifying and curating the best premium creative colleges across 4 continents. Our members have now access to thousands of courses that are offered across different formats and delivery mode. You can connect students to bachelor degrees, master programs, certificates, diplomas, and short courses that are either offered online or on campus.</p>
                </div>
                <div className='h-auto xl:h-[34px] text-[16px] xl:text-[18px] items-center flex flex-wrap justify-center xl:justify-start'>
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
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end items-center mt-12 xl:mt-0">
              <div className="w-full max-w-[556px] ">
                <Image width={556} height={421} src='/images/gnomon.png' alt="Premium College" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 02 easy to use platform */}

        <div className="min-h-auto xl:min-h-[655px] w-full flex justify-center items-center py-10 xl:py-1 px-4 md:px-10 xl:px-0">
          {/* child div */}
          <div className="h-auto w-full xl:w-[1295px] flex flex-col-reverse xl:flex-row justify-center items-center gap-10 xl:gap-[60px]">
            {/* image left side */}
            <div className='w-full xl:w-1/2 flex justify-center xl:justify-start items-center mt-12 xl:mt-0'>
              <div className="w-full max-w-[534px] ">
                <Image width={534} height={388.75} src='/images/easytouse.png' alt="Easy to use platform" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* content right side */}
            <div className='h-auto w-full xl:w-[745px] gap-[20px] flex flex-col items-center xl:items-start'>
              {/* heading */}
              <div className="w-full">

                <div className='flex flex-col items-center xl:items-start'>
                  {/* heading */}
                  <div className="flex relative justify-center xl:justify-start text-center xl:text-left w-full h-auto min-h-[60px] xl:min-h-[109px] xl:h-27.25 mt-1">

                    {/* front text */}
                    <div className='absolute inset-0 flex flex-col items-center xl:items-start justify-center z-20'>
                      <div className='z-20 uppercase tracking-[0.225em] text-[12px] sm:text-[14px] xl:text-[16px]'
                        style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                      >TAGLINE HERE</div>
                      <div className='z-20 text-[35px] sm:text-[45px] xl:text-[50px] 2xl:text-[64px] flex leading-none mt-2 flex-wrap xl:flex-nowrap whitespace-normal xl:whitespace-nowrap justify-center xl:justify-start'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                      >
                        <span style={{ fontWeight: theme.fonts.weight.bold }}>easy to use  </span>
                        <span style={{ fontWeight: theme.fonts.weight.normal }}>&nbsp;platform</span>
                      </div>
                    </div>
                    <div className='z-10 w-full flex justify-center xl:justify-start'>
                      <Program />
                    </div>
                  </div>
                  {/* Description*/}
                  <div className='flex flex-col w-full xl:w-[629px] gap-[25px] mt-8 xl:mt-0 text-center xl:text-left'>
                    <div className='w-full text-[16px] xl:text-[18px] leading-relaxed xl:leading-7.5 font-montserrat'
                      style={{ fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                      <p>An all-in-one student recruitment platform that enables our members to manage and grow their business.</p>
                    </div>
                  </div>
                </div>

              </div>
              {/* KeyPoints and button */}
              <div className='h-auto w-full xl:w-[657px] flex justify-center xl:justify-start'>
                {/* text */}
                <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                  className='text-[14px] xl:text-[16px] leading-relaxed xl:leading-[29.5px] tracking-normal'>
                  <ol className='space-y-4 xl:space-y-6 text-left'>
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
              <div className='h-auto w-full max-w-[248px] mt-6'>
                <Button
                  content="USE OUR PLATFORM"
                  size={248} />
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 03 easy to use platform */}

        <div className='min-h-auto xl:min-h-[635px] w-full flex justify-center items-center py-10 px-4 md:px-10 xl:px-0'>
          {/* child div */}
          <div className='h-auto w-full xl:w-[1295px] flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-0'>
            {/* content left side */}
            <div className='h-auto w-full xl:max-w-[680px] gap-[20px] flex flex-col items-center xl:items-start'>
              {/* heading */}
              <div className="relative flex flex-col justify-start text-center xl:text-left min-h-auto xl:min-h-[160px] w-full">
                {/* front text - determines height */}
                <div className='relative flex flex-col items-center xl:items-start z-20'>
                  <div className='z-20 uppercase tracking-[0.225em] text-[12px] sm:text-[14px] xl:text-[16px]'
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                  >TAGLINE HERE</div>
                  <div className='z-20 text-[35px] sm:text-[45px] xl:text-[64px] leading-[1.1] mt-2'
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}>
                    <div
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>countless</div>
                    <div
                      style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>destinations</div>
                  </div>
                </div>
                <div className='absolute z-10 top-0 left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 w-[70%] min-[480px]:w-full max-w-[450px]'>
                  <Global />
                </div>
              </div>

              {/* Arrow Points */}
              <div className='h-auto w-full'>
                <div className='grid grid-cols-3 gap-y-10 gap-x-6'>
                  {/* Europe */}
                  <div className='w-full text-left'>
                    <div style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>Europe</div>
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[16px] xl:text-[18px] leading-relaxed tracking-normal mt-3'>
                      <ul className='space-y-2'>
                        {['France', 'Spain', 'Belgium', 'Italy', 'Germany'].map(country => (
                          <li key={country} className='flex items-start gap-4'>
                            <div className='mt-[6px] shrink-0'><Arrowhead /></div>
                            <div>{country}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Asia Pacific */}
                  <div className='w-full text-left'>
                    <div style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>Asia Pacific</div>
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[16px] xl:text-[18px] leading-relaxed tracking-normal mt-3'>
                      <ul className='space-y-2'>
                        {['Australia', 'New Zealand', 'Singapore'].map(country => (
                          <li key={country} className='flex items-start gap-4'>
                            <div className='mt-[6px] shrink-0'><Arrowhead /></div>
                            <div>{country}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* North America 2 */}
                  <div className='w-full text-left'>
                    <div style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>North America</div>
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[16px] xl:text-[18px] leading-relaxed tracking-normal mt-3'>
                      <ul className='space-y-2'>
                        {['USA', 'Canada'].map(country => (
                          <li key={country} className='flex items-start gap-4'>
                            <div className='mt-[6px] shrink-0'><Arrowhead /></div>
                            <div>{country}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* South America  */}
                  <div className='w-full text-left'>
                    <div style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>South America</div>
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[16px] xl:text-[18px] leading-relaxed tracking-normal mt-3'>
                      <ul className='space-y-2'>
                        {['Colombia', 'Mexico'].map(country => (
                          <li key={country} className='flex items-start gap-4'>
                            <div className='mt-[6px] shrink-0'><Arrowhead /></div>
                            <div>{country}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* United Kingdom */}
                  <div className='w-full text-left'>
                    <div style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold, color: theme.colors.text }}
                      className='text-[18px] leading-[34px]'>United Kingdom</div>
                    <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                      className='text-[16px] xl:text-[18px] leading-relaxed tracking-normal mt-3'>
                      <ul className='space-y-2'>
                        {['England','Scotland'].map(country => (
                          <li key={country} className='flex items-start gap-4'>
                            <div className='mt-[6px] shrink-0'><Arrowhead /></div>
                            <div>{country}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full xl:w-1/2 flex justify-center xl:justify-end items-center mt-12 xl:mt-0'>
              <div className="w-full max-w-[518px] ">
                <Image width={518} height={406} src="/images/countless_Image.png" alt="countless_Image" className="w-full h-auto object-contain" />
              </div>
            </div>

          </div>

        </div>

        {/* SECTION 04  Low Fees */}

        <div className="min-h-auto xl:min-h-[655px] w-full flex justify-center items-center py-10 xl:py-1 px-4 md:px-10 xl:px-0">
          {/* child div */}
          <div className="h-auto w-full xl:w-[1295px] flex flex-col-reverse xl:flex-row justify-center items-center gap-10 xl:gap-[60px]">
            {/* image left side */}
            <div className='w-full xl:w-1/2 flex justify-center xl:justify-start items-center mt-12 xl:mt-0'>
              <div className="w-full max-w-[534px] ">
                <Image width={534} height={388.75} src='/images/low_Fee.png' alt="Low Fees" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* content right side */}
            <div className='h-auto w-full xl:w-[745px] gap-[20px] flex flex-col items-center xl:items-start'>
              {/* heading */}
              <div className="w-full">

                <div className='flex flex-col items-center xl:items-start'>
                  {/* heading */}
                  <div className="flex relative justify-center xl:justify-start text-center xl:text-left w-full h-auto min-h-[60px] xl:min-h-[109px] xl:h-27.25 mt-1">

                    {/* front text */}
                    <div className='absolute inset-0 flex flex-col items-center xl:items-start justify-center z-20'>
                      <div className='z-20 uppercase tracking-[0.225em] text-[12px] sm:text-[14px] xl:text-[16px]'
                        style={{ color: theme.colors.primary, fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semibold }}
                      >TAGLINE HERE</div>
                      <div className='z-20 text-[35px] sm:text-[45px] xl:text-[50px] 2xl:text-[64px] flex leading-none mt-2 flex-wrap xl:flex-nowrap whitespace-normal xl:whitespace-nowrap justify-center xl:justify-start'
                        style={{ color: theme.colors.text, fontFamily: theme.fonts.montserrat, }}
                      >
                        <span
                          style={{ fontWeight: theme.fonts.weight.normal }}>low fees,</span>
                        <span
                          style={{ fontWeight: theme.fonts.weight.bold }}>&nbsp;high return</span>
                      </div>
                    </div>
                    <div className='z-10 w-full flex justify-center xl:justify-start'>
                      <Program />
                    </div>
                  </div>
                  {/* Description*/}
                  <div className='flex flex-col w-full xl:w-[629px] gap-[25px] mt-8 xl:mt-0 text-center xl:text-left'>
                    <div className='w-full text-[16px] xl:text-[18px] leading-relaxed xl:leading-7.5 font-montserrat'
                      style={{ fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}>
                      <p>Attractive commercial terms facilitate stronger relationships between partners. We provide:</p>
                    </div>
                  </div>
                </div>

              </div>
              {/* KeyPoints and button */}
              <div className='h-auto w-full xl:w-[643px] flex justify-center xl:justify-start'>
                {/* text */}
                <div style={{ fontFamily: theme.fonts.default, fontWeight: theme.fonts.weight.semiNormal, color: theme.colors.text }}
                  className='text-[14px] xl:text-[16px] leading-relaxed xl:leading-[28px] tracking-normal'>
                  <ol className='space-y-4 xl:space-y-6 text-left'>
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
              <div className='h-auto w-full max-w-[248px] mt-6'>
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
import { theme } from '@/lib/theme';
const Statics = () => {
  return (
    <div>
      <section className="flex items-center flex-col min-h-[208px] h-auto lg:h-[208px]">
        {/* gradient line */}
        <div className="h-[7px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_80%,rgba(255,255,255,0)_100%)]" />
        <div className="min-h-[200px] h-auto lg:h-[200px] py-8 lg:py-0 w-full bg-[linear-gradient(90deg,rgba(222,66,91,0)_0%,rgba(222,66,91,0.82)_20%,rgba(222,66,91,0.82)_80%,rgba(222,66,91,0)_100%)] flex items-center justify-center">
          <div className='text-center w-full max-w-[1015px] px-4 grid grid-cols-[1fr_auto_1fr] lg:flex lg:flex-nowrap items-center justify-items-center lg:justify-center gap-y-10 lg:gap-x-[67px] lg:h-[90px]'>
            {/* text 1 */}
            <div
              className="flex flex-col items-center justify-center"
              style={{ fontFamily: theme.fonts.montserrat, color: theme.colors.text }}>
              <div className='text-[32px] md:text-[48px]'
                style={{ fontWeight: theme.fonts.weight.heading }}>
                200+
              </div>
              <div className='text-[14px] md:text-[16px]'
                style={{ fontWeight: theme.fonts.weight.bold }}>
                COLLEGES
              </div>
            </div>
            <div className='h-[60px] md:h-[90px] w-px bg-[#FFFFFF]' />
            {/* text 2 */}
            <div
              className="flex flex-col items-center justify-center"
              style={{ fontFamily: theme.fonts.montserrat, color: theme.colors.text }}>
              <div className='text-[32px] md:text-[48px]'
                style={{ fontWeight: theme.fonts.weight.heading }}>
                2,000+
              </div>
              <div className='text-[14px] md:text-[16px]'
                style={{ fontWeight: theme.fonts.weight.bold }}>
                COURSES
              </div>
            </div>
            <div className='h-[90px] hidden lg:block w-px bg-[#FFFFFF]' />
            {/* text 3 */}
            <div
              className="flex flex-col items-center justify-center"
              style={{ fontFamily: theme.fonts.montserrat, color: theme.colors.text }}>
              <div className='text-[32px] md:text-[48px]'
                style={{ fontWeight: theme.fonts.weight.heading }}>
                15
              </div>
              <div className='text-[14px] md:text-[16px]'
                style={{ fontWeight: theme.fonts.weight.bold }}>
                DESTINATIONS
              </div>
            </div>
            <div className='h-[60px] md:h-[90px] w-px bg-[#FFFFFF]' />
            {/* text 4 */}
            <div
              className="flex flex-col items-center justify-center"
              style={{ fontFamily: theme.fonts.montserrat, color: theme.colors.text }}>
              <div className='text-[32px] md:text-[48px]'
                style={{ fontWeight: theme.fonts.weight.heading }}>
                8
              </div>
              <div className='text-[14px] md:text-[16px]'
                style={{ fontWeight: theme.fonts.weight.bold }}>
                OFFICES
              </div>
            </div>
          </div>




        </div>

        {/* gradient line */}
        <div className="h-[7px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_80%,rgba(255,255,255,0)_100%)]" />

      </section>
    </div>
  )
}

export default Statics
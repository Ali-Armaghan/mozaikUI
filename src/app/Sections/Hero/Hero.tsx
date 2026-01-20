import { theme } from "@/lib/theme";
import hero from "@/assets/hero-bg.jpg";
import Button from "@/components/button";
import ActionButton from "@/components/actionButton";
import Logo from "@/components/logo"; ``
export default function HeroSection() {
  return (
    <div>
      <section className="flex items-center flex-col"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Top Bar */}
        <div className="w-full text-white flex justify-center items-center uppercase h-[50px] p-[10px]"
          style={{
            background: theme.colors.primary, fontWeight: theme.fonts.weight.bold, letterSpacing: theme.fonts.spacing.medium
          }}
        >
          SIGN UP FOR OUR NEXT EVENT-- &gt; MOZAIK XPO COLOMBIA 2022
        </div >

        <div className="w-full mt-[26px] flex items-center justify-between px-[85px] h-[83px] text-white">
          {/* logo */}
          <div>
            {/* Mozaik Logo */}
            <Logo />
          </div>
          {/* navigation */}
          <div>
            <ul className="flex gap-[31px] uppercase"
              style={{
                fontWeight: theme.fonts.weight.bold,
                fontFamily: theme.fonts.default, color: theme.colors.text
              }}
            >
              <li>Discover <span className="text-[10px]">▼</span></li>
              <li>Study Areas <span className="text-[10px]">▼</span></li>
              <li>Events <span className="text-[10px]">▼</span></li>
              <li>Partners <span className="text-[10px]">▼</span></li>
              <li>About Us </li>
            </ul>
          </div>
          {/* button */}
          <div>
            <Button content="Find Course" />
          </div>
        </div>

        {/* Subject */}
        <div className=" w-full mt-[183px] pl-[94px]">
          {/* Heading and P */}
          <div className="flex flex-col text-white">
            <h1 className="text-[75px]"> <span style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>mozaik</span><span style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>partners</span></h1>
            <p className="text-[24px]"
              style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal }}>
              a reward program for recruiters to enrol students <br />
              to creative colleges worldwide</p>
          </div>
          {/* Buttons */}
          <div className="mt-[31px] flex flex-col gap-[26px] sm:flex-row">
            <Button content="ENROLL NOW" />
            <ActionButton content="APPLY FOR STUDENT" />
          </div>

        </div>

        {/* Gradient */}
        <div className="w-full bg-linear-to-t from-[#000000] to-transparent h-[127px] mt-[38px]">

        </div>

      </section >
    </div >
  )
}

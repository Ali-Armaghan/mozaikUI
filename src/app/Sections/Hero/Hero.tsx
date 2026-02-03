'use client';
import { useState } from "react";
import { theme } from "@/lib/theme";
import hero from "@/assets/hero-bg.jpg";
import Button from "@/components/button";
import ActionButton from "@/components/actionButton";
import Logo from "@/components/logo";
import Menuicon from "./components/menuicon";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <section className="flex items-center flex-col relative"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Top Bar */}
        <div className="w-full text-white flex justify-center items-center text-center uppercase h-[50px] p-[10px] text-[12px] md:text-[16px]"
          style={{
            background: theme.colors.primary, fontWeight: theme.fonts.weight.bold, letterSpacing: theme.fonts.spacing.medium
          }}
        >
          SIGN UP FOR OUR NEXT EVENT-- &gt; MOZAIK XPO COLOMBIA 2022
        </div >

        <div className="w-full mt-[26px] flex items-center justify-between px-[20px] md:px-[40px] lg:px-[85px] h-[83px] text-white">
          {/* logo */}
          <div className="w-[101px] h-[83px]">
            {/* Mozaik Logo */}
            <Logo />
          </div>
          {/* navigation */}
          <div className="hidden lg:block">
            <ul className="flex gap-[20px] xl:gap-[31px] uppercase text-[14px] xl:text-[16px]"
              style={{
                fontWeight: theme.fonts.weight.bold,
                fontFamily: theme.fonts.default, color: theme.colors.text
              }}
            >
              <li className="cursor-pointer">Discover <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer">Study Areas <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer">Events <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer">Partners <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer">About Us </li>
            </ul>
          </div>
          {/* button and mobile menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button content="Find Course" />
            </div>
            {/* Mobile Menu Icon */}
            <div className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menuicon />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden w-full bg-black/90 backdrop-blur-md text-white py-8 absolute top-[159px] left-0 z-50 border-t border-white/10">
            <ul className="flex flex-col items-center gap-6 uppercase"
              style={{
                fontWeight: theme.fonts.weight.bold,
                fontFamily: theme.fonts.default, color: theme.colors.text
              }}
            >
              <li className="cursor-pointer hover:text-primary transition-colors">Discover <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer hover:text-primary transition-colors">Study Areas <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer hover:text-primary transition-colors">Events <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer hover:text-primary transition-colors">Partners <span className="text-[10px]">▼</span></li>
              <li className="cursor-pointer hover:text-primary transition-colors">About Us </li>
              <li className="md:hidden">
                <Button content="Find Course" />
              </li>
            </ul>
          </div>
        )}

        {/* Subject */}
        <div className=" w-full mt-[100px] md:mt-[183px]  pl-[10px] md:pl-[94px]">
          {/* Heading and P */}
          <div className="flex flex-col text-white items-center md:items-start  md:text-left">
            <h1 className="md:text-[75px] text-[65px] leading-tight md:leading-normal">
              <span style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.bold }}>mozaik</span>
              <br className="md:hidden" />
              <span style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.normal }}>partners</span>
            </h1>
            <p className="md:text-[24px] text-[15px]"
              style={{ fontFamily: theme.fonts.montserrat, fontWeight: theme.fonts.weight.semiNormal }}>
              a reward program for recruiters to enrol students <br />
              to creative colleges worldwide</p>
          </div>
          {/* Buttons */}
          <div className="mt-[31px] flex flex-col gap-[26px] sm:flex-row justify-center items-center md:justify-start md:items-start">
            <Button content="ENROLL NOW"
            />
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


"use client";
import { theme } from "@/lib/theme";
import hero from "@/assets/hero-bg.jpg";
import Button from "@/components/button";
import ActionButton from "@/components/actionButton";
import Logo from "@/components/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <section
        className="flex items-center flex-col"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Top Bar */}
        <div
          className="w-screen text-white flex justify-center items-center uppercase h-[50px] p-[10px] md:text-[16px] text-[10px]"
          style={{
            background: theme.colors.primary,
            fontWeight: theme.fonts.weight.bold,
            letterSpacing: theme.fonts.spacing.medium,
          }}
        >
          SIGN UP FOR OUR NEXT EVENT-- &gt; MOZAIK XPO COLOMBIA 2022
        </div>

        <div className="md:flex hidden w-screen mt-[26px] flex items-center justify-between px-[85px] h-[83px] text-white">
          {/* logo */}
          <div>
            {/* Mozaik Logo */}
            <Logo width={101} height={83} />
          </div>
          {/* navigation */}
          <div>
            <ul
              className="flex gap-[31px] uppercase"
              style={{
                fontWeight: theme.fonts.weight.bold,
                fontFamily: theme.fonts.default,
                color: theme.colors.text,
              }}
            >
              <li>
                Discover <span className="text-[10px]">▼</span>
              </li>
              <li>
                Study Areas <span className="text-[10px]">▼</span>
              </li>
              <li>
                Events <span className="text-[10px]">▼</span>
              </li>
              <li>
                Partners <span className="text-[10px]">▼</span>
              </li>
              <li>About Us </li>
            </ul>
          </div>
          {/* button */}
          <div>
            <Button content="Find Course" />
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between  w-screen bg-black opacity-[0.3]  ">
          <div className="z-50">
            <Logo width={60} height={40}/>
          </div>
          <div className="p-[20px] z-50">
            {toggleMenu ? <X className="text-2xl text-white" onClick={() => {toggleMenuHandler()}}/> : <Menu className="text-2xl text-white" onClick={() => {toggleMenuHandler()}}/>}
          </div>
        </div>
        {toggleMenu && <div className="bg-black w-screen h-[50vh] absolute top-28 left-0 z-50 p-[20px]" >
            <div>
              <div>
            <ul
              className="flex flex-col gap-[31px] uppercase"
              style={{
                fontWeight: theme.fonts.weight.bold,
                fontFamily: theme.fonts.default,
                color: theme.colors.text,
              }}
            >
              <li>
                Discover <span className="text-[10px]">▼</span>
              </li>
              <li>
                Study Areas <span className="text-[10px]">▼</span>
              </li>
              <li>
                Events <span className="text-[10px]">▼</span>
              </li>
              <li>
                Partners <span className="text-[10px]">▼</span>
              </li>
              <li>About Us </li>
            </ul>
          </div>
          {/* button */}
          <div className="mt-[20px]">
            <Button content="Find Course" />
          </div>
            </div>
          </div>}


        {/* Subject */}
        <div className=" w-screen mt-[183px] md:pl-[94px] pl-[20px]">
          {/* Heading and P */}
          <div className="flex flex-col text-white">
            <h1 className="md:text-[75px] text-[30px]">
              {" "}
              <span
                style={{
                  fontFamily: theme.fonts.montserrat,
                  fontWeight: theme.fonts.weight.bold,
                }}
              >
                mozaik
              </span>
              <span
                style={{
                  fontFamily: theme.fonts.montserrat,
                  fontWeight: theme.fonts.weight.normal,
                }}
              >
                partners
              </span>
            </h1>
            <p
              className="md:text-[24px] text-[15px]"
              style={{
                fontFamily: theme.fonts.montserrat,
                fontWeight: theme.fonts.weight.semiNormal,
              }}
            >
              a reward program for recruiters to enrol students <br />
              to creative colleges worldwide
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-[31px] flex flex-col gap-[26px] sm:flex-row">
            <Button content="ENROLL NOW" />
            <ActionButton content="APPLY FOR STUDENT" />
          </div>
        </div>

        {/* Gradient */}
        <div className="w-full bg-linear-to-t from-[#000000] to-transparent h-[127px] mt-[38px]"></div>
      </section>
    </div>
  );
}

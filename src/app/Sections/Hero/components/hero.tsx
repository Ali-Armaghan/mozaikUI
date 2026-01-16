import React from 'react';
import hero from '../../../../assets/hero-bg.jpg';


const Hero = () => {
    return (
        <section className="relative w-full h-[85vh] md:h-screen bg-neutral-900 overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10"></div>

                <div
                    className="w-full h-full bg-cover bg-center "
                    style={{ backgroundImage: `url(${hero.src})` }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-12 pt-20">
                <div className="max-w-2xl text-white">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
                        <span className="text-white">mozaik</span><span className="font-light text-gray-300">partners</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
                        a reward program for recruiters to enrol students to creative colleges worldwide
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-mozaik-red hover:bg-[#ff3355] text-white px-8 py-3 rounded text-sm font-bold tracking-wide uppercase transition-colors shadow-lg">
                            Enroll Now
                        </button>
                        <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded text-sm font-bold tracking-wide uppercase transition-colors">
                            Apply For Student
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainNavbar = () => {
    return (
        <nav className="w-full absolute top-[32px] left-0 z-40 flex items-center justify-between px-8 py-6 text-white font-sans">
            {/* Logo Placeholder */}
            <div className="flex flex-col items-center">
                {/* Using a text placeholder for logo if image missing, or basic shape */}
                <div className="border-2 border-mozaik-red rounded-full p-2 h-12 w-12 flex items-center justify-center mb-1">
                    <span className="text-mozaik-red font-bold text-lg">M</span>
                </div>
                <span className="text-[10px] tracking-widest text-gray-300 uppercase">mozaikpartners</span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
                <Link href="#" className="hover:text-mozaik-red transition-colors flex items-center gap-1">
                    Discover <span className="text-[10px]">▼</span>
                </Link>
                <Link href="#" className="hover:text-mozaik-red transition-colors flex items-center gap-1">
                    Study Areas <span className="text-[10px]">▼</span>
                </Link>
                <Link href="#" className="hover:text-mozaik-red transition-colors flex items-center gap-1">
                    Events <span className="text-[10px]">▼</span>
                </Link>
                <Link href="#" className="hover:text-mozaik-red transition-colors flex items-center gap-1">
                    Partners <span className="text-[10px]">▼</span>
                </Link>
                <Link href="#" className="hover:text-mozaik-red transition-colors">
                    About Us
                </Link>
            </div>

            {/* Button */}
            <button className="bg-mozaik-red hover:bg-[#ff3355] text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors shadow-md">
                Find Course
            </button>
        </nav>
    );
};

export default MainNavbar;

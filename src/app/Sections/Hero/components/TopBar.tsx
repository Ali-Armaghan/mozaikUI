
import React from 'react';
import { theme } from '@/lib/theme';
const TopBar = () => {
    return (
        <div className="w-full text-white flex justify-center items-center uppercase h-[50px] p-[10px]"
            style={{
                background: theme.colors.primary, fontWeight: theme.fonts.weight.bold, letterSpacing: theme.fonts.spacing.medium
            }}
        >
            SIGN UP FOR OUR NEXT EVENT-- &gt; MOZAIK XPO COLOMBIA 2022
        </div >
    );
};

export default TopBar;

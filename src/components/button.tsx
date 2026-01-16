import React from 'react'
import { theme } from '@/lib/theme';

const Button = () => {
    return (
        <button
            style={{ backgroundColor: theme.colors.primary, color: theme.colors.text }}
            className='pt-[18px] pb-[18px] pl-[63px] pr-[63px] gap-[10px] margin-left-[63px] margin-right-[63px]'
        >

            Find Course
        </button>
    )
}

export default Button

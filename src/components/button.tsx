import React from 'react'
import { theme } from '@/lib/theme';

const Button = (props: { content: string }) => {
    return (
        <button
            style={{ backgroundColor: theme.colors.primary, color: theme.colors.text, fontFamily: theme.fonts.button, fontWeight: theme.fonts.weight.bold }}
            className='h-[56px] w-[194px] cursor-pointer'
        >

            {props.content}
        </button>
    )
}

export default Button

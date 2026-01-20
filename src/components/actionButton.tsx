import React from 'react'
import { theme } from '@/lib/theme';

const ActionButton = (props: { content: string }) => {
    return (
        <button
            style={{ color: theme.colors.text, fontFamily: theme.fonts.button, fontWeight: theme.fonts.weight.bold }}
            className='h-[56px] w-[252px] bg-none border-solid border-2 border-[#ffffff] cursor-pointer'
        >

            {props.content}
        </button>
    )
}

export default ActionButton

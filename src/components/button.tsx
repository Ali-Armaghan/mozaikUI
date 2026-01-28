import { theme } from '@/lib/theme';

interface ButtonProps {
    content: string;
    size?: number;
}

const Button = ({ content, size = 194 }: ButtonProps) => {
    return (
        <button
            className='h-[56px] cursor-pointer hover:bg-amber-200 hover:text-black transition-colors'
            style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.text,
                fontFamily: theme.fonts.button,
                fontWeight: theme.fonts.weight.bold,
                width: `${size}px`
            }}
        >
            {content}
        </button>
    )
}

export default Button


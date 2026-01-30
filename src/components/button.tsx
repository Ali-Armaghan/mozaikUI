import { theme } from '@/lib/theme';

interface ButtonProps {
    content: string;
    size?: number;
    color?: string; 
    bg?: string;
}

const Button = ({ content, size = 194, color = theme.colors.text, bg = theme.colors.primary }: ButtonProps) => {
    return (
        <button
            className='h-[56px] cursor-pointer hover:bg-amber-200 hover:text-black transition-colors'
            style={{
                backgroundColor: bg,
                color: color,
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


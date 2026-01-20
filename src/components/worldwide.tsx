import React from 'react'

const worldwide = () => {
    return (
        <div><svg viewBox="0 0 800 150" className="w-full">
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                opacity={0.2}
                className="fill-black stroke-[#ff4d67] stroke-[2px] tracking-[0.055em]"
                style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 900,
                    fontSize: '128px',
                    paintOrder: 'stroke fill' // This keeps the stroke on the outside
                }}
            >
                Worldwide
            </text>
        </svg></div>
    )
}

export default worldwide
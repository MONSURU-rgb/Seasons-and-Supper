import React from 'react'

interface Props{
    text: string;
    fontFamily: string;
    fontSize: string;
    color?: string;
    fontWeight?: string;
    maxWidth?: string;
}
const Paragraph = ({text, fontFamily, fontSize, color, fontWeight, maxWidth}: Props) => {

    return (
        <p className={`${fontFamily} ${fontSize} ${color} ${fontWeight} ${maxWidth}`}>{text}</p>
  )
}

export default Paragraph
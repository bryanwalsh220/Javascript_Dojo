import React from 'react'
import {useParams} from 'react-router-dom'

const ColoredWordDisplay = () => {
    const {word, textColor, bgColor } = useParams();
    const textStyle = {
        color: textColor || 'black',
        backgroundColor: bgColor || 'white',
    }

    return (
        <h1 style = {textStyle}>{word}</h1>
    )
}

export default ColoredWordDisplay
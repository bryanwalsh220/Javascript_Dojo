import React, { useState } from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);
    const [colorError, setColorError] = useState("")
    const [sizeError, setSizeError] = useState("")
    
    
    const handleColor = (e) => {
        setColor(e.target.value);
        // console.log(e.target.value)
        if (e.target.value.length < 2) {
            setColorError("Not a valid Color")
        } else {
            setColorError("")
        }
    }
    // console.log(`${color} Show me color`)


    const handleSize = (e) => {
        setSize(e.target.value);
        if(e.target.value.length < 1) {
            setSizeError("Make the Box Bigger")
        } else {
            setSizeError("")
        }
    }
    const newBox = (e) => {
        e.preventDefault();
        // const sizeNumber = parseFloat(size)
        props.box(color, size);
        setColor("");    
        setSize("")
    }
    return (
        <>
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={newBox}>
                <h2>Pick a color, pick a size, make your box</h2>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" onChange={handleColor} value={color} />
                <label htmlFor="size">Size</label>
                <input type="text" id="size" onChange={handleSize} value={size} />
                <div>
                    {
                        !colorError && !sizeError ?
                        <input type="submit" value="Create Box" /> :
                        <input type="submit" value="Create Box" disabled />
                    }
                </div>
            </form>
        </fieldset>
        <fieldset>
            <legend>Boxes</legend>
            <div>{color}</div>
            <div>{size}</div>
        </fieldset>
        </>
    )
}

export default BoxForm
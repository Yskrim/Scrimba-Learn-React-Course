import React from 'react'
import padsData from "./pads"

export default function Pad (props){

    const [isOn, setIsOn] = React.useState(props.on)
    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

    function turnAllPadsOff() {
        console.log("Turning off")
        setPads(prevPads => prevPads.map(pad => ({
            ...pad,
            on: false
        })))
    }

    return (
        <>
            <button 
                onClick={() => setIsOn(prev => !prev)}
                className={ isOn ? 'on' : undefined} 
                style={{backgroundColor : props.color}}
                
            ></button>
            
        </>
    )
}
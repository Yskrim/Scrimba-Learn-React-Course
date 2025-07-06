import React from 'react'
import padsData from "./pads"

export default function Pad (props){

    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

    return (
        <button 
            className={ props.on ? 'on' : undefined} 
            style={{backgroundColor : props.color}}
        ></button>
    )
}
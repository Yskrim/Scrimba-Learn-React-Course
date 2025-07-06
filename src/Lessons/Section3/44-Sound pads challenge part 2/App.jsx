import React from 'react'
import padsData from "./pads"
import Pad from './Pad'

export default function App( { darkMode } ) {

    const [count, setCount] = React.useState(0)

    const styles = {
        backgroundColor: count%(Math.floor(Math.random() * 5)) ? '#222222' : '#cccccc'
    }

    const [pads, setPads] = React.useState(padsData)

    let padElements = pads.map(p => {
        return (
            <Pad onClick={() => setCount(prev => prev + 1)} color={p.color} key={p.id} />
        )
    })
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {padElements}
            </div>
        </main>
    ) 
}

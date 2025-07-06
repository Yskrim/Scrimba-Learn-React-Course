import React from 'react'
import padsData from "./pads"
import Pad from './Pad'

export default function App({ darkMode }) {
    const [count, setCount] = React.useState(0)

    const [pads, setPads] = React.useState(padsData)

    let padElements = pads.map(p => {
        return (
            <Pad toggle={toggle} id={p.id} color={p.color} on={p.on} key={p.id} />
        )
    })

    /**
     * Challenge:
     * Call setPads to update the state of the one pad that was
     * clicked. Map over the previous pads array, and if the current
     * item you're iterating over has the same id as the `id` passed
     * to this function, then return a new object with the `on` value
     * set to the opposite of what it was before.
     * Otherwise (if the ids don't match), just return the previous
     * item as it was, unchanged.
     */

    function toggle(id) {
        console.log('clicked!' + id)
        setPads(prev => prev.map(pad => pad = pad.id === id ? {...pad, on: !pad.on} : pad))
    }

    function turnOff(){
        setPads(prev => prev.map(p => p = p.on ? {...p, on: false} : p))
    }

    return (
        <main onClick={() => setCount(prev => prev + 1)}>
            <h1>{count}</h1>
            <div className="pad-container">
                {padElements}
            </div>
            <button onClick={turnOff}>Turn all off</button>
        </main>
    )
}

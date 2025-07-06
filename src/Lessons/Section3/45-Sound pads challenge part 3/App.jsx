import React from 'react'
import padsData from "./pads"
import Pad from './Pad'

export default function App( { darkMode } ) {

    const [pads, setPads] = React.useState(padsData)

    let padElements = pads.map(p => {
        return (
            <Pad color={p.color} on={p.on} key={p.id} />
        )
    })

    return (
        <main>
            <div className="pad-container">
                {padElements}
            </div>
        </main>
    ) 
}

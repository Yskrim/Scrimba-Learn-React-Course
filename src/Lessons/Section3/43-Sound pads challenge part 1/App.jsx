import React from 'react'
import padsData from "./pads"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    const styles = {
        backgroundColor : "indigo"
    }
    
    let padElements = pads.map(p => {
        return (
            <button style={styles} key={p.id}>{p.id}</button>
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

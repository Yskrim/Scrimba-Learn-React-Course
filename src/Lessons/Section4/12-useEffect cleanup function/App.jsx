import WindowTracker from "./WindowTracker"
import React from 'react'

export default function App() {

    const [isShown, setIsShown] = React.useState(true)


    return (
        <main className="container">
            <button onClick={() => {setIsShown(prev =>!prev)}}>
                Toggle WindowTracker
            </button>
            {isShown ? <WindowTracker 
            /> : null}
        </main>
    )
}
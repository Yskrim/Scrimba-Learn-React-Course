import WindowTracker from "./WindowTracker"
import React from 'react'

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const [isShown, setIsShown] = React.useState(true)
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {             
        window.addEventListener('resize', () => {
            console.log("resized")
            setWidth(window.innerWidth)
        })
    }, [])

    return (
        <main className="container">
            <button onClick={() => {setIsShown(prev =>!prev)}}>
                Toggle WindowTracker
            </button>
            {isShown ? <WindowTracker 
                width={width}
            /> : null}
        </main>
    )
}
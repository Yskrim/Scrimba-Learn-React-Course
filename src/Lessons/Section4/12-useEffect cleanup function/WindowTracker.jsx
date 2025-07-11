import React from "react"

export default function WindowTracker() {

    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {       
        function handleResize() {
            console.log("resized")
            setWidth(window.innerWidth)
        }      
        
        window.addEventListener('resize', handleResize)
        
        return function() {
            console.log("cleaning up...")
            window.removeEventListener('resize', handleResize)
            console.log('cleaning complete')
        }
    }, [])
    return (
        <h1>Window width: {width}</h1>
    )
}

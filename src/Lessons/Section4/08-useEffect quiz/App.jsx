import React from "react"
import './index.css'
export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    
    React.useEffect(function() {
        fetch("https://www.swapi.tech/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(prev => data))
            .then(console.log("Rendered!"))
    }, [])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
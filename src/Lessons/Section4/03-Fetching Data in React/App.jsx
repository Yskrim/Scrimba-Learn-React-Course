import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    // 1. GET the data
    // 2. Save the data in state
    console.log("Rendered!")
    fetch("https://starwars-databank-server.vercel.app/api/v1/characters")
        .then(res => res.json())
        .then(data => setStarWarsData(prev => data.data[0]))
    
        return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
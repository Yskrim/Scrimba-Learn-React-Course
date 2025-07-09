import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)

    React.useEffect(function() {fetch("https://www.swapi.tech/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(prev => data))
        .then(console.log("Rendered!"))
    })
    
        return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
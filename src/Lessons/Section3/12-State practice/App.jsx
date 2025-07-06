import React from "react"
import './index.css'

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [count, setCount] = React.useState(0)

    function reduceCount() {
        setCount(count-1)
    }


    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={() => setCount(count-1)}className="minus" aria-label="Decrease count">–</button>
 
                <h2 className="count">{count}</h2>
                <button onClick={() => setCount(count+1)}className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}


function addCounter () {
    setCounter(counter + 1)
}


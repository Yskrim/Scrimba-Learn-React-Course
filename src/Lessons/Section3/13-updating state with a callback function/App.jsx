import React from "react"
import './index.css'

export default function App() {

    const [count, setCount] = React.useState(0)

    function add(){
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    return (

        <main className="container">
            <h1>How many times will Bob say state in this section?</h1>

            <div className="counter">
                <button className="minus" onClick={subtract}> - </button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add}> + </button>
            </div>

        </main>
    )
}
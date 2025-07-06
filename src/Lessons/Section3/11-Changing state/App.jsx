import { useState } from 'react'
import React from 'react'
import './index.css'

export default function App(){
    const [result , setResult] = React.useState('Yes')
    console.log(result) 

    function handleClick() {
        setResult('Heck yes')
    }

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick}className="value">{result}</button>
        </main>
    )
}

import { useState } from 'react'
import React from 'react'
import './index.css'

export default function App(){
    const result = React.useState(' Yes')
    console.log(result)

    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}

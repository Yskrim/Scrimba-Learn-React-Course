import React from 'react'
import Die from './components/Die'

export default function App(){



    function generateAllNewDice() {
        return Array.from({length: 10}, () => Math.ceil(Math.random()*6))
         

        // return new Array(10)
        //     .fill(0)
        //     .map(() => Math.ceil(Math.random() * 6))
    }
    
    const [dice, setDice] = React.useState(generateAllNewDice)

    
    function handleClick(){
        setDice(generateAllNewDice())
        console.log(dice)
    }
    
    function handlePadClick(e) {
        console.log(e.currentTarget)

    }

    const diceElements = dice.map((d, index) => {
        return(<Die key={index} value={d} onClick={handlePadClick}/>)
    })

    return(
        <main>
            <div className="container">
                {diceElements}
                <button onClick={handleClick}>click</button>
            </div>
            
            
        </main>
    )
}
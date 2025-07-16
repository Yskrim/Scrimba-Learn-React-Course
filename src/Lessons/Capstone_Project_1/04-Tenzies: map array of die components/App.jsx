import React from 'react'
import Die from './components/Die'

export default function App(){

    function generateAllNewDice() {
        return new Array(10)
            .fill({})
            .map((obj, index) => (
                {...obj, value: Math.ceil(Math.random() * 6), id: index, isSelected: false}
            ))
    }
    
    const [dice, setDice] = React.useState(generateAllNewDice)
    const [count, setCount] = React.useState(0)
    const [won, setWon] = React.useState(false)
    
    function handleClick(){
        setDice(prev => prev.map((obj) =>
            obj = !obj.isSelected ? {...obj, value: Math.ceil(Math.random() * 6)} : obj 
        ))
        setCount(prev => prev + 1)
    }
    
    function handlePadClick(id) {
        setDice(prev => prev.map(
            obj => obj = (obj.id === id) ? {...obj, isSelected: !obj.isSelected} : obj
        ))
    }

    function checkWin() {
        if (dice.every(obj => obj.isSelected && obj.value === dice[0].value)){
            alert(`you won in ${count} moves. Your number is ${dice[0].value}`)
            setWon(true)
        }
    }

    !won ? checkWin() : null

    function resetGame(){
        setDice(generateAllNewDice())
        setWon(false)
    }

    const diceElements = dice.map((d, index) => 
        <Die key={index} die={d} handlePadClick={handlePadClick}/>
    )

    return(
        <main>
            <div className="container">
                {diceElements}
            </div>  
                <button onClick={!won ? handleClick : resetGame}>{!won ? 'roll' : 'restart'}</button>
        </main>
    )
}
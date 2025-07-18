import React from 'react'
import Die from './components/Die'
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App(){

    const [dice, setDice] = React.useState(() => generateAllNewDice())
    const [count, setCount] = React.useState(0)
    const gameWon = dice.every(obj => obj.isSelected && obj.value === dice[0].value) 

    function generateAllNewDice() {
        return new Array(10)
            .fill({})
            .map(() => (
                {
                    value: Math.ceil(Math.random() * 6), 
                    id: nanoid(), 
                    isSelected: false
                }
            ))
    }

    function handleClick(){
        setDice(prev => prev.map(obj =>
            obj = obj.isSelected ? 
                obj :
                {...obj, value: Math.ceil(Math.random() * 6)}
        ))
        setCount(prev => prev + 1)
    }
    
    function handlePadClick(id) {
        // console.log(id)
        setDice(prev => prev.map(obj => 
            (obj.id === id) ? 
                {...obj, isSelected: !obj.isSelected} : 
                obj
        ))
    }

    function resetGame(){
        setDice(generateAllNewDice())
        setCount(0)
        gameWon = false
    }

    function returnChosenNumber() {
        const numbers = new Set();
        dice.forEach(die => die.isSelected && numbers.add(die.value));
        return Array.from(numbers);
    }

    function type() {
        if (count === 0)
            return "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
        else if (!gameWon && count !== 0) 
            return `Rolls: ${count}, Chosen number(s): ${returnChosenNumber()}`
        else 
            return `You Won! Moves: ${count}, Number: ${dice[0].value}`
    }

    const diceElements = dice.map((die, index) => 
        <Die 
            key={index} 
            die={die} 
            handlePadClick={handlePadClick}
        />
    )

   

    return(
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">{type()}</p>
            <div className="container" >
                {diceElements}
                {gameWon && <Confetti />}
                <div className="sr-only" aria-live='polite'>
                    {gameWon && <p>Congradulations! You won! Press "Restart" to start again</p>}
                </div>
            </div>  
                <button onClick={!gameWon ? handleClick : resetGame}>{!gameWon ? 'Roll' : 'Restart'}</button>
        </main>
    )
}
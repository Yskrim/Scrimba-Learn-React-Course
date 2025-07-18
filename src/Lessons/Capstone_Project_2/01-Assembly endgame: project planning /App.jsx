

export default function Hangman() {
    const guessedWord = "DOLBOYOB"
    const wordTileElements = guessedWord.split('').map(letter => <button>{letter}</button>)

    const keysElements = []
    for(let i = 65; i < 91; i++) {
        keysElements.push(<button>{String.fromCharCode(i)}</button>)
    }

    return(
        <main>
            <div className="instructions">
                <h1>Assembly: Endgame</h1>
                <p> Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                <section className="game-status">
                    <h1>This is a</h1>
                    <p>Conditionally rendered message</p>
                </section>
            </div>


            <div className="healthPoints">
                <div className="hp dead">HTML</div>
                <div className="hp">CSS</div>
                <div className="hp">JavaScript</div>
                <div className="hp">React</div>
                <div className="hp">Typescript</div>
                <div className="hp">Node.js</div>
                <div className="hp">Python</div>
                <div className="hp">Ruby</div>
                <div className="hp">Assembly</div>
            </div>

            <div className="guessedWord">
                {wordTileElements}
            </div>

            <div className="keyboard">
                {keysElements}
            </div>
        </main>
    )
}
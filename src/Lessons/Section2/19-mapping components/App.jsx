import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        console.log(joke);
        return <Joke 
            setup={joke.setup} 
            punchline={joke.punchline}
        />
    })
    return (
        <main>
             {jokeElements}
        </main>
    )
}
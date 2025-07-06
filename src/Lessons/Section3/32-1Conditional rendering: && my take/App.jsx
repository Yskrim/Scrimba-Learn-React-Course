/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

import JokeComponent from "./JokeComponent"

export default function App() {
    return (
        <div className="joke-container">
            <JokeComponent 
                setup="I bought my daugther a fridge"
                punchline="I can't wait to see her face light up when she opens it."
                isPun={true}
                upvotes={3}
                downvotes={1}
                comments = { 
                        [
                        {   id: 1,
                            text: 'I told this joke at family dinner and everyone shat themselves laughing'
                        },
                        {   id: 2,
                            text: 'Wow, this joke made me wanna die'
                        },
                        {   id: 3,
                            text: 'Nice joke, just got my ass kicked for telling it to strangers'
                        },
                        {   id: 4,
                            text: 'Nice joke, just got my ass kicked for telling it to strangers'
                        },
                        ]
                    }
            />
            <JokeComponent 
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />
            <JokeComponent 
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
            />
            <JokeComponent 
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
            />
            <JokeComponent 
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
            />
        </div>
    )
}


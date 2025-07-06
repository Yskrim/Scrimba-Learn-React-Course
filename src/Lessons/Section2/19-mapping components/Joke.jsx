export default function Joke({setup, punchline}) {
    return (
        <>
            {setup && <p className="setup">Setup: {setup}</p>}
            {punchline && <p className="punchline">Punchline: {punchline}</p>}
            <hr />
        </>
    )
}
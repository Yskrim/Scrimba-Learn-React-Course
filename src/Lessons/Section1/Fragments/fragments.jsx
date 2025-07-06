import { createRoot } from "react-dom/client"
import { Fragment } from 'react'

const root = createRoot(document.getElementById('root'));

function Page() {
    return (
        <Fragment>
            <header>
                <img src="../../src/assets/react.svg" alt="react-logo" width="40px"/>
            </header>

            <main>
                <h1>The reasons I want to learn react</h1>
                <ol>
                    <li>I will become more employable</li>
                    <li>I will learn more about the modern webdev tech</li>
                    <li>I will get to know the most popular library for front end</li>
                </ol>
            </main>

            <footer>
                © 2025 Korotkov development. All rights reserved.
            </footer>
        </Fragment>
    )
}

root.render(
    <Page />
)



/*
function CreateHeader() {
    return (
    <header>
        <img src="/src/assets/react.svg" alt="react-logo" width="40px"/>
        <p>Header</p>
    </header>)
}

function CreateMain(){
    return (
        <main>
            <h1>The reasons I want to learn react</h1>
            <ol>
                <li>I will become more employable</li>
                <li>I will learn more about the modern webdev tech</li>
                <li>I will get to know the most popular library for front end</li>
            </ol>
        </main>
    )
}

function CreateFooter() {
    return(
        <footer>
            © 2025 Korotkov development. All rights reserved.
        </footer>
    )
}
*/


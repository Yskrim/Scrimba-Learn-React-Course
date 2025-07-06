import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'));

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function Navigation(){
    return(
        <h1>Hi</h1>
    )
}

function Page() {
    return (
        <>
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
        </>
    )
}

function Header() {
    return (
    <header>
        <img class="nav-logo" src="/src/assets/react.svg" alt="react-logo"/>
        <nav>
            <ul className="nav-list">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>)
}

function Main(){
    return (
        <main>
            <h1>Reasons I am excited to learn React</h1>
            <ol>
                <li>I will become more employable, because it is very popular and really demanded in the field 😎
                </li>
                <li>I will learn more about the modern webdev tech</li>
                <li>I will get to know the most popular library for front end</li>
            </ol>
        </main>
    )
}

function Footer() {
    return(
        <footer>
            © 2025 Korotkov development. All rights reserved.
        </footer>
    )
}

root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)
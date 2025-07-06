import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'));

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
        <img src="/src/assets/react.svg" alt="react-logo" width="40px"/>
        <p>Header</p>
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
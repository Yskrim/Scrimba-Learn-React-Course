import { createRoot } from 'react-dom/client'
import './travel-journal.css'

const root = createRoot(document.getElementById("root"));

function Header() {
    return (
        <header>
            <img width='20px'src="src/Lessons/Section2/globe.png"/>
            <p>my travel journal</p>
        </header>
    )
}

root.render(
    <Header />
)

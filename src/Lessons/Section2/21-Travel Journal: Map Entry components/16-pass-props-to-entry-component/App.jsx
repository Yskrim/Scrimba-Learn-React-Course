import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

export default function App() {
    const entryElements = data.map((entry) => {
        return (   
            <Entry
                key={entry.id}
                img={entry.img}
                location={entry.country}
                googleLink={entry.googleMapsLink}
                heading={entry.title}
                dates={entry.dates}
                description={entry.text}
            />
        )
    })

    return (
        <>
            <Header />
            {entryElements}
        </>
    )
}
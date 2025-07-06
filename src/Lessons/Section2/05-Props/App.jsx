/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import ContactCard from './components/ContactCard'
import './props.css'


const kittens = [
        {
            name: 'Mr. Whiskerson',
            phone: '(212) 555-1234',
            email: 'mr.whiskaz@catnap.meow',
            imagePath: 'src/Lessons/Section2/Props/images/image1.png'
        },
        {
            name: 'Fluffykins',
            phone: '(212) 555-3456',
            email: 'fluff@me.com',
            imagePath: 'src/Lessons/Section2/Props/images/image2.png'
        },
        {
            name: 'Felix',
            phone: '(212) 555-9876',
            email: 'thecat@hotmail.com',
            imagePath: 'src/Lessons/Section2/Props/images/image3.png'
        },
        {
            name: 'Pumpkin',
            phone: '(0800) CAT KING',
            email: 'pumpkin@scrimba.com',
            imagePath: 'src/Lessons/Section2/Props/images/image4.png'
        },
    ]
    console.log(kittens)

function App() {
    return (
        <div className="contacts">
            {
                kittens.map((kitten) => {
                    <ContactCard 
                    name={kitten.name}
                    phone={kitten.phone}
                    email={kitten.email}
                    bananas="loves them"
                    imagePath={kitten.imagePath} />
                })
            }
            {ContactCard(kittens[0])}
            {ContactCard(kittens[1])}
            {ContactCard(kittens[2])}
            {ContactCard(kittens[3])}
        </div>
    )
}

export default App


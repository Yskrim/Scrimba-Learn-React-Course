import Contact from "./Contact"
import './index.css'

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="src/Lessons/Section2/props-part-4/images/image1.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="src/Lessons/Section2/props-part-4/images/image2.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
                />
            <Contact 
                img="src/Lessons/Section2/props-part-4/images/image3.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                />
            <Contact
                img="src/Lessons/Section2/props-part-4/images/image4.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
             />
        </div>
    )
}

export default App 
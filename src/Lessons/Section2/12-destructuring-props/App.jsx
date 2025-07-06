import Contact from "./Contact"
import './index.css'

import mrWhiskerson from "./images/image1.png"
import Fluffykins from "./images/image2.png"
import Felix from "./images/image3.png"
import Pumpkin from "./images/image4.png"


function App() {
    return (
        <div className="contacts">
            <Contact 
                img={mrWhiskerson} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={Fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
                />
            <Contact 
                img={Felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                />
            <Contact
                img={Pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
             />
        </div>
    )
}

export default App 
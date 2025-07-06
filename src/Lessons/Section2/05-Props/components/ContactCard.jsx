export default function ContactCard(props){
    return (
        <>
                <article className="contact-card">
                    <img 
                        src={props.imagePath}
                        alt="Photo"
                    />
                    <h3>{props.name}</h3>
                    <div className="info-group">
                        <img 
                            src="src/Lessons/Section2/Props/images/phone-icon.png" 
                            alt="phone icon" 
                        />
                        <p>{props.phone}</p>
                    </div>
                    <div className="info-group">
                        <img 
                            src="src/Lessons/Section2/Props/images/mail-icon.png" 
                            alt="mail icon"
                        />
                        <p>{props.email}</p>
                    </div>
                </article>
            
        </>
    )
}


const props = {
    name: 'Mr. Whiskerson',
    phone: '(212) 555-1234',
    email: 'mr.whiskaz@catnap.meow',
    imagePath: 'src/Lessons/Section2/Props/images/image1.png'
}



const {name, somethingelse} = props

console.log(somethingelse)
console.log(props.name)
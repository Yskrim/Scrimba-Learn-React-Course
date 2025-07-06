


export default function Contact({ name,img, phone, email }) {
    return (
        <article className="contact-card">
            <img
                src={ img }
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{ name }</h3>
            <div className="info-group">
                <img
                    src="src/Lessons/Section2/props-part-4/images/phone-icon.png"
                    alt="phone-icon"
                />
                <p>{ phone }</p>
            </div>
            <div className="info-group">
                <img
                    src="src/Lessons/Section2/props-part-4/images/mail-icon.png"
                    alt="mail-icon"
                />
                <p>{ email }</p>
            </div>
        </article>
    )
}

const person = {
    name: "Mr. Whiskerson",
    img: "src/Lessons/Section2/props-part-4/images/image1.png",
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catsnap.meow",
    id: 444
}

const {img, name, id = 123} = person
console.log(img);

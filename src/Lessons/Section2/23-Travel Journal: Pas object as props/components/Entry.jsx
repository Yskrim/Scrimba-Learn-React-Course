export default function Entry(props) {
    console.log
    return (
        <main>
            <div className='article-card'>
                <div className="article-img-container">
                    <img className="article-image" src={props.entry.img.src} alt={props.entry.img.alt} />
                </div>

                <div className="article-card-content">
                    <div className="upper">
                        <img className="upper-icon" src="src/Lessons/Section2/23-Travel Journal: Pas object as props/images/marker.png" alt="marker"/>
                        <p className="location">{props.entry.country}</p>
                        <a className="google-maps-link" href={props.entry.googleLink}>View on Google Maps</a>
                    </div>
                    <h1 className="heading">{props.entry.title}</h1>
                    <p className="dates">{props.entry.dates}</p>
                    <p className="article-card-decription">{props.entry.text}
                    </p>
                </div>
            </div>

        </main>
    )
}


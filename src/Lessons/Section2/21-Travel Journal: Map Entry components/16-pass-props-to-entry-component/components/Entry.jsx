

export default function Entry(props) {
    return (
        <main>
            <div className='article-card'>
                <div className="article-img-container">
                    <img className="article-image" src={props.img.src} alt={props.img.alt} />
                </div>

                <div className="article-card-content">
                    <div className="upper">
                        <img className="upper-icon" src="src/Lessons/Section2/21-Travel Journal: Map Entry components/16-pass-props-to-entry-component/images/marker.png" alt="marker"/>
                        <p className="location">{props.location}</p>
                        <a className="google-maps-link" href={props.googleLink}>View on Google Maps</a>
                    </div>
                    <h1 className="heading">{props.heading}</h1>
                    <p className="dates">{props.dates}</p>
                    <p className="article-card-decription">{props.description}
                    </p>
                </div>
            </div>

        </main>
    )
}


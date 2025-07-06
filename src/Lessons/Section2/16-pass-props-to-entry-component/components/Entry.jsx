export default function Entry(props) {
    return (
        <main>
            <div className='article-card'>
                <div className="article-img-container">
                    <img className="article-image" src={props.img.src} alt={props.img.alt} />
                </div>

                <div className="article-card-content">
                    <div className="upper">
                        <img className="upper-icon" src="src/Lessons/Section2/travel-journal-header/images/marker.png"/>
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

/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */
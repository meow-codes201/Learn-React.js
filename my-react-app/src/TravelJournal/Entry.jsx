// import fouji from "./Mt._Fuji.jpg"
import marker from "./myMarker.jpg"
import styles from "./Entry.module.css"
function Entry(props){

return(<>


    <article className={styles.journalEntry}>
        <div className={styles.container}>
            <img src={props.src} alt={props.alt} className={styles.img1} />
        </div>
        <div className="my-div">
            <img src={marker} alt="marker" className={styles.marker} />
            <span>{props.country}</span>
            <a className={styles.anchor} target="_blank" href={props.googleMapsUrl}>View on google maps</a>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.date}>{props.date}</p>
            <p className={styles.description}>{props.description}</p>

        </div>
    </article>
    </>
)
}

export default Entry;
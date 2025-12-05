import fouji from "./Mt._Fuji.jpg"
import marker from "./marker.png"
function Entry(){

return(
    <article>
        <img src={fouji} alt="Mount Fuji" />
        <div>
            <img src={marker} alt="" />
            <span>Japan</span>
            <a target="_blank" href="https://maps.app.goo.gl/hz4cWfUyGue7o1Xw6">View on google maps</a>
        </div>
    </article>
)
}

export default Entry;
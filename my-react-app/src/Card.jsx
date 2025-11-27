import profilePic from './assets/Omnix.jpg'
import './Card.css'
function Card(){



    return(
        <div className="card">
            <img src={profilePic} className='card-img'/>
            <h2 className='title'>Omnix</h2>
            <p className='card-text'>Polymath in tech</p>

        </div>


    );
}
export default Card
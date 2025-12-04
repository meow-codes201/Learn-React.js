import picLink from  './assets/react.svg'
import { Fragment } from 'react'
import styles from './Excitement.module.css';
function Excitement(){

    
    return(
        <Fragment>
        <img src={picLink} alt="react-logo" className={styles['react-logo']} />
        <header className={styles["head"]}>
            <nav>
            <ul className={styles['nav-list']}>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </header>

        <ol className={styles['my-ol']}>
            <li>new skill</li>
            <li>popular library</li>
            <li>easy</li>
            <li>declarative</li>



        </ol>
        
        
        </Fragment>
    )


    
}
export default Excitement
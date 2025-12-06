import chef from './chefGuy.png';
import styles from './HeaderChef.module.css';
function HeaderChef(props){
return(
    <>
    <header className={styles.myHeader}>
        <img src={chef} alt="chef" className={styles.myLogo} />
    <h1 className={styles.myTitle}>Chef Claude</h1>
    
 
    </header>
    
    </>
);

}
export default HeaderChef;